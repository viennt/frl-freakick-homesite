import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { HelpService } from '../../../services/help.service';
import { MessageService } from '../../../services/message.service';
import { AuthenticationService } from '../../../services/authentication.service';

import { Message } from '../../../models/Message';
import { Facility } from '../../../models/Facility';

@Component({
  moduleId: module.id,
  selector: 'sd-booking-field-ticket',
  templateUrl: 'booking-field-ticket.component.html',
  styleUrls: ['booking-field-ticket.component.css'],
  providers: [HelpService, AuthenticationService]
})
export class BookingFieldComponent implements OnInit, OnChanges {
  @Input() field: Facility;
  @Input() bookingDate: number;
  @Input() bookingTime: {label: string, value: number};

  public timeEnd: number;
  public bookingTimeLabel: string;
  public durationTimes: {label: string, value: number}[];

  public isBookingSuccess: boolean;
  public bookingErrorMessage: string;

  constructor(
      private authService: AuthenticationService,
      private messageService: MessageService
  ) {
  }

  /**
   * Init component
   */
  ngOnInit(): void {
    this.messageService.messages.subscribe(message => this.handleMessage(message));
  }

  ngOnChanges(changes: any): any {
    for (let propName in changes) {
      if ('bookingTime' === propName || 'field' === propName) {
        this.isBookingSuccess = null;
        this.bookingErrorMessage = null;

        let fieldTimezoneOffset: number = HelpService.getTimezoneOffset(this.field.branch.timeZone);
        this.bookingTimeLabel = HelpService.convertDoubleTimeToString(this.bookingTime.value + fieldTimezoneOffset);
        let selectedTime = moment(this.bookingTimeLabel, 'HH:mm');
        let closedTime = moment(this.field.closedTime, 'HH:mm');
        let diffTime = closedTime.diff(selectedTime, 'hours', true);

        this.durationTimes = [];
        for (let durationTimeValue = 0.5; durationTimeValue <= diffTime; durationTimeValue += 0.5) {
          if (durationTimeValue === 0.5) this.durationTimes.push({label: '30 minutes', value: durationTimeValue});
          else if (durationTimeValue === 1) this.durationTimes.push({label: '1 hour', value: durationTimeValue});
          else this.durationTimes.push({label: durationTimeValue + ' hours', value: durationTimeValue});
        }
        if (this.durationTimes.length > 0) this.timeEnd = this.durationTimes[0].value;
      }
    }
  }

  handleMessage(message:any) {
    switch (message.messageType) {
      case 'REQUEST_ERROR':
        this.isBookingSuccess = false;
        this.bookingErrorMessage = message.data.message;
        break;
      case 'CREATE_BOOKING_SUCCESS':
        this.isBookingSuccess = true;
        this.bookingErrorMessage = null;
        break;
      default:
        break;
    }
  }

  sendMessageToBookField() {
    let timeOffset: number = HelpService.getTimezoneOffset(this.field.branch.timeZone);
    let startTime: number = HelpService.convertStringTimeToDouble(
      HelpService.getTimeLocalToUTC(Number(this.bookingTime.value), timeOffset)
    );
    let endTime: number = HelpService.convertStringTimeToDouble(
      HelpService.getTimeLocalToUTC(Number(this.bookingTime.value) + Number(this.timeEnd), timeOffset)
    );
    let apiPackage = new BookData(
      this.authService.getAuthenticatedUser().userId,
      this.field.fieldId,
      startTime, endTime,
      moment(this.bookingDate).valueOf()
    );
    this.messageService.sendMessage(
      new Message('CREATE_BOOKING', apiPackage)
    );
  }

  submitBooking() {
    if(!this.timeEnd) return;
    if (typeof this.field === 'undefined') return;
    this.sendMessageToBookField();
  }

}

export class BookData {
  constructor(
    public userId: number,
    public fieldId: number,
    public startTime: number,
    public endTime: number,
    public date: number
  ) { }
}

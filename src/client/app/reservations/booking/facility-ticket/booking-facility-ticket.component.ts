import {
  Component,
  OnInit,
  Input,
  OnChanges,
  AfterViewInit
} from '@angular/core';

/**
 * Import services
 */
import { HelpService } from '../../../services/help.service';
import { MessageService } from '../../../services/message.service';

/**
 * Import models
 */
import { Message } from '../../../models/Message';
import { Facility } from '../../../models/Facility';

/**
 * Import packages
 */
import { CreateGuestTicketOnFacilities } from '../../../packages/CreateGuestTicketOnFacilities';

@Component({
  moduleId: module.id,
  selector: 'sd-booking-facility-ticket',
  templateUrl: 'booking-facility-ticket.component.html',
  styleUrls: ['booking-facility-ticket.component.css'],
})
export class BookingFacilityComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() facility: Facility;

  protected availableTimes: string[];
  protected bookingTicketDate: string;
  protected bookingTicketTime: string;
  protected bookingTicketQuantity: number;

  protected isBookingSuccess: boolean;
  protected bookingErrorMessage: string;

  protected submitState: number; // O: not ready, 1: ready, 2: submited

  constructor(
    protected messageService: MessageService) { }

  ngOnInit(): any {
    this.messageService.messages.subscribe((message: Message) => this.handleMessage(message));

    this.availableTimes = HelpService.getListHoursInDay().map((time: any) => { return time.name; });
    this.bookingTicketDate = moment().add(1, 'day').format('YYYY-MM-DD');
    this.bookingTicketTime = '7:00 AM';
    this.bookingTicketQuantity = 0;
    this.submitState = 0;
  }

  ngAfterViewInit(): any {
    jQuery('#facility-ticket-daterange').daterangepicker({
      singleDatePicker: true,
      minDate: moment().add(1, 'day').format('YYYY-MM-DD'),
      locale: {format: 'YYYY-MM-DD'}
    }, (pickedDate: any) => {
      this.bookingTicketDate = pickedDate.format('YYYY-MM-DD');
      this.submitState = 1;
    });
  }

  ngOnChanges(changes: any): any {
    for (let propName in changes) {
      if ('facility' === propName) {
        this.isBookingSuccess = null;
        this.bookingErrorMessage = null;
        this.bookingTicketDate = moment().add(1, 'day').format('YYYY-MM-DD');
        this.bookingTicketTime = '7:00 AM';
        this.bookingTicketQuantity = 1;
      }
    }
  }

  handleMessage(message: Message): void {
    switch (message.messageType) {
      case 'REQUEST_ERROR':
        this.submitState = 1;
        this.isBookingSuccess = false;
        this.bookingErrorMessage = message.data.message;
        break;
      case 'CREATE_GUEST_TICKET_ON_FACILITIES_SUCCESS':
        this.isBookingSuccess = true;
        this.bookingErrorMessage = null;
        break;
      default:
    }
  }

  sendMessageToBookATicket(): void {
    let fullTime: string = this.bookingTicketDate + ' ' + this.bookingTicketTime;
    let searchingTime: number = moment.tz(fullTime, 'YYYY-MM-DD H:mm A', this.facility.branch.timeZone).utc().valueOf();
    let apiPackage = new CreateGuestTicketOnFacilities()
        .setFacility(this.facility)
        .setTime(searchingTime)
        .setQuantity(this.bookingTicketQuantity);
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  onBookingTicket(): any {
    if (typeof this.facility === 'undefined') return;
    if (typeof this.bookingTicketDate === 'undefined') return;
    if (typeof this.bookingTicketTime === 'undefined') return;
    if (typeof this.bookingTicketQuantity === 'undefined') return;
    this.isBookingSuccess = false;
    this.submitState = 2;
    this.sendMessageToBookATicket();
  }

  onChangeQuantity(value: any): any {
    if (value === null || value <= 0) {
      this.submitState = 0;
    } else {
      this.submitState = 1;
    }
  }
}

import { Component, OnInit, OnDestroy, Input, OnChanges } from '@angular/core';

/**
 * Import services
 */
import { HelpService } from '../../../services/help.service';
import { MessageService } from '../../../services/message.service';

/**
 * Import models
 */
import { Message } from '../../../models/Message';
import { ClassSchedule } from '../../../models/ClassSchedule';
import { TrainingClass } from '../../../models/TrainingClass';

/**
 * Import packages
 */
import { BookGuestTicketForClass } from '../../../packages/BookGuestTicketForClass';

@Component({
  moduleId: module.id,
  selector: 'sd-booking-class-ticket',
  templateUrl: 'booking-class-ticket.component.html',
  styleUrls: ['booking-class-ticket.component.css'],
})

export class BookingClassComponent implements OnInit, OnDestroy, OnChanges {

  @Input() classSchedule: ClassSchedule;
  @Input() trainingClass: TrainingClass;

  protected availableTimes: string[];
  protected bookingTicketDate: string;
  protected bookingTicketTime: string;
  protected bookingTicketQuantity: number;

  protected isBookingSuccess: boolean;
  protected bookingErrorMessage: string;

  protected isLoading: boolean;
  protected submitState: number; // O: not ready, 1: ready, 2: submited

  protected validDates: string[];

  constructor(
    protected messageService: MessageService) {

  }

  ngOnInit(): any {
    this.messageService.messages.subscribe((message: Message) => this.handleMessage(message));

    this.availableTimes = HelpService.getListHoursInDay().map((time: any) => { return time.name; });
    this.bookingTicketDate = moment().add(1, 'day').format('YYYY-MM-DD');
    this.bookingTicketTime = '7:00 AM';
    this.bookingTicketQuantity = 0;
    this.validDates = this.getValidDates();
    this.isLoading = false;
    this.submitState = 0;
  }

  ngOnDestroy(): any {
    this.classSchedule = null;
    this.trainingClass = null;
    this.validDates = null;
  }

  ngOnChanges(changes: any): any {
    for (let propName in changes) {
      if ('trainingClass' === propName || 'classSchedule' === propName) {
        this.isBookingSuccess = null;
        this.bookingErrorMessage = null;
        this.bookingTicketDate = moment().add(1, 'day').format('YYYY-MM-DD');
        this.bookingTicketTime = '7:00 AM';
        this.bookingTicketQuantity = 1;
        this.validDates = this.getValidDates();

        this.isLoading = true;
        setTimeout(() => {
          this.isLoading = false;
          jQuery('#class-ticket-daterange').daterangepicker({
            singleDatePicker: true,
            minDate: moment(this.trainingClass.from).format('YYYY-MM-DD'),
            maxDate: moment(this.trainingClass.to).format('YYYY-MM-DD'),
            locale: {format: 'YYYY-MM-DD'},
            isInvalidDate: (date: any) => this.validDates.indexOf(date.format('dddd')) < 0
          }, (pickedDate: any) => {
            this.bookingTicketDate = pickedDate.format('YYYY-MM-DD');
            this.submitState = 1;
          });
        }, 300);
      }
    }
  }

  getValidDates(): string[] {
    let validDatesOfWeek: string[] = [];
    if (this.classSchedule.monday !== null) validDatesOfWeek.push('Monday');
    if (this.classSchedule.tuesday !== null) validDatesOfWeek.push('Tuesday');
    if (this.classSchedule.wednesday !== null) validDatesOfWeek.push('Wednesday');
    if (this.classSchedule.thursday !== null) validDatesOfWeek.push('Thursday');
    if (this.classSchedule.friday !== null) validDatesOfWeek.push('Friday');
    if (this.classSchedule.saturday !== null) validDatesOfWeek.push('Saturday');
    if (this.classSchedule.sunday !== null) validDatesOfWeek.push('Sunday');
    return validDatesOfWeek;
  }

  handleMessage(message: Message): void {
    switch (message.messageType) {
      case 'REQUEST_ERROR':
        this.submitState = 1;
        this.isBookingSuccess = false;
        this.bookingErrorMessage = message.data.message;
        break;
      case 'BOOK_GUEST_TICKET_FOR_CLASS_SUCCESS':
        this.isBookingSuccess = true;
        this.bookingErrorMessage = null;
        break;
      default:
    }
  }

  sendMessageToBookATicket(): void {
    let fullTime: string = this.bookingTicketDate + ' ' + this.bookingTicketTime;
    let searchingTime: number = moment.tz(fullTime, 'YYYY-MM-DD H:mm A', this.trainingClass.branch.timeZone).utc().valueOf();
    let apiPackage = new BookGuestTicketForClass()
        .setTrainingClass(this.trainingClass)
        .setTime(searchingTime)
        .setQuantity(this.bookingTicketQuantity);
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  onBookingTicket(): any {
    if (typeof this.trainingClass === 'undefined') return;
    if (typeof this.bookingTicketDate === 'undefined') return;
    if (typeof this.bookingTicketTime === 'undefined') return;
    if (typeof this.bookingTicketQuantity === 'undefined') return;
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

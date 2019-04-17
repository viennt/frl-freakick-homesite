import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Event } from '../../../models/Event';

import { GetEventInfo } from '../../../packages/GetEventInfo';

import { MessageService } from '../../../services/message.service';

@Component({
  moduleId: module.id,
  selector: 'app-single-event-modal',
  template: `
      <modal #modal [cssClass]="'modal--login modal--login-only'"
             [animation]="false"
             (onClose)="onCloseModal($event)"
             (onDismiss)="onCloseModal($event)">
          <modal-header [show-close]="false">
              <button type="button" class="close" data-dismiss="modal"
                      aria-label="Close">
                  <span aria-hidden="true">×</span>
              </button>
          </modal-header>
          <app-template-short-event-detail *ngIf="event" [event]="event">
          </app-template-short-event-detail>
      </modal>
  `,
  styles: [`
      modal /deep/ .modal-dialog {
          width: 80vw;
      }

      modal /deep/ .modal--login .modal-header .close {
          text-indent: unset;
          z-index: 1;
      }

      @media (max-width: 767px) {
          modal /deep/ .modal-dialog {
              width: calc(100vw - 20px);
          }

          modal /deep/ .modal--login .modal-header .close {
              top: 30px;
              right: 30px;
          }
      }

      modal /deep/ .modal--login .modal-header .close span {
          margin: 0;
      }

      modal /deep/ .modal-content {
          background-color: transparent;
          border: none;
      }
  `]
})
export class SingleEventModalComponent implements OnInit, OnDestroy {
  @ViewChild('modal') modal: ModalComponent;

  public event: Event;

  public expandEventDescription: boolean;
  public expandEventMap: boolean;

  private routeSub: any;
  private messageSub: any;

  constructor(private _location: Location,
              private route: ActivatedRoute,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(
      params => this.handleRoute(params)
    );
    this.messageSub = this.messageService.messages.subscribe(
      message => this.handleMessage(message)
    );
  }

  ngOnDestroy() {
    this._location = undefined;
    this.routeSub.unsubscribe();
    this.messageSub.unsubscribe();
  }

  handleRoute(params: any): any {
    this.sendMessageToGetEventInfo(+params['id']);
  }

  handleMessage(message: any) {
    switch (message.messageType) {
      case 'GET_EVENT_DETAIL_SUCCESS':
        this.modal.open();
        this.event = new Event(message.data.event);
        break;
    }
  }

  sendMessageToGetEventInfo(eventId: number): void {
    let apiPackage = new GetEventInfo().setEventId(eventId);
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  onCloseModal() {
    if (this._location) this._location.back();
  }
}

import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { MessageService } from '../services/message.service';
import { Message } from '../models/Message';
import { NotificationSuccessPopupComponent } from './notification-success-popup/notification-success-popup.component';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'frk-contact',
    templateUrl: 'contact.component.html',
    styleUrls: [`contact.component.css`]
})
export class ContactComponent implements OnInit, OnDestroy {
    @ViewChild('successContactPopup') successContactPopup: NotificationSuccessPopupComponent;

    public isLoading: boolean;
    public contactName: string;
    public contactEmail: string;
    public contactMessage: string;
    private messageSub: Subscription;

    constructor(private messageService: MessageService,
                private router: Router) {
        //
    }

    ngOnInit() {
        this.isLoading = false;
        this.messageSub = this.messageService.messages.subscribe(
            message => this.handleMessage(message)
        );
    }

    ngOnDestroy() {
        this.messageSub.unsubscribe();
        delete this.contactMessage;
        delete this.contactEmail;
        delete this.contactName;
    }

    handleMessage(message: any) {
        switch (message.messageType) {
            case 'SEND_CONTACT_EMAIL_SUCCESS':
                this.isLoading = false;
                this.successContactPopup.open();
            break;
        }
    }

    sendMessageToSubmitContactInfo(): void {
        if (!this.contactName || !this.contactEmail || !this.contactMessage) return;
        this.isLoading = true;
        this.messageService.sendMessage(new Message(
            'SEND_CONTACT_EMAIL',
            {name: this.contactName, email: this.contactEmail, content: this.contactMessage}
        ));
    }

    success() {
        delete this.contactMessage;
    }
}

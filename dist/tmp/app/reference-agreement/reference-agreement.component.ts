import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


import { MessageService } from '../services/message.service';

import { Message } from '../models/Message';
import { NotificationsService } from '../plugins/notifi/notifications.service';

@Component({
    moduleId: module.id,
    selector: 'frk-reference-agreement',
    templateUrl: 'reference-agreement.component.html',
    styleUrls: ['reference-agreement.component.css'],
})
export class ReferenceAgreementComponent implements OnInit, OnDestroy {
    public isChecked: boolean;
    public token: string;
    public secretKey: string;

    private routeSub: Subscription;
    private messageSub: any;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private messageService: MessageService,
                private notify: NotificationsService) {
        //
    }

    ngOnInit() {
        this.isChecked = false;
        this.routeSub = this.route.queryParams.subscribe(params => {
            this.token = params['token'];
            this.secretKey = params['key'];
        });

        this.messageSub = this.messageService.messages.subscribe(
            message => this.handleMessage(message)
        );
    }

    ngOnDestroy() {
        this.messageSub.unsubscribe();
    }

    handleMessage(message: any) {
        switch (message.messageType) {
            case 'PARENT_RESPONSE_TO_TERMS_OF_SERVICE_WITHOUT_BEING_A_USER_SUCCESS':
                this.router.navigate(
                    ['home']
                );
                break;
            case 'REQUEST_ERROR':
                this.notify.error('Error','Fail to agree the terms of service');
                break;
        }
    }

    submit() {
        this.messageService.sendMessage(new Message(
            'PARENT_RESPONSE_TO_TERMS_OF_SERVICE_WITHOUT_BEING_A_USER', {
                activeToken: this.token,
                secretKey: this.secretKey
            }
        ));
    }
}

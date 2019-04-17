import {
  Component, EventEmitter, Input, OnInit, OnChanges, OnDestroy, Output,
  ViewChild
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder, FormGroup, ValidatorFn,
  Validators
} from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { MessageService } from '../../services/message.service';

import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { Message } from '../../models/Message';

export class NumberValidator extends Validators {
  /**
   * Validator that requires controls to have a value of a minimum value.
   */
  static minValue(min: Number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const input = control.value;
      if (input < min) {
        return {'minValue': {min}};
      } else {
        return null;
      }
    };
  }
}

@Component({
  moduleId: module.id,
  selector: 'frk-registration-form',
  templateUrl: 'registration-form.component.html',
  styleUrls: ['registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit, OnChanges, OnDestroy {
  @Input() invitationToken: number;
  @Input() invitationEmail: number;
  @Output() success: EventEmitter<any> = new EventEmitter();

  @ViewChild('modal') modal: ModalComponent;

  public isLoading: boolean;

  public registerForm: FormGroup;

  private messageSub: Subscription;

  constructor(private messageService: MessageService,
              private fb: FormBuilder,) {
    //
  }

  ngOnInit() {
    this.messageSub = this.messageService.messages.subscribe(
      message => this.handleMessage(message)
    );
  }

  ngOnChanges(changes: any) {
    this.registerForm = this.fb.group({
      'fullName': ['', Validators.required],
      'organization': ['', Validators.required],
      'phoneNumber': ['', Validators.required],
      'address': ['', Validators.required],
      'invitationToken': [this.invitationToken, Validators.required],
      'email': [this.invitationEmail, Validators.required],
      'isAccept': [true, Validators.required],
      'quantity': [1, [
        Validators.required,
        NumberValidator.minValue(1)
      ]],
      'eventPriceId': [-1, Validators.required],
    });
  }

  ngOnDestroy() {
    this.messageSub.unsubscribe();
  }

  handleMessage(message: any) {
    switch (message.messageType) {
      case 'UPDATE_INVITATION_VIA_INVITATION_TOKEN_SUCCESS':
        let verifyCode = message.data.ticket.verifyCode;
        let activeToken = message.data.activeToken;
        this.success.emit({verifyCode: verifyCode, activeToken: activeToken});
        this.close();
        break;
      case 'REQUEST_ERROR':
        this.modal.close();
        break;
    }
  }

  sendMessageToAcceptInvitation(): void {
    this.isLoading = true;
    this.messageService.sendMessage(new Message(
      'UPDATE_INVITATION_VIA_INVITATION_TOKEN',
      this.registerForm.value
    ));
  }

  close() {
    this.modal.close();
  }

  open() {
    this.modal.open();
  }

  onCloseModal() {
    delete this.isLoading;
  }
}

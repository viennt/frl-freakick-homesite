import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/** Import services */
import { MessageService } from '../../services/message.service';
import { NotificationsService } from '../../plugins/notifi/notifications.service';

/** Import models */
import { Message } from '../../models/Message';
import { Country } from '../../models/Country';
import { State } from '../../models/State';
import { City } from '../../models/City';

@Component({
  moduleId: module.id,
  selector: 'frk-activate-form',
  templateUrl: 'activate-form.component.html',
  styleUrls: [
    '../components.min.css',
    'activate-form.component.css'
  ]
})
export class ActivateFormComponent implements OnInit {
  @Input() isLoading: boolean;

  @Output() submit: EventEmitter<any> = new EventEmitter();

  public validateForm: FormGroup;

  public countries: Country[];
  public states: State[];
  public cities: City[];

  constructor(private fb: FormBuilder,
    private messageService: MessageService,
    private notify: NotificationsService) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      'username': ['', Validators.required],
      'fullName': ['', [Validators.required, Validators.maxLength(100)]],
      'password': ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
      'confirmPassword': ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
      'countryId': ['', [Validators.required]],
      'stateId': ['', [Validators.required]],
      'cityId': ['', [Validators.required]]
    }, { validator: this.matchingPasswords('password', 'confirmPassword') });
    this.messageService.messages.subscribe(message => this.handleMessage(message));
    this.sendMessageToGetCountries();
  }

  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): { [key: string]: any } => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
      return {
        mismatchedPasswords: false
      };
    };
  }

  sendMessageToGetCountries() {
    this.messageService.sendMessage(
      new Message('GET_COUNTRIES', {})
    );
  }

  onChangedCountry(countryId: number): void {
    this.messageService.sendMessage(
      new Message('FIND_STATE_BY_COUNTRY', { countryId: Number(countryId) })
    );
  }

  onChangedState(stateId: number): void {
    this.messageService.sendMessage(
      new Message('FIND_CITY_BY_STATE', { stateId: Number(stateId) })
    );
  }

  handleMessage(message: any) {
    switch (message.messageType) {
      case 'COUNTRIES_LST':
        this.countries = message.data.countriesLst;
        break;
      case 'STATE_LST':
        this.states = message.data.stateLst;
        break;
      case 'CITY_LST':
        this.cities = message.data.cityLst;
        break;
    }
  }

  onClickSubmit({ value }: { value: any, valid: boolean }) {
    if (value.username === '' || value.fullName === '' || value.countryId === ''
      || value.stateId === '' || value.cityId === '' || value.password !== value.confirmPassword) {
        this.notify.error('Error', 'Invalid input');
    } else {
      this.submit.emit(value);
    }
  }
}

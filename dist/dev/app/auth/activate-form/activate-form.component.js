"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var message_service_1 = require('../../services/message.service');
var notifications_service_1 = require('../../plugins/notifi/notifications.service');
var Message_1 = require('../../models/Message');
var ActivateFormComponent = (function () {
    function ActivateFormComponent(fb, messageService, notify) {
        this.fb = fb;
        this.messageService = messageService;
        this.notify = notify;
        this.submit = new core_1.EventEmitter();
    }
    ActivateFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.validateForm = this.fb.group({
            'username': ['', forms_1.Validators.required],
            'fullName': ['', [forms_1.Validators.required, forms_1.Validators.maxLength(100)]],
            'password': ['', [forms_1.Validators.required, forms_1.Validators.minLength(1), forms_1.Validators.maxLength(100)]],
            'confirmPassword': ['', [forms_1.Validators.required, forms_1.Validators.minLength(1), forms_1.Validators.maxLength(100)]],
            'countryId': ['', [forms_1.Validators.required]],
            'stateId': ['', [forms_1.Validators.required]],
            'cityId': ['', [forms_1.Validators.required]]
        }, { validator: this.matchingPasswords('password', 'confirmPassword') });
        this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
        this.sendMessageToGetCountries();
    };
    ActivateFormComponent.prototype.matchingPasswords = function (passwordKey, confirmPasswordKey) {
        return function (group) {
            var password = group.controls[passwordKey];
            var confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
            return {
                mismatchedPasswords: false
            };
        };
    };
    ActivateFormComponent.prototype.sendMessageToGetCountries = function () {
        this.messageService.sendMessage(new Message_1.Message('GET_COUNTRIES', {}));
    };
    ActivateFormComponent.prototype.onChangedCountry = function (countryId) {
        this.messageService.sendMessage(new Message_1.Message('FIND_STATE_BY_COUNTRY', { countryId: Number(countryId) }));
    };
    ActivateFormComponent.prototype.onChangedState = function (stateId) {
        this.messageService.sendMessage(new Message_1.Message('FIND_CITY_BY_STATE', { stateId: Number(stateId) }));
    };
    ActivateFormComponent.prototype.handleMessage = function (message) {
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
    };
    ActivateFormComponent.prototype.onClickSubmit = function (_a) {
        var value = _a.value;
        if (value.username === '' || value.fullName === '' || value.countryId === ''
            || value.stateId === '' || value.cityId === '' || value.password !== value.confirmPassword) {
            this.notify.error('Error', 'Invalid input');
        }
        else {
            this.submit.emit(value);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ActivateFormComponent.prototype, "isLoading", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ActivateFormComponent.prototype, "submit", void 0);
    ActivateFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-activate-form',
            templateUrl: 'activate-form.component.html',
            styleUrls: [
                '../components.min.css',
                'activate-form.component.css'
            ]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, message_service_1.MessageService, notifications_service_1.NotificationsService])
    ], ActivateFormComponent);
    return ActivateFormComponent;
}());
exports.ActivateFormComponent = ActivateFormComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL2FjdGl2YXRlLWZvcm0vYWN0aXZhdGUtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErRCxlQUFlLENBQUMsQ0FBQTtBQUMvRSxzQkFBbUQsZ0JBQWdCLENBQUMsQ0FBQTtBQUdwRSxnQ0FBK0IsZ0NBQWdDLENBQUMsQ0FBQTtBQUNoRSxzQ0FBcUMsNENBQTRDLENBQUMsQ0FBQTtBQUdsRix3QkFBd0Isc0JBQXNCLENBQUMsQ0FBQTtBQWMvQztJQVdFLCtCQUFvQixFQUFlLEVBQ3pCLGNBQThCLEVBQzlCLE1BQTRCO1FBRmxCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDekIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFdBQU0sR0FBTixNQUFNLENBQXNCO1FBVjVCLFdBQU0sR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFVZixDQUFDO0lBRTNDLHdDQUFRLEdBQVI7UUFBQSxpQkFZQztRQVhDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDaEMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3JDLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLGtCQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbEUsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUUsa0JBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsa0JBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMzRixpQkFBaUIsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLGtCQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLGtCQUFV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RSxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQzNGLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztRQUNoRCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixDQUFDO0lBQ0gsQ0FBQztJQW5GRDtRQUFDLFlBQUssRUFBRTs7NERBQUE7SUFFUjtRQUFDLGFBQU0sRUFBRTs7eURBQUE7SUFaWDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRTtnQkFDVCx1QkFBdUI7Z0JBQ3ZCLDZCQUE2QjthQUM5QjtTQUNGLENBQUM7OzZCQUFBO0lBc0ZGLDRCQUFDO0FBQUQsQ0FyRkEsQUFxRkMsSUFBQTtBQXJGWSw2QkFBcUIsd0JBcUZqQyxDQUFBIiwiZmlsZSI6ImFwcC9hdXRoL2FjdGl2YXRlLWZvcm0vYWN0aXZhdGUtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKiogSW1wb3J0IHNlcnZpY2VzICovXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJy4uLy4uL3BsdWdpbnMvbm90aWZpL25vdGlmaWNhdGlvbnMuc2VydmljZSc7XG5cbi8qKiBJbXBvcnQgbW9kZWxzICovXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL01lc3NhZ2UnO1xuaW1wb3J0IHsgQ291bnRyeSB9IGZyb20gJy4uLy4uL21vZGVscy9Db3VudHJ5JztcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL1N0YXRlJztcbmltcG9ydCB7IENpdHkgfSBmcm9tICcuLi8uLi9tb2RlbHMvQ2l0eSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2Zyay1hY3RpdmF0ZS1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICdhY3RpdmF0ZS1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbXG4gICAgJy4uL2NvbXBvbmVudHMubWluLmNzcycsXG4gICAgJ2FjdGl2YXRlLWZvcm0uY29tcG9uZW50LmNzcydcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBY3RpdmF0ZUZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpc0xvYWRpbmc6IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIHN1Ym1pdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHVibGljIHZhbGlkYXRlRm9ybTogRm9ybUdyb3VwO1xuXG4gIHB1YmxpYyBjb3VudHJpZXM6IENvdW50cnlbXTtcbiAgcHVibGljIHN0YXRlczogU3RhdGVbXTtcbiAgcHVibGljIGNpdGllczogQ2l0eVtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgbm90aWZ5OiBOb3RpZmljYXRpb25zU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy52YWxpZGF0ZUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgICd1c2VybmFtZSc6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAnZnVsbE5hbWUnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1heExlbmd0aCgxMDApXV0sXG4gICAgICAncGFzc3dvcmQnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgxKSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTAwKV1dLFxuICAgICAgJ2NvbmZpcm1QYXNzd29yZCc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDEpLCBWYWxpZGF0b3JzLm1heExlbmd0aCgxMDApXV0sXG4gICAgICAnY291bnRyeUlkJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgJ3N0YXRlSWQnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAnY2l0eUlkJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dXG4gICAgfSwgeyB2YWxpZGF0b3I6IHRoaXMubWF0Y2hpbmdQYXNzd29yZHMoJ3Bhc3N3b3JkJywgJ2NvbmZpcm1QYXNzd29yZCcpIH0pO1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2UubWVzc2FnZXMuc3Vic2NyaWJlKG1lc3NhZ2UgPT4gdGhpcy5oYW5kbGVNZXNzYWdlKG1lc3NhZ2UpKTtcbiAgICB0aGlzLnNlbmRNZXNzYWdlVG9HZXRDb3VudHJpZXMoKTtcbiAgfVxuXG4gIG1hdGNoaW5nUGFzc3dvcmRzKHBhc3N3b3JkS2V5OiBzdHJpbmcsIGNvbmZpcm1QYXNzd29yZEtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIChncm91cDogRm9ybUdyb3VwKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9PiB7XG4gICAgICBsZXQgcGFzc3dvcmQgPSBncm91cC5jb250cm9sc1twYXNzd29yZEtleV07XG4gICAgICBsZXQgY29uZmlybVBhc3N3b3JkID0gZ3JvdXAuY29udHJvbHNbY29uZmlybVBhc3N3b3JkS2V5XTtcblxuICAgICAgaWYgKHBhc3N3b3JkLnZhbHVlICE9PSBjb25maXJtUGFzc3dvcmQudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtaXNtYXRjaGVkUGFzc3dvcmRzOiB0cnVlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtaXNtYXRjaGVkUGFzc3dvcmRzOiBmYWxzZVxuICAgICAgfTtcbiAgICB9O1xuICB9XG5cbiAgc2VuZE1lc3NhZ2VUb0dldENvdW50cmllcygpIHtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnNlbmRNZXNzYWdlKFxuICAgICAgbmV3IE1lc3NhZ2UoJ0dFVF9DT1VOVFJJRVMnLCB7fSlcbiAgICApO1xuICB9XG5cbiAgb25DaGFuZ2VkQ291bnRyeShjb3VudHJ5SWQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc2VuZE1lc3NhZ2UoXG4gICAgICBuZXcgTWVzc2FnZSgnRklORF9TVEFURV9CWV9DT1VOVFJZJywgeyBjb3VudHJ5SWQ6IE51bWJlcihjb3VudHJ5SWQpIH0pXG4gICAgKTtcbiAgfVxuXG4gIG9uQ2hhbmdlZFN0YXRlKHN0YXRlSWQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc2VuZE1lc3NhZ2UoXG4gICAgICBuZXcgTWVzc2FnZSgnRklORF9DSVRZX0JZX1NUQVRFJywgeyBzdGF0ZUlkOiBOdW1iZXIoc3RhdGVJZCkgfSlcbiAgICApO1xuICB9XG5cbiAgaGFuZGxlTWVzc2FnZShtZXNzYWdlOiBhbnkpIHtcbiAgICBzd2l0Y2ggKG1lc3NhZ2UubWVzc2FnZVR5cGUpIHtcbiAgICAgIGNhc2UgJ0NPVU5UUklFU19MU1QnOlxuICAgICAgICB0aGlzLmNvdW50cmllcyA9IG1lc3NhZ2UuZGF0YS5jb3VudHJpZXNMc3Q7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnU1RBVEVfTFNUJzpcbiAgICAgICAgdGhpcy5zdGF0ZXMgPSBtZXNzYWdlLmRhdGEuc3RhdGVMc3Q7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQ0lUWV9MU1QnOlxuICAgICAgICB0aGlzLmNpdGllcyA9IG1lc3NhZ2UuZGF0YS5jaXR5THN0O1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrU3VibWl0KHsgdmFsdWUgfTogeyB2YWx1ZTogYW55LCB2YWxpZDogYm9vbGVhbiB9KSB7XG4gICAgaWYgKHZhbHVlLnVzZXJuYW1lID09PSAnJyB8fCB2YWx1ZS5mdWxsTmFtZSA9PT0gJycgfHwgdmFsdWUuY291bnRyeUlkID09PSAnJ1xuICAgICAgfHwgdmFsdWUuc3RhdGVJZCA9PT0gJycgfHwgdmFsdWUuY2l0eUlkID09PSAnJyB8fCB2YWx1ZS5wYXNzd29yZCAhPT0gdmFsdWUuY29uZmlybVBhc3N3b3JkKSB7XG4gICAgICAgIHRoaXMubm90aWZ5LmVycm9yKCdFcnJvcicsICdJbnZhbGlkIGlucHV0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3VibWl0LmVtaXQodmFsdWUpO1xuICAgIH1cbiAgfVxufVxuIl19

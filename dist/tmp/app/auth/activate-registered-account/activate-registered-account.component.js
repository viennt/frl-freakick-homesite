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
var router_1 = require('@angular/router');
var router_2 = require('@angular/router');
var message_service_1 = require('../../services/message.service');
var location_service_1 = require('../../services/location.service');
var notifications_service_1 = require('../../plugins/notifi/notifications.service');
var Message_1 = require('../../models/Message');
var md5_1 = require('ts-md5/dist/md5');
var ActivateRegisteredAccountComponent = (function () {
    function ActivateRegisteredAccountComponent(messageService, locationService, notify, route, router) {
        this.messageService = messageService;
        this.locationService = locationService;
        this.notify = notify;
        this.route = route;
        this.router = router;
    }
    ActivateRegisteredAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.queryParams.subscribe(function (params) { return _this.handleRoute(params); });
        this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
        this.locationService.getCurrentPosition(function (position) {
            if (position) {
                _this.latitude = position.location.lat;
                _this.longitude = position.location.lng;
            }
        });
    };
    ActivateRegisteredAccountComponent.prototype.handleRoute = function (params) {
        this.registerEmail = params['email'];
        this.registerToken = params['token'];
    };
    ActivateRegisteredAccountComponent.prototype.handleMessage = function (message) {
        var _this = this;
        this.isLoading = false;
        switch (message.messageType) {
            case 'REGISTER_SUCCESSFUL':
                this.notify.success('Success', 'Registered successfully!');
                setTimeout(function () {
                    _this.router.navigateByUrl('/download');
                }, 1000);
                break;
            case 'REQUEST_ERROR':
                this.notify.error('Error', message.data.message);
                this.errorMsg = message.data.message;
                break;
        }
    };
    ActivateRegisteredAccountComponent.prototype.onSubmitToActivateAccount = function (value) {
        this.errorMsg = '';
        this.successMsg = '';
        this.sendMessageToActiveRegisteredAccount(value);
    };
    ActivateRegisteredAccountComponent.prototype.sendMessageToActiveRegisteredAccount = function (value) {
        this.messageService.sendMessage(new Message_1.Message('REGISTER_USER', {
            username: String(value.username).trim(),
            password: String(md5_1.Md5.hashStr(value.password)).trim(),
            email: String(this.registerEmail),
            fullName: String(value.fullName).trim(),
            cityId: Number(value.cityId),
            countryId: Number(value.countryId),
            latitude: Number(this.latitude),
            longitude: Number(this.longitude),
            registerToken: this.registerToken
        }));
    };
    ActivateRegisteredAccountComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-activate-registered-account',
            template: "\n      <frk-activate-form [isLoading]=\"isLoading\"\n                         (submit)=\"onSubmitToActivateAccount($event)\">\n      </frk-activate-form>\n  "
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService, location_service_1.LocationService, notifications_service_1.NotificationsService, router_1.ActivatedRoute, router_2.Router])
    ], ActivateRegisteredAccountComponent);
    return ActivateRegisteredAccountComponent;
}());
exports.ActivateRegisteredAccountComponent = ActivateRegisteredAccountComponent;

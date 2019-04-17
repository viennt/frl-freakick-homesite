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
var upload_service_1 = require('../../../../services/upload.service');
var authentication_service_1 = require('../../../../services/authentication.service');
var ImageButtonComponent = (function () {
    function ImageButtonComponent(authService, uploadService) {
        this.authService = authService;
        this.uploadService = uploadService;
        this.eventImagesChange = new core_1.EventEmitter();
    }
    Object.defineProperty(ImageButtonComponent.prototype, "eventImages", {
        get: function () {
            return this.eventImagesValue;
        },
        set: function (val) {
            this.eventImagesValue = val;
            this.eventImagesChange.emit(this.eventImagesValue);
        },
        enumerable: true,
        configurable: true
    });
    ImageButtonComponent.prototype.ngOnInit = function () {
    };
    ImageButtonComponent.prototype.onClickButton = function () {
        if (this.isLoading)
            return;
        this.eventImage.nativeElement.click();
    };
    ImageButtonComponent.prototype.onChangeEventImage = function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.addEventListener('load', function (e) { });
        if (file) {
            reader.readAsDataURL(file);
            this.uploadEventImage(file);
        }
    };
    ImageButtonComponent.prototype.uploadEventImage = function () {
        var _this = this;
        var images = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            images[_i - 0] = arguments[_i];
        }
        this.isLoading = true;
        var postData = { userId: this.authService.getItem('userId') };
        this.uploadService.uploadImage(postData, images)
            .then(function (res) {
            _this.isLoading = false;
            if (res._body) {
                _this.eventImages.push(res._body);
            }
        }).catch(function (error) {
            _this.isLoading = false;
            console.error('Error! Upload avatar image: ', error);
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ImageButtonComponent.prototype, "eventImagesChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ImageButtonComponent.prototype, "eventImages", null);
    __decorate([
        core_1.ViewChild('eventImage'), 
        __metadata('design:type', Object)
    ], ImageButtonComponent.prototype, "eventImage", void 0);
    ImageButtonComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-image-button',
            template: "\n      <input #eventImage class=\"hidden\" accept=\"image/*\" type=\"file\"\n             name=\"fileUpload\" (change)=\"onChangeEventImage($event)\"/>\n      <div class=\"button-event btn btn-block btn-circle margin-bottom-10\"\n           [class.grey-steel]=\"!(eventImages && eventImages.length)\"\n           [class.green-dark]=\"(eventImages && eventImages.length)\"\n           (click)=\"onClickButton($event)\">\n          <i *ngIf=\"!isLoading\" class=\"icon-picture\"\n             [class.font-green-dark]=\"!(eventImages && eventImages.length)\"></i>\n          <i *ngIf=\"isLoading\" class=\"fa fa-spinner fa-spin\"\n             [class.font-green-dark]=\"!(eventImages && eventImages.length)\"></i>\n          <span>Images</span>\n      </div>\n  "
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, upload_service_1.UploadService])
    ], ImageButtonComponent);
    return ImageButtonComponent;
}());
exports.ImageButtonComponent = ImageButtonComponent;

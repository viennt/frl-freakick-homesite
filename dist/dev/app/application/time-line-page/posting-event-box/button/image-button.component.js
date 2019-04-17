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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHBsaWNhdGlvbi90aW1lLWxpbmUtcGFnZS9wb3N0aW5nLWV2ZW50LWJveC9idXR0b24vaW1hZ2UtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBFLGVBQWUsQ0FBQyxDQUFBO0FBRTFGLCtCQUE4QixxQ0FBcUMsQ0FBQyxDQUFBO0FBQ3BFLHVDQUFzQyw2Q0FBNkMsQ0FBQyxDQUFBO0FBcUJwRjtJQW1CRSw4QkFBb0IsV0FBa0MsRUFDbEMsYUFBNEI7UUFENUIsZ0JBQVcsR0FBWCxXQUFXLENBQXVCO1FBQ2xDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBZnRDLHNCQUFpQixHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQWVoQixDQUFDO0lBWnJELHNCQUFJLDZDQUFXO2FBQWY7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQy9CLENBQUM7YUFFRCxVQUFnQixHQUFHO1lBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUM7WUFDNUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNyRCxDQUFDOzs7T0FMQTtJQVlELHVDQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsNENBQWEsR0FBYjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELGlEQUFrQixHQUFsQixVQUFtQixLQUFVO1FBQzNCLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7UUFDOUIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxVQUFDLENBQU0sSUFBTSxDQUFDLENBQUMsQ0FBQztRQUNoRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1QsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsQ0FBQztJQUNILENBQUM7SUFFRCwrQ0FBZ0IsR0FBaEI7UUFBQSxpQkFhQztRQWJnQixnQkFBZ0I7YUFBaEIsV0FBZ0IsQ0FBaEIsc0JBQWdCLENBQWhCLElBQWdCO1lBQWhCLCtCQUFnQjs7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxRQUFRLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUM5RCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDO2FBQzdDLElBQUksQ0FBQyxVQUFDLEdBQVE7WUFDYixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDZCxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkMsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEtBQVU7WUFDbEIsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsT0FBTyxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFqREQ7UUFBQyxhQUFNLEVBQUU7O21FQUFBO0lBRVQ7UUFBQyxZQUFLLEVBQUU7OzJEQUFBO0lBVVI7UUFBQyxnQkFBUyxDQUFDLFlBQVksQ0FBQzs7NERBQUE7SUFuQzFCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSwwdkJBYVQ7U0FDRixDQUFDOzs0QkFBQTtJQXdERiwyQkFBQztBQUFELENBdkRBLEFBdURDLElBQUE7QUF2RFksNEJBQW9CLHVCQXVEaEMsQ0FBQSIsImZpbGUiOiJhcHAvYXBwbGljYXRpb24vdGltZS1saW5lLXBhZ2UvcG9zdGluZy1ldmVudC1ib3gvYnV0dG9uL2ltYWdlLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVXBsb2FkU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3VwbG9hZC5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuXG4vLyBUT0RPOiBBZGQgZmVhdHVyZSByZW1vdmUgaW1hZ2VcbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1pbWFnZS1idXR0b24nLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgPGlucHV0ICNldmVudEltYWdlIGNsYXNzPVwiaGlkZGVuXCIgYWNjZXB0PVwiaW1hZ2UvKlwiIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICBuYW1lPVwiZmlsZVVwbG9hZFwiIChjaGFuZ2UpPVwib25DaGFuZ2VFdmVudEltYWdlKCRldmVudClcIi8+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWV2ZW50IGJ0biBidG4tYmxvY2sgYnRuLWNpcmNsZSBtYXJnaW4tYm90dG9tLTEwXCJcbiAgICAgICAgICAgW2NsYXNzLmdyZXktc3RlZWxdPVwiIShldmVudEltYWdlcyAmJiBldmVudEltYWdlcy5sZW5ndGgpXCJcbiAgICAgICAgICAgW2NsYXNzLmdyZWVuLWRhcmtdPVwiKGV2ZW50SW1hZ2VzICYmIGV2ZW50SW1hZ2VzLmxlbmd0aClcIlxuICAgICAgICAgICAoY2xpY2spPVwib25DbGlja0J1dHRvbigkZXZlbnQpXCI+XG4gICAgICAgICAgPGkgKm5nSWY9XCIhaXNMb2FkaW5nXCIgY2xhc3M9XCJpY29uLXBpY3R1cmVcIlxuICAgICAgICAgICAgIFtjbGFzcy5mb250LWdyZWVuLWRhcmtdPVwiIShldmVudEltYWdlcyAmJiBldmVudEltYWdlcy5sZW5ndGgpXCI+PC9pPlxuICAgICAgICAgIDxpICpuZ0lmPVwiaXNMb2FkaW5nXCIgY2xhc3M9XCJmYSBmYS1zcGlubmVyIGZhLXNwaW5cIlxuICAgICAgICAgICAgIFtjbGFzcy5mb250LWdyZWVuLWRhcmtdPVwiIShldmVudEltYWdlcyAmJiBldmVudEltYWdlcy5sZW5ndGgpXCI+PC9pPlxuICAgICAgICAgIDxzcGFuPkltYWdlczwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgaXNMb2FkaW5nOiBib29sZWFuO1xuICBwdWJsaWMgZXZlbnRJbWFnZXNWYWx1ZTogc3RyaW5nW107XG5cbiAgQE91dHB1dCgpIGV2ZW50SW1hZ2VzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKVxuICBnZXQgZXZlbnRJbWFnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRJbWFnZXNWYWx1ZTtcbiAgfVxuXG4gIHNldCBldmVudEltYWdlcyh2YWwpIHtcbiAgICB0aGlzLmV2ZW50SW1hZ2VzVmFsdWUgPSB2YWw7XG4gICAgdGhpcy5ldmVudEltYWdlc0NoYW5nZS5lbWl0KHRoaXMuZXZlbnRJbWFnZXNWYWx1ZSk7XG4gIH1cblxuICBAVmlld0NoaWxkKCdldmVudEltYWdlJykgZXZlbnRJbWFnZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSB1cGxvYWRTZXJ2aWNlOiBVcGxvYWRTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvL1xuICB9XG5cbiAgb25DbGlja0J1dHRvbigpIHtcbiAgICBpZiAodGhpcy5pc0xvYWRpbmcpIHJldHVybjtcbiAgICB0aGlzLmV2ZW50SW1hZ2UubmF0aXZlRWxlbWVudC5jbGljaygpO1xuICB9XG5cbiAgb25DaGFuZ2VFdmVudEltYWdlKGV2ZW50OiBhbnkpIHtcbiAgICBsZXQgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChlOiBhbnkpID0+IHt9KTtcbiAgICBpZiAoZmlsZSkge1xuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgICB0aGlzLnVwbG9hZEV2ZW50SW1hZ2UoZmlsZSk7XG4gICAgfVxuICB9XG5cbiAgdXBsb2FkRXZlbnRJbWFnZSguLi5pbWFnZXM6IGFueVtdKTogdm9pZCB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIGxldCBwb3N0RGF0YSA9IHsgdXNlcklkOiB0aGlzLmF1dGhTZXJ2aWNlLmdldEl0ZW0oJ3VzZXJJZCcpIH07XG4gICAgdGhpcy51cGxvYWRTZXJ2aWNlLnVwbG9hZEltYWdlKHBvc3REYXRhLCBpbWFnZXMpXG4gICAgICAudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKHJlcy5fYm9keSkge1xuICAgICAgICAgIHRoaXMuZXZlbnRJbWFnZXMucHVzaChyZXMuX2JvZHkpO1xuICAgICAgICB9XG4gICAgICB9KS5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciEgVXBsb2FkIGF2YXRhciBpbWFnZTogJywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==

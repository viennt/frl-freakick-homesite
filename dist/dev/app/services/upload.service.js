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
var http_1 = require('@angular/http');
require('rxjs/Rx');
require('rxjs/add/operator/toPromise');
var constants_1 = require('../constants');
var UploadService = (function () {
    function UploadService(http) {
        this.http = http;
        this.headers = new http_1.Headers({
            'enctype': 'multipart/form-data'
        });
    }
    UploadService.prototype.uploadImage = function (postData, files) {
        var formData = new FormData();
        formData.append('fileUpload', files[0], files[0].name);
        if (!!postData) {
            for (var property in postData) {
                if (postData.hasOwnProperty(property)) {
                    formData.append(property, postData[property]);
                }
            }
        }
        return this.http.post(constants_1.CONFIG.URL_UPLOAD, formData, {
            headers: this.headers
        }).toPromise();
    };
    UploadService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UploadService);
    return UploadService;
}());
exports.UploadService = UploadService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy91cGxvYWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5QyxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBRWpCLFFBQU8sNkJBQTZCLENBQUMsQ0FBQTtBQUVyQywwQkFBdUIsY0FBYyxDQUFDLENBQUE7QUFHdEM7SUFNRSx1QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFKdEIsWUFBTyxHQUFHLElBQUksY0FBTyxDQUFDO1lBQzVCLFNBQVMsRUFBRSxxQkFBcUI7U0FDakMsQ0FBQyxDQUFDO0lBRStCLENBQUM7SUFFbkMsbUNBQVcsR0FBWCxVQUFZLFFBQWEsRUFBRSxLQUFhO1FBQ3RDLElBQUksUUFBUSxHQUFhLElBQUksUUFBUSxFQUFFLENBQUM7UUFDeEMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV2RCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNmLEdBQUcsQ0FBQyxDQUFDLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN0QyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFNLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRTtZQUNqRCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDdEIsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUF2Qkg7UUFBQyxpQkFBVSxFQUFFOztxQkFBQTtJQXdCYixvQkFBQztBQUFELENBdkJBLEFBdUJDLElBQUE7QUF2QlkscUJBQWEsZ0JBdUJ6QixDQUFBIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy91cGxvYWQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XG5cbmltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVcGxvYWRTZXJ2aWNlIHtcblxuICBwcml2YXRlIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XG4gICAgJ2VuY3R5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cblxuICB1cGxvYWRJbWFnZShwb3N0RGF0YTogYW55LCBmaWxlczogRmlsZVtdKTogUHJvbWlzZTxhbnk+IHtcbiAgICBsZXQgZm9ybURhdGE6IEZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlVXBsb2FkJywgZmlsZXNbMF0sIGZpbGVzWzBdLm5hbWUpO1xuXG4gICAgaWYgKCEhcG9zdERhdGEpIHtcbiAgICAgIGZvciAobGV0IHByb3BlcnR5IGluIHBvc3REYXRhKSB7XG4gICAgICAgIGlmIChwb3N0RGF0YS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQocHJvcGVydHksIHBvc3REYXRhW3Byb3BlcnR5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KENPTkZJRy5VUkxfVVBMT0FELCBmb3JtRGF0YSwge1xuICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzXG4gICAgfSkudG9Qcm9taXNlKCk7XG4gIH1cbn1cbiJdfQ==

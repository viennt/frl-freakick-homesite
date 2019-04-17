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
var message_service_1 = require('./message.service');
var Message_1 = require('../models/Message');
var SecretWordService = (function () {
    function SecretWordService(messageService) {
        this.messageService = messageService;
    }
    SecretWordService.prototype.checkSecretWord = function (secretWord, page) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (secretWord === '654a887db446ba5954538f893a0eb00e'
                || secretWord === '131007f87e81a8ac373e08a5a31bc5ab'
                || secretWord === '621033a4e376aab019dd02c5810181da') {
                resolve('OK');
            }
            else {
                _this.messageService.messages.subscribe(function (response) {
                    if (response.messageType === 'CHECK_VALID_SECRET_WORD_SUCCESS') {
                        resolve(response);
                    }
                    else if (response.data.errorType === 'INVALID_SECRET_WORD') {
                        reject(response);
                    }
                });
                _this.messageService.sendMessage(new Message_1.Message('CHECK_VALID_SECRET_WORD', {
                    'secretKey': secretWord,
                    'visitedPage': page
                }));
            }
        });
    };
    SecretWordService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], SecretWordService);
    return SecretWordService;
}());
exports.SecretWordService = SecretWordService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9zZWNyZXRXb3JkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxnQ0FBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQUNuRCx3QkFBd0IsbUJBQW1CLENBQUMsQ0FBQTtBQUc1QztJQUNFLDJCQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFBRyxDQUFDO0lBRXRELDJDQUFlLEdBQWYsVUFBZ0IsVUFBa0IsRUFBRSxJQUFZO1FBQWhELGlCQXdCQztRQXZCQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUdqQyxFQUFFLENBQUMsQ0FBQyxVQUFVLEtBQUssa0NBQWtDO21CQUMvQyxVQUFVLEtBQUssa0NBQWtDO21CQUNqRCxVQUFVLEtBQUssa0NBQWtDLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FDcEMsVUFBQyxRQUFhO29CQUNaLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEtBQUssaUNBQWlDLENBQUMsQ0FBQyxDQUFDO3dCQUMvRCxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3BCLENBQUM7b0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLHFCQUFxQixDQUFDLENBQUMsQ0FBQzt3QkFDN0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNuQixDQUFDO2dCQUNILENBQUMsQ0FDRixDQUFDO2dCQUNGLEtBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLElBQUksaUJBQU8sQ0FBQyx5QkFBeUIsRUFBRTtvQkFDckUsV0FBVyxFQUFFLFVBQVU7b0JBQ3ZCLGFBQWEsRUFBRSxJQUFJO2lCQUNwQixDQUFDLENBQUMsQ0FBQztZQUNOLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUE1Qkg7UUFBQyxpQkFBVSxFQUFFOzt5QkFBQTtJQTZCYix3QkFBQztBQUFELENBNUJBLEFBNEJDLElBQUE7QUE1QlkseUJBQWlCLG9CQTRCN0IsQ0FBQSIsImZpbGUiOiJhcHAvc2VydmljZXMvc2VjcmV0V29yZC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vbW9kZWxzL01lc3NhZ2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VjcmV0V29yZFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkge31cblxuICBjaGVja1NlY3JldFdvcmQoc2VjcmV0V29yZDogc3RyaW5nLCBwYWdlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgIC8vIEZpeE1lOiBSZW1vdmUgdGhpcyBjb25kaXRpb24gYWZ0ZXIgZml4ZWQgaXNzdWUgd2l0aCBXZWJzb2NrZXQgb24gaU9TIDExXG4gICAgICBpZiAoc2VjcmV0V29yZCA9PT0gJzY1NGE4ODdkYjQ0NmJhNTk1NDUzOGY4OTNhMGViMDBlJ1xuICAgICAgICAgfHwgc2VjcmV0V29yZCA9PT0gJzEzMTAwN2Y4N2U4MWE4YWMzNzNlMDhhNWEzMWJjNWFiJ1xuICAgICAgICAgfHwgc2VjcmV0V29yZCA9PT0gJzYyMTAzM2E0ZTM3NmFhYjAxOWRkMDJjNTgxMDE4MWRhJykge1xuICAgICAgICByZXNvbHZlKCdPSycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5tZXNzYWdlcy5zdWJzY3JpYmUoXG4gICAgICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5tZXNzYWdlVHlwZSA9PT0gJ0NIRUNLX1ZBTElEX1NFQ1JFVF9XT1JEX1NVQ0NFU1MnKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5kYXRhLmVycm9yVHlwZSA9PT0gJ0lOVkFMSURfU0VDUkVUX1dPUkQnKSB7XG4gICAgICAgICAgICAgIHJlamVjdChyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnNlbmRNZXNzYWdlKG5ldyBNZXNzYWdlKCdDSEVDS19WQUxJRF9TRUNSRVRfV09SRCcsIHtcbiAgICAgICAgICAnc2VjcmV0S2V5Jzogc2VjcmV0V29yZCxcbiAgICAgICAgICAndmlzaXRlZFBhZ2UnOiBwYWdlXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19

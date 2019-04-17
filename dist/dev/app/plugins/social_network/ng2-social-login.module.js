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
var auth_service_1 = require('./auth.service');
var constants_1 = require('../../constants');
var Ng2SocialLoginModule = (function () {
    function Ng2SocialLoginModule() {
    }
    Ng2SocialLoginModule.initWithProviders = function (config) {
        var loadProvidersScripts = {
            google: function (info) {
                if (info['clientId'] !== '' && constants_1.CONFIG.ENV.toLowerCase() === 'prod') {
                    var d = document, gJs = void 0;
                    gJs = d.createElement('script');
                    gJs.async = true;
                    gJs.src = '//apis.google.com/js/platform.js';
                    var ref = d.getElementsByTagName('script')[0];
                    gJs.onload = function () {
                        gapi.load('auth2', function () {
                            gapi.auth2.init({
                                client_id: info['clientId'],
                                scope: 'email'
                            });
                        });
                    };
                    ref.parentNode.insertBefore(gJs, ref);
                }
            },
            linkedin: function (info) {
                if (info['clientId'] !== '' && constants_1.CONFIG.ENV.toLowerCase() === 'prod') {
                    var lIN = void 0, d = document, ref = d.getElementsByTagName('script')[0];
                    lIN = d.createElement('script');
                    lIN.async = false;
                    lIN.src = '//platform.linkedin.com/in.js?async=false';
                    lIN.text = ('api_key: ' + info['clientId']).replace('\'', '');
                    ref.parentNode.insertBefore(lIN, ref);
                }
            },
            facebook: function (info) {
                if (info['clientId'] !== '' && info['apiVersion'] !== '' && constants_1.CONFIG.ENV.toLowerCase() === 'prod') {
                    var d = document, fbJs = void 0, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
                    fbJs = d.createElement('script');
                    fbJs.id = id;
                    fbJs.async = true;
                    fbJs.src = '//connect.facebook.net/en_US/sdk.js';
                    fbJs.onload = function () {
                        FB.init({
                            appId: info['clientId'],
                            status: true,
                            cookie: true,
                            xfbml: true,
                            version: info['apiVersion']
                        });
                    };
                    ref.parentNode.insertBefore(fbJs, ref);
                }
            }
        };
        Object.keys(config).forEach(function (provider) {
            loadProvidersScripts[provider](config[provider]);
        });
        return {
            ngModule: Ng2SocialLoginModule,
            providers: [auth_service_1.AuthService]
        };
    };
    Ng2SocialLoginModule = __decorate([
        core_1.NgModule(), 
        __metadata('design:paramtypes', [])
    ], Ng2SocialLoginModule);
    return Ng2SocialLoginModule;
}());
exports.Ng2SocialLoginModule = Ng2SocialLoginModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wbHVnaW5zL3NvY2lhbF9uZXR3b3JrL25nMi1zb2NpYWwtbG9naW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBOEMsZUFBZSxDQUFDLENBQUE7QUFDOUQsNkJBQXdDLGdCQUFnQixDQUFDLENBQUE7QUFFekQsMEJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFTekM7SUFBQTtJQStEQSxDQUFDO0lBOURVLHNDQUFpQixHQUF4QixVQUF5QixNQUFrQjtRQUN2QyxJQUFJLG9CQUFvQixHQUFRO1lBQzVCLE1BQU0sRUFBRSxVQUFDLElBQVM7Z0JBQ2QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxrQkFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNqRSxJQUFJLENBQUMsR0FBRyxRQUFRLEVBQUUsR0FBRyxTQUFLLENBQUM7b0JBQzNCLEdBQUcsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNoQyxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztvQkFDakIsR0FBRyxDQUFDLEdBQUcsR0FBRyxrQ0FBa0MsQ0FBQztvQkFDN0MsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM5QyxHQUFHLENBQUMsTUFBTSxHQUFHO3dCQUNULElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFOzRCQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dDQUNaLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDO2dDQUMzQixLQUFLLEVBQUUsT0FBTzs2QkFDakIsQ0FBQyxDQUFDO3dCQUNQLENBQUMsQ0FBQyxDQUFDO29CQUNQLENBQUMsQ0FBQztvQkFDRixHQUFHLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQzFDLENBQUM7WUFDTCxDQUFDO1lBQ0QsUUFBUSxFQUFFLFVBQUMsSUFBUztnQkFDaEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxrQkFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNqRSxJQUFJLEdBQUcsU0FBSyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdEUsR0FBRyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2hDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUNsQixHQUFHLENBQUMsR0FBRyxHQUFHLDJDQUEyQyxDQUFDO29CQUN0RCxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQzlELEdBQUcsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDMUMsQ0FBQztZQUNMLENBQUM7WUFDRCxRQUFRLEVBQUUsVUFBQyxJQUFTO2dCQUNoQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLElBQUksa0JBQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDOUYsSUFBSSxDQUFDLEdBQUcsUUFBUSxFQUFFLElBQUksU0FBSyxFQUFFLEVBQUUsR0FBRyxnQkFBZ0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM5RixJQUFJLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDakMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7b0JBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxHQUFHLEdBQUcscUNBQXFDLENBQUM7b0JBRWpELElBQUksQ0FBQyxNQUFNLEdBQUc7d0JBQ1YsRUFBRSxDQUFDLElBQUksQ0FBQzs0QkFDSixLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQzs0QkFDdkIsTUFBTSxFQUFFLElBQUk7NEJBQ1osTUFBTSxFQUFFLElBQUk7NEJBQ1osS0FBSyxFQUFFLElBQUk7NEJBQ1gsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUM7eUJBQzlCLENBQUMsQ0FBQztvQkFDUCxDQUFDLENBQUM7b0JBRUYsR0FBRyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO1lBQ0wsQ0FBQztTQUNKLENBQUM7UUFFRixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVE7WUFDakMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUM7WUFDSCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7U0FDM0IsQ0FBQztJQUNOLENBQUM7SUEvREw7UUFBQyxlQUFRLEVBQUU7OzRCQUFBO0lBZ0VYLDJCQUFDO0FBQUQsQ0EvREEsQUErREMsSUFBQTtBQS9EWSw0QkFBb0IsdUJBK0RoQyxDQUFBIiwiZmlsZSI6ImFwcC9wbHVnaW5zL3NvY2lhbF9uZXR3b3JrL25nMi1zb2NpYWwtbG9naW4ubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlLCBJUHJvdmlkZXJzIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5kZWNsYXJlIGxldCBnYXBpOiBhbnk7XG5kZWNsYXJlIGxldCBJTjogYW55O1xuZGVjbGFyZSBsZXQgRkI6IGFueTtcblxuLy9JbXBvcnQgTmcyU29jaWFsTG9naW5Nb2R1bGUuaW5pdFdpdGhQcm92aWRlcnMoY29uc3RhbnRzLlNPQ0lBTF9ORVRXT1JLKVxuXG5ATmdNb2R1bGUoKVxuZXhwb3J0IGNsYXNzIE5nMlNvY2lhbExvZ2luTW9kdWxlIHtcbiAgICBzdGF0aWMgaW5pdFdpdGhQcm92aWRlcnMoY29uZmlnOiBJUHJvdmlkZXJzKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgICAgIGxldCBsb2FkUHJvdmlkZXJzU2NyaXB0czogYW55ID0ge1xuICAgICAgICAgICAgZ29vZ2xlOiAoaW5mbzogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGluZm9bJ2NsaWVudElkJ10gIT09ICcnICYmIENPTkZJRy5FTlYudG9Mb3dlckNhc2UoKSA9PT0gJ3Byb2QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkID0gZG9jdW1lbnQsIGdKczogYW55O1xuICAgICAgICAgICAgICAgICAgICBnSnMgPSBkLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAgICAgICAgICAgICBnSnMuYXN5bmMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBnSnMuc3JjID0gJy8vYXBpcy5nb29nbGUuY29tL2pzL3BsYXRmb3JtLmpzJztcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlZiA9IGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xuICAgICAgICAgICAgICAgICAgICBnSnMub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2FwaS5sb2FkKCdhdXRoMicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXBpLmF1dGgyLmluaXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRfaWQ6IGluZm9bJ2NsaWVudElkJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlOiAnZW1haWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcmVmLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGdKcywgcmVmKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGlua2VkaW46IChpbmZvOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaW5mb1snY2xpZW50SWQnXSAhPT0gJycgJiYgQ09ORklHLkVOVi50b0xvd2VyQ2FzZSgpID09PSAncHJvZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxJTjogYW55LCBkID0gZG9jdW1lbnQsIHJlZiA9IGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xuICAgICAgICAgICAgICAgICAgICBsSU4gPSBkLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAgICAgICAgICAgICBsSU4uYXN5bmMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgbElOLnNyYyA9ICcvL3BsYXRmb3JtLmxpbmtlZGluLmNvbS9pbi5qcz9hc3luYz1mYWxzZSc7XG4gICAgICAgICAgICAgICAgICAgIGxJTi50ZXh0ID0gKCdhcGlfa2V5OiAnICsgaW5mb1snY2xpZW50SWQnXSkucmVwbGFjZSgnXFwnJywgJycpO1xuICAgICAgICAgICAgICAgICAgICByZWYucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobElOLCByZWYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWNlYm9vazogKGluZm86IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpbmZvWydjbGllbnRJZCddICE9PSAnJyAmJiBpbmZvWydhcGlWZXJzaW9uJ10gIT09ICcnICYmIENPTkZJRy5FTlYudG9Mb3dlckNhc2UoKSA9PT0gJ3Byb2QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkID0gZG9jdW1lbnQsIGZiSnM6IGFueSwgaWQgPSAnZmFjZWJvb2stanNzZGsnLCByZWYgPSBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgICAgICAgICAgICAgICAgICAgZmJKcyA9IGQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGZiSnMuaWQgPSBpZDtcbiAgICAgICAgICAgICAgICAgICAgZmJKcy5hc3luYyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGZiSnMuc3JjID0gJy8vY29ubmVjdC5mYWNlYm9vay5uZXQvZW5fVVMvc2RrLmpzJztcblxuICAgICAgICAgICAgICAgICAgICBmYkpzLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEZCLmluaXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiBpbmZvWydjbGllbnRJZCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29raWU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeGZibWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbjogaW5mb1snYXBpVmVyc2lvbiddXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICByZWYucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZmJKcywgcmVmKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgT2JqZWN0LmtleXMoY29uZmlnKS5mb3JFYWNoKChwcm92aWRlcikgPT4ge1xuICAgICAgICAgICAgbG9hZFByb3ZpZGVyc1NjcmlwdHNbcHJvdmlkZXJdKGNvbmZpZ1twcm92aWRlcl0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IE5nMlNvY2lhbExvZ2luTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2VdXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19

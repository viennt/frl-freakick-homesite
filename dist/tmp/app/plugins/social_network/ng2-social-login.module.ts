import { NgModule, ModuleWithProviders } from '@angular/core';
import { AuthService, IProviders } from './auth.service';

import { CONFIG } from '../../constants';

declare let gapi: any;
declare let IN: any;
declare let FB: any;

//Import Ng2SocialLoginModule.initWithProviders(constants.SOCIAL_NETWORK)

@NgModule()
export class Ng2SocialLoginModule {
    static initWithProviders(config: IProviders): ModuleWithProviders {
        let loadProvidersScripts: any = {
            google: (info: any) => {
                if (info['clientId'] !== '' && CONFIG.ENV.toLowerCase() === 'prod') {
                    let d = document, gJs: any;
                    gJs = d.createElement('script');
                    gJs.async = true;
                    gJs.src = '//apis.google.com/js/platform.js';
                    let ref = d.getElementsByTagName('script')[0];
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
            linkedin: (info: any) => {
                if (info['clientId'] !== '' && CONFIG.ENV.toLowerCase() === 'prod') {
                    let lIN: any, d = document, ref = d.getElementsByTagName('script')[0];
                    lIN = d.createElement('script');
                    lIN.async = false;
                    lIN.src = '//platform.linkedin.com/in.js?async=false';
                    lIN.text = ('api_key: ' + info['clientId']).replace('\'', '');
                    ref.parentNode.insertBefore(lIN, ref);
                }
            },
            facebook: (info: any) => {
                if (info['clientId'] !== '' && info['apiVersion'] !== '' && CONFIG.ENV.toLowerCase() === 'prod') {
                    let d = document, fbJs: any, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
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

        Object.keys(config).forEach((provider) => {
            loadProvidersScripts[provider](config[provider]);
        });

        return {
            ngModule: Ng2SocialLoginModule,
            providers: [AuthService]
        };
    }
}

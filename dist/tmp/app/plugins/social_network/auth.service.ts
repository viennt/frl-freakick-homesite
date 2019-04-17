import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CookieService } from 'angular2-cookie/core';

declare let gapi: any;
declare let IN: any;
declare let FB: any;

export interface IProvider {
  clientId: string;
  apiVersion?: string;
}

export interface IProviders {
  [provider: string]: IProvider;
}

@Injectable()
export class AuthService {
  gauth: any;

  constructor(private cookieService: CookieService) {
  }

  login(provider: string): Observable<Object> {
    return Observable.create(
      (observer: any) => {
        switch (provider) {
          case 'google':
            if (typeof (this.gauth) === 'undefined') {
              this.gauth = gapi.auth2.getAuthInstance();
            }
            this.gauth.signIn().then(() => {
              let profile = this.gauth.currentUser.get().getBasicProfile();
              let idToken = this.gauth.currentUser.get().getAuthResponse().id_token;
              let userDetails = {
                token: idToken,
                uid: profile.getId(),
                name: profile.getName(),
                email: profile.getEmail(),
                image: profile.getImageUrl(),
                provider: 'google'
              };
              this.cookieService.put('_login_provider', 'google');
              observer.next(userDetails);
              observer.complete();
            });
            break;
          case 'facebook':
            FB.login((res: any) => {
              if (res.status === 'connected') {
                let accessToken = res.authResponse.accessToken;
                let fields = `id, name, email, first_name, last_name, age_range, link, gender, 
                                locale, picture, timezone, updated_time, verified`;
                FB.api(`/me?fields=${fields}`, (res: any) => {
                  if (!res || res.error) {
                    observer.error(res.error);
                  } else {
                    let userDetails = {
                      name: res.name,
                      email: res.email,
                      uid: res.id,
                      provider: 'facebook',
                      imageUrl: res.picture.data.url,
                      token: accessToken
                    };
                    this.cookieService.put('_login_provider', 'facebook');
                    observer.next(userDetails);
                    observer.complete();
                  }
                });
              }
            }, {scope: ['public_profile', 'email']});
            break;
          case 'linkedin':
            IN.User.authorize(() => {
              IN.API.Raw('/people/~:(id,first-name,last-name,email-address,picture-url)').result((res: any) => {
                let userDetails = {
                  name: res.firstName + ' ' + res.lastName,
                  email: res.emailAddress,
                  uid: res.id, provider: 'linkedIN',
                  imageUrl: res.pictureUrl
                };
                this.cookieService.put('_login_provider', 'linkedin');
                observer.next(userDetails);
                observer.complete();
              });
            });
            break;
        }
      }
    );
  }

  logout(): Observable<boolean> {
    let provider = this.cookieService.get('_login_provider');
    return Observable.create((observer: any) => {
      switch (provider) {
        case 'google':
          let gElement = document.getElementById('gSignout');
          if (typeof (gElement) !== 'undefined' && gElement !== null) {
            gElement.remove();
          }
          let d = document, gSignout: any,
            ref = d.getElementsByTagName('script')[0];
          gSignout = d.createElement('script');
          gSignout.src = 'https://accounts.google.com/Logout';
          gSignout.type = 'text/javascript';
          gSignout.id = 'gSignout';
          this.cookieService.remove('_login_provider');
          observer.next(true);
          observer.complete();
          ref.parentNode.insertBefore(gSignout, ref);
          break;
        case 'facebook':
          FB.logout(() => {
            this.cookieService.remove('_login_provider');
            observer.next(true);
            observer.complete();
          });
          break;
        case 'linkedin':
          IN.User.logout(() => {
            this.cookieService.remove('_login_provider');
            observer.next(true);
            observer.complete();
          }, {});
          break;
      }
    });
  }
}

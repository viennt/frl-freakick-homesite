import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

import { NotificationsService } from './plugins/notifi/index';

import { CookieService } from 'angular2-cookie/core';
import { Md5 } from 'ts-md5/dist/md5';

import { CONFIG } from './constants';
import './operators';

// Declare ga function as ambient
declare var ga: any;

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit {
  public isAgreedCookiePolicy: boolean;

  public options: any = {
    timeOut: 2000,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true,
    maxLength: 0,
    maxStacks: 7,
    preventDuplicates: 0,
    preventLastDuplicates: 'visible',
    rtl: false,
    animate: 'scale',
    position: ['bottom', 'right']
  };

  constructor(private router: Router,
              private _notificationsService: NotificationsService,
              private cookieService: CookieService) {
    // console.log('Environment config', Config);
  }

  ngOnInit() {
    this.router.events.distinctUntilChanged((previous: any, current: any) => {
      if (current instanceof NavigationEnd) {
        return previous.url === current.url;
      }
      return true;
    }).subscribe((x: any) => {
      ga('set', 'page', x.url);
      let secretCode = this.cookieService.get('sc');
      let user = this.getUserBySecretCode(secretCode);
      ga('set', 'dimension1', user);
      ga('set', 'metric1', user);
      ga('send', 'pageview');
    });

    this.router.events.subscribe((evt) => {
      if (CONFIG.ENV.toLowerCase() !== 'prod' && evt instanceof NavigationStart) {
        console.log(
          '\n\n\n\n\n%c[PAGE] ' + evt.url,
          'background: #8775A7; color: white; font-size: 10px; padding: 2px; border-radius: 3px;'
        );
      }
      if (!(evt instanceof NavigationEnd)) return;
      window.scrollTo(0, 0);
    });

    this.isAgreedCookiePolicy = localStorage.getItem('FREAKICKCOOKIE')
      && localStorage.getItem('FREAKICKCOOKIE') === 'Agree';
  }

  getUserBySecretCode(secretCode: string): string {
    if (!secretCode) return 'Anonymous';
    let hashedSecretCode = String(Md5.hashStr(secretCode));
    if (hashedSecretCode === 'd14dfc71841fe74bf16a58b6ef33a339') {
      return 'Neil Jacobs';
    }
    if (hashedSecretCode === 'f6d94c23a520dd929f43a2d7ff231bc1') {
      return 'Dennis Coleman';
    }
    if (hashedSecretCode === '73e275849b7d2c334f4fa002119ebb5d') {
      return 'Leon Graves';
    }
    if (hashedSecretCode === '0b422944e9e10a753b208f4a98ac1b07') {
      return 'Mark Papas';
    }
    if (hashedSecretCode === '21e5bbf8748a4874a51f589f25b29126') {
      return 'Grannatt';
    }
    if (hashedSecretCode === '3edbcfdb6ccafda48b802a566e465da2') {
      return 'Lamar';
    }
    if (hashedSecretCode === '467bebb868325b40f72195d0997841cc') {
      return 'Richard Kenah';
    }
    if (hashedSecretCode === 'b54b6f30209fa12744e9915bd8349a74') {
      return 'Tony Blaize';
    }
    if (hashedSecretCode === '2cc476dcca87e4fb2b7c22688a8ea1bd') {
      return 'Lamar Kendricks';
    }
    if (hashedSecretCode === '654a887db446ba5954538f893a0eb00e') {
      return 'Freakickers';
    }
    if (hashedSecretCode === 'a3410817019348047145f6fa57121101') {
      return 'Freakickers';
    }
    return 'Anonymous';
  }

  onClickAgreeCookiePolicy() {
    localStorage.setItem('FREAKICKCOOKIE', 'Agree');
    this.isAgreedCookiePolicy = localStorage.getItem('FREAKICKCOOKIE')
      && localStorage.getItem('FREAKICKCOOKIE') === 'Agree';
  }
}

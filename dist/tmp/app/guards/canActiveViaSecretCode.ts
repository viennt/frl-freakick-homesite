import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { CookieService } from 'angular2-cookie/core';
import { Md5 } from 'ts-md5/dist/md5';
import { SecretWordService } from '../services/secretWord.service';

@Injectable()
export class CanActivateViaSecretCode implements CanActivate {

  constructor(private router: Router,
              private cookieService: CookieService,
              private secretWordService: SecretWordService) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> | boolean {
    if (window.matchMedia('(display-mode: standalone)').matches) {
      return true;
    }
    let secretWord = this.cookieService.get('sc');
    if (secretWord) {
      return this.secretWordService.checkSecretWord(
        String(Md5.hashStr(secretWord)), (<any>route.component).name)
        .then((data: any) => {
          return true;
        }).catch((error: any) => {
          this.router.navigate(['/landing']);
          return false;
        });
    } else {
      this.router.navigate(['/landing']);
      return false;
    }
  }
}

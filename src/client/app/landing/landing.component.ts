import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * services
 */
import { CookieService } from 'angular2-cookie/core';
import { SecretWordService } from '../services/secretWord.service';

import { Md5 } from 'ts-md5/dist/md5';

/**
 * This class represents the lazy loaded LandingComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'frk-landing',
  templateUrl: 'landing.component.html',
  styleUrls: ['landing.component.css']
})
export class LandingComponent implements OnInit {
  public isLoading: boolean;

  public secretCodeMsg: string;
  public secretCode: string;
  public initialCode: string = 'What\'s the secret word?';

  constructor(private router: Router,
              private cookieService: CookieService,
              private secretWordService: SecretWordService) {
  }

  ngOnInit() {
    let secretCode = this.cookieService.get('sc');
    if (secretCode) {
      this.secretWordService.checkSecretWord(String(Md5.hashStr(secretCode)), 'LandingComponent')
        .then((data: any) => {
          this.router.navigate(['/home'])
            .catch(() => {
              //
            });
        }).catch((error: any) => {
        this.router.navigate(['/landing'])
          .catch(() => {
            //
          });
      });
    }
    this.secretCodeMsg = '';
  }

  submitCode() {
    if (this.secretCode) {
      this.isLoading = true;
      let hashedCode: string = String(Md5.hashStr(this.secretCode));
      let doubleHashedCode: string = String(Md5.hashStr(hashedCode));
      this.secretWordService.checkSecretWord(doubleHashedCode, 'SubmitSecretCode').then((data: any) => {
        let expires: any = new Date(new Date().getTime() + 16 * 60 * 60 * 1000);
        this.cookieService.put('sc', hashedCode, {
          domain: 'freakick.com',
          expires: expires
        });
        this.cookieService.put('sc', hashedCode, {
          domain: 'localhost',
          expires: expires
        });
        this.cookieService.put('sc', hashedCode, {
          domain: '113.160.225.76',
          expires: expires
        });
        this.cookieService.put('sc', hashedCode, {
          domain: '192.168.21.226',
          expires: expires
        });
        this.isLoading = false;
        this.router.navigate(['/home']);
      }).catch((error: any) => {
        this.isLoading = false;
        this.secretCodeMsg = error.data.message;
      });
    } else {
      this.secretCodeMsg = 'please enter secret word!';
    }
  }

}

import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Router } from '@angular/router';

import { CookieService } from 'angular2-cookie/core';

@Injectable()
export class AuthenticationService {
    private loggedIn = false;

    constructor(
        private router: Router,
        private cookieService:CookieService
    ) {
        this.loggedIn = !!this.cookieService.get('userId');
    }

    login(user: any, link = '/download') {
        let userInfo = user.userInfo;
        this.cookieService.put('userId', userInfo.userId);
        this.cookieService.put('captainOfTeam', user.captainOfTeam);
        this.cookieService.put('email', userInfo.email);
        this.cookieService.put('userImage', userInfo.userImage);
        this.cookieService.put('userName', userInfo.userName);
        this.cookieService.put('fullName', userInfo.fullName);
        this.cookieService.put('level', userInfo.level);
        this.cookieService.put('levelLabel', userInfo.levelLabel);
        this.cookieService.put('currentExperience', userInfo.currentExperience);
        this.cookieService.put('maxExperience', userInfo.maxExperience);
        this.cookieService.put('playedGame', userInfo.playedGame);
        this.cookieService.put('isFinishDemographicQuestion', userInfo.isFinishDemographicQuestion);
        this.cookieService.put('isAllowReceiveInvitation', userInfo.isAllowReceiveInvitation);
        this.loggedIn = true;
        setTimeout(() => this.router.navigateByUrl(link), 400);
        try {
            this.cookieService.put('accessToken', user.accessToken.accessToken);
        } catch (error) {
            this.cookieService.put('accessToken', '');
        }
    }

    logout() {
        this.cookieService.remove('userId');
        this.cookieService.remove('captainOfTeam');
        this.cookieService.remove('email');
        this.cookieService.remove('userImage');
        this.cookieService.remove('userName');
        this.cookieService.remove('fullName');
        this.cookieService.remove('level');
        this.cookieService.remove('levelLabel');
        this.cookieService.remove('currentExperience');
        this.cookieService.remove('maxExperience');
        this.cookieService.remove('playedGame');
        this.cookieService.remove('isFinishDemographicQuestion');
        this.cookieService.remove('isAllowReceiveInvitation');
        this.cookieService.remove('accessToken');
        this.cookieService.remove('_login_provider');
        this.loggedIn = false;
    }

    updateUserInfo(user: any) {
        this.cookieService.put('userId', user.userId);
        this.cookieService.put('email', user.email);
        this.cookieService.put('userImage', user.userImage);
        this.cookieService.put('userName', user.userName);
        this.cookieService.put('fullName', user.fullName);
        this.cookieService.put('level', user.level);
        this.cookieService.put('levelLabel', user.levelLabel);
        this.cookieService.put('currentExperience', user.currentExperience);
        this.cookieService.put('maxExperience', user.maxExperience);
        this.cookieService.put('playedGame', user.playedGame);
        this.cookieService.put('isFinishDemographicQuestion', user.isFinishDemographicQuestion);
        this.cookieService.put('isAllowReceiveInvitation', user.isAllowReceiveInvitation);
    }

    getAuthenticatedUser() {
        if (this.loggedIn) {
            let user = new User();
            user.userId = Number(this.cookieService.get('userId'));
            user.captainOfTeam = Number(this.cookieService.get('captainOfTeam'));
            user.email = this.cookieService.get('email');
            user.userImage = this.cookieService.get('userImage');
            user.userName = this.cookieService.get('userName');
            user.level = Number(this.cookieService.get('level'));
            user.levelLabel = this.cookieService.get('levelLabel');
            user.currentExperience = Number(this.cookieService.get('currentExperience'));
            user.maxExperience = Number(this.cookieService.get('maxExperience'));
            user.playedGame = Number(this.cookieService.get('playedGame'));
            user.isFinishDemographicQuestion = this.cookieService.get('isFinishDemographicQuestion') === 'true';
            user.isFinishDemographicQuestion = this.cookieService.get('isAllowReceiveInvitation') === 'true';
            return user;
        }
        return null;
    }

    isLoggedIn() {
        try {
            return !!this.cookieService.get('accessToken');
        } catch (e) {
            return false;
        }
    }

    getItem(key: string, type = 'STRING') {
        try {
            if (type === 'JSON') {
                return JSON.parse(this.cookieService.get(key));
            }
            return this.cookieService.get(key);
        } catch (error) {
            return null;
        }
    }

    checkAuth(url = 'login') {
        if (this.isLoggedIn() === true) {
            // this.router.navigateByUrl('');
            return;
        } else {
            if (url !== null) {
                this.router.navigateByUrl(url);
            }
            return;
        }
    }

}

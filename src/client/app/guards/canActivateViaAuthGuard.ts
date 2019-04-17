import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

    constructor(private authService: AuthenticationService, private router: Router) {}

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.authService.isLoggedIn()) {
            this.router.navigate(['/login/continue/', state.url]);
            return false;
        } else {
            return true;
        }
    }
}

import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class IsNotLoggedIn implements CanActivate {

  constructor(private router: Router,
              private authService: AuthenticationService) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/home']);
      return false;
    } else {
      return true;
    }
  }
}

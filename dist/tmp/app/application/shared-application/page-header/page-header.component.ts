import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  moduleId: module.id,
  selector: 'app-page-header',
  templateUrl: 'page-header.component.html',
  styleUrls: ['page-header.component.css']
})
export class PageHeaderComponent implements OnInit, OnDestroy {
  public isLoggedIn: boolean;
  public userName: string;
  public userFullName: string;
  public userImage: string;

  public currentRoute: string;

  public expandSearchBox: boolean;

  private routerSub: any;

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit(): any {
    let user = this.authService.getAuthenticatedUser();
    this.isLoggedIn = this.authService.isLoggedIn();
    this.userName = this.authService.getItem('userName') || '@freakick.user';
    this.userFullName = this.authService.getItem('fullName') || 'Freakick User';
    this.userImage = user.userImage;

    this.routerSub = this.router.events.subscribe(
      params => this.handleRouterEvent()
    );
  }

  ngOnDestroy() {
    this.routerSub.unsubscribe();
  }

  handleRouterEvent(): any {
    this.currentRoute = window.location.pathname;
  }

  login(): any {
    this.router.navigate(['/login/continue/', window.location.pathname + window.location.search]);
  }

  logout(): any {
    this.authService.logout();
    location.reload();
  }
}

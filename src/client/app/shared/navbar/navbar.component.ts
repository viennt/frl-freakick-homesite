import { Component, HostListener, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';

import { CONFIG } from '../../constants';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})
export class NavbarComponent implements OnInit, AfterViewInit {

  public isInvert: boolean;
  public isLoggedIn: boolean;
  public userName: string;

  public externalUrl = CONFIG;

  constructor(
      private router: Router,
      private authService: AuthenticationService
  ) {}

  ngOnInit(): any {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.userName = this.authService.getItem('userName');
    this.isInvert = false;
  }

  ngAfterViewInit() {
    this.setupBootstrapScroll();
  }

  @HostListener('window:scroll', ['$event']) changeInvert(event: any) {
    let scrollToTop = document.documentElement.scrollTop || document.body.scrollTop;
    let screenHeight = window.innerHeight;
    this.isInvert = scrollToTop > 1.5 * screenHeight;
  }

  setupBootstrapScroll(): void {
    jQuery('#mainNav').affix({
      offset: {
        top: 50
      }
    });
  }

  login(): any {
    this.router.navigate(['/login/continue/', window.location.pathname + window.location.search]);
  }

  logout(): any {
    this.authService.logout();
    location.reload();
  }
}

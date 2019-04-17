import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  HostListener,
  ViewChild
} from '@angular/core';

const YT_VIDEO_CONFIG = {
  videoURL: 'ZSir-cK46rA',
  showControls: false,
  stopMovieOnBlur: false,
  containment: 'self',
  autoplay: true,
  mute: true,
  opacity: 1,
  loop: true
};

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('firstSection') firstSection: any;

  public firstSectionOpacity: number;
  public nonFixedBackground: boolean;

  private videoTimeout: any;

  constructor() {
    //
  }

  ngOnInit(): any {
    this.firstSectionOpacity = 1;
    this.nonFixedBackground = false;
  }

  ngAfterViewInit() {
    this.videoTimeout = setTimeout(() => {
      if (jQuery('#video').length) jQuery('#video').YTPlayer(YT_VIDEO_CONFIG);
    }, 2000);
  }

  ngOnDestroy() {
    if (this.videoTimeout) clearTimeout(this.videoTimeout);
  }

  @HostListener('window:scroll', ['$event']) calcFirstSectionOpacity(event: any) {
    let elHeight = this.firstSection.nativeElement.offsetHeight;
    let scrollToTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollToTop < elHeight) this.firstSectionOpacity = 1 - (scrollToTop / (elHeight / 4));
    else this.firstSectionOpacity = 0;
    this.nonFixedBackground = scrollToTop + window.innerHeight >= elHeight;
  }

  scrollTo(section: string) {
      jQuery('html, body').stop().animate({
            scrollTop: (document.getElementById(section).offsetTop)
      }, 1250, 'easeInOutExpo');
  }

}

import { Component, AfterViewInit, OnDestroy } from '@angular/core';

const YT_VIDEO_CONFIG = {
  videoURL: 'oUM3aUvTAgw',
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
  selector: 'abt-first-section',
  templateUrl: 'first-section.component.html',
  styleUrls: ['first-section.component.css']
})
export class FirstSectionComponent implements AfterViewInit, OnDestroy {

  private videoTimeout: any;

  constructor() {
    //
  }

  ngAfterViewInit() {
    this.videoTimeout = setTimeout(() => {
      if (jQuery('#video').length) jQuery('#video').YTPlayer(YT_VIDEO_CONFIG);
    }, 0);
  }

  ngOnDestroy() {
    if (this.videoTimeout) clearTimeout(this.videoTimeout);
  }
}

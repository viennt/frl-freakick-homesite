import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

const TypeWriter: string[] = [
  'Everything starts here',
  'What are you doing today?'
];
const Space: string = '                    ';
const TypeWriterArray: string[] = TypeWriter.map(typeWriterText =>
  typeWriterText + Space
);

const YT_VIDEO_CONFIG = {
  videoURL: 'e48zVXSMumw',
  useOnMobile: true,
  coverImage: 'https://www.freakick.com/assets/images/landing-page/background.jpg',
  showControls: false,
  stopMovieOnBlur: false,
  containment: 'self',
  autoplay: true,
  mute: true,
  opacity: 1,
  loop: false
};

@Component({
  moduleId: module.id,
  selector: 'frk-join-freakick',
  templateUrl: 'join-freakick.component.html',
  styleUrls: ['join-freakick.component.css']
})
export class JoinFreakickComponent implements OnInit, OnDestroy {
  public typeWriterDisplay$: any;
  private videoTimeout: any;

  ngOnInit() {
    let twDisplays$: any[] = TypeWriterArray.map(typeWriterText =>
      Observable
        .interval(50)
        .timeInterval()
        .take(typeWriterText.length + 1)
        .map((val, index) => typeWriterText.substr(0, index))
    );

    this.videoTimeout = setTimeout(() => {
      let videoEl = jQuery('#video');
      if (videoEl.length) {
        videoEl.YTPlayer(YT_VIDEO_CONFIG);
        videoEl.on('YTPEnd',(e: any) => {
          if (e.time === 7) {
            this.typeWriterDisplay$ = Observable.concat(...twDisplays$);
            window.scrollTo({top: 1}); // Fix angular's render issue
          }
        });
      }
    }, 0);
  }

  ngOnDestroy() {
    if (this.videoTimeout) clearTimeout(this.videoTimeout);
  }

}

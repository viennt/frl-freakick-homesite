import {
  Component, HostListener, Input, OnInit, AfterViewInit,
  ViewChild
} from '@angular/core';
import { Event } from '../../../../../models/Event';

@Component({
  moduleId: module.id,
  selector: 'app-template-short-event-detail',
  templateUrl: 'short-event-detail.component.html',
  styleUrls: ['short-event-detail.component.css']
})
export class ShortEventDetailComponent implements OnInit, AfterViewInit {
  @Input() event: Event;
  @ViewChild('postThumb') postThumb: any;
  @ViewChild('postInner') postInner: any;

  public displayEventImageIndex: number;
  public displayEventImage: string;

  ngOnInit() {
    if (this.event.images && this.event.images.length) {
      this.displayEventImageIndex = 0;
      this.displayEventImage = this.event.images[this.displayEventImageIndex];
    }
  }

  ngAfterViewInit() {
    this.onResize(null);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth >= 768) {
      let parentOffsetHeight = this.postInner.nativeElement.parentElement.offsetHeight + 'px';
      this.postThumb.nativeElement.style.height = parentOffsetHeight;
      this.postInner.nativeElement.style.height = parentOffsetHeight;
    } else {
      this.postThumb.nativeElement.style.height = 'auto';
      this.postInner.nativeElement.style.height = 'auto';
    }
  }

}

import {
  Component,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
  HostListener,
  QueryList,
  ElementRef,
  ContentChildren,
  ViewChild
} from '@angular/core';
import { ScrollCarouselItemComponent } from './item/carousel-item.component';

@Component({
  moduleId: module.id,
  selector: 'hp-scroll-carousel',
  templateUrl: 'scroll-carousel.component.html',
  styleUrls: ['scroll-carousel.component.css'],
})
export class ScrollCarouselComponent implements OnInit, AfterViewInit, AfterViewChecked {
  public slideTransform: string;
  public isScrollOnSlide: boolean;
  public isScrollAfterSlide: boolean;
  public isShowLeftArrow: boolean;
  public isShowRightArrow: boolean;

  public elementScrollTop: number; // The number of pixels component's content is scrolled vertically.
  public elementHeight: number;

  @ContentChildren(ScrollCarouselItemComponent) items: QueryList<ScrollCarouselItemComponent>;
  @ViewChild('slideContainer') container: any;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.slideTransform = 'translate3d(0, 0 , 0)';
    this.isScrollOnSlide = false;
    this.isScrollAfterSlide = false;
    this.isShowLeftArrow = false;
    this.isShowRightArrow = false;
  }

  ngAfterViewInit() {
    this.items.forEach((item: any) => item.updateStyle(this.items.length));
    this.el.nativeElement.setAttribute('style', 'height: calc(100vh * ' + this.items.length + ')');
    this.container.nativeElement.setAttribute('style', 'width: calc(100% * ' + this.items.length + ')');
  }

  ngAfterViewChecked() {
    this.elementScrollTop = this.el.nativeElement.offsetTop;
    this.elementHeight = this.el.nativeElement.offsetHeight;
  }

  @HostListener('window:scroll', ['$event'])
  scrollSlideEvent(event: any) {
    if (this.isScreenBeforeSlide()) {
      this.showFirstSlide();
    } else if (this.isScreenAfterSlide()) {
      this.showLastSlide();
    } else {
      let transformPercent = this.getScrollPercentOfElement();
      this.setNavigateArrow(transformPercent);
      this.showSpecificSlideByTransformPercent(transformPercent);
    }
  }

  showFirstSlide(): void {
    this.isScrollOnSlide = false;
    this.isScrollAfterSlide = false;
    this.isShowLeftArrow = true;
    this.isShowRightArrow = false;
    this.slideTransform = 'translate3d(0, 0, 0)';
  }

  showLastSlide(): void {
    this.isScrollOnSlide = false;
    this.isScrollAfterSlide = true;
    this.isShowLeftArrow = false;
    this.isShowRightArrow = true;
    this.slideTransform = 'translate3d(' + -(100 * (this.items.length - 1) / this.items.length) + '%, 0, 0)';
  }

  showSpecificSlideByTransformPercent(transformPercent: number): void {
    this.isScrollOnSlide = true;
    this.isScrollAfterSlide = false;
    this.slideTransform = 'translate3d(' + transformPercent + '%, 0, 0)';
  }

  scrollWindow(offset: number): void {
    jQuery('html, body').stop().animate({
      scrollTop: (offset)
    }, 1250, 'easeInOutExpo');
  }

  nextSlide() {
    let currentTransformPercent = this.getScrollPercentOfElement();
    let nextTransformPercent = this.getNextTransformPercent(currentTransformPercent);
    let nextScrollOffset = this.getScrollOffsetFromPercent(nextTransformPercent);
    this.scrollWindow(nextScrollOffset);
  }

  prevSlide() {
    let currentTransformPercent = this.getScrollPercentOfElement();
    let prevTransformPercent = this.getPrevTransformPercent(currentTransformPercent);
    let prevScrollOffset = this.getScrollOffsetFromPercent(prevTransformPercent);
    this.scrollWindow(prevScrollOffset);
  }

  setNavigateArrow(transformPercent: number): void {
    if (transformPercent >= -5) {
      this.isShowLeftArrow = true;
      this.isShowRightArrow = false;
    } else if (transformPercent <= -95 + (100 / this.items.length)) {
      this.isShowLeftArrow = false;
      this.isShowRightArrow = true;
    } else {
      this.isShowLeftArrow = true;
      this.isShowRightArrow = true;
    }
  }

  getNextTransformPercent(currentPercent: number): number {
    let nextPercent: number = currentPercent;
    for (let i = 1; i <= this.items.length - 1; i++) {
      if (Math.round(currentPercent) > Math.round(-100 / this.items.length * i)) {
        nextPercent = -100 / this.items.length * i;
        break;
      } else if (Math.round(currentPercent) === Math.round(-100 / this.items.length * i)) {
        nextPercent = -100 / this.items.length * (i + 1);
        break;
      }
    }
    return nextPercent;
  }

  getPrevTransformPercent(currentPercent: number): number {
    let prevPercent: number = currentPercent;
    for (let i = this.items.length - 1; i >= 1; i--) {
      if (Math.round(currentPercent) < Math.round(-100 / this.items.length * i)) {
        prevPercent = -100 / this.items.length * i;
        break;
      } else if (Math.round(currentPercent) === Math.round(-100 / this.items.length * i)) {
        prevPercent = -100 / this.items.length * (i - 1);
        break;
      }
    }
    return prevPercent;
  }

  getScrollPercentOfElement(): number {
    return (this.elementScrollTop - this.getDocumentScrollOffset()) / this.elementHeight * 100;
    ;
  }

  getScrollOffsetFromPercent(percent: number): number {
    return this.elementScrollTop - (percent / 100 * this.elementHeight);
  }

  getDocumentScrollOffset(): number {
    return document.documentElement.scrollTop || document.body.scrollTop;
  }

  isScreenBeforeSlide(): boolean {
    return this.getDocumentScrollOffset() < this.elementScrollTop;
  }

  isScreenAfterSlide(): boolean {
    return this.getDocumentScrollOffset() > (this.elementScrollTop + this.elementHeight - window.innerHeight);
  }
}

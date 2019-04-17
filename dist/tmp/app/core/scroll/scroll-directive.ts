import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

const HIDDEN_CLASSES = ' hide ';
const ANIMATED_CLASSES = ' animated ';
const DEFAULT_ANIMATED_CLASS = ' fadeIn ';

@Directive({
  selector: '[frk-scroll]'
})
export class ScrollDirective {
  @Input('animation') animatedClass: string;

  @Output() scrollAbove: EventEmitter<number> = new EventEmitter();
  @Output() scrollBelow: EventEmitter<number> = new EventEmitter();
  @Output() scrollOn: EventEmitter<any> = new EventEmitter();

  public initialClasses: string;

  constructor(private el: ElementRef) {
    this.animatedClass = this.animatedClass || DEFAULT_ANIMATED_CLASS;
    this.initialClasses = this.el.nativeElement.className;
    this.el.nativeElement.style.visibility = 'hidden';
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (this.isScreenAboveElement()) {
      this.scrollAbove.emit(this.getPixelToElement());
    } else if (this.isScreenBelowElement()) {
      this.scrollBelow.emit(this.getPixelPastElement());
    } else {
      this.el.nativeElement.style.visibility = 'visible';
      this.el.nativeElement.className = this.initialClasses + ANIMATED_CLASSES + this.animatedClass;
      this.scrollOn.emit();
    }
  }

  private getDocumentScrollOffset(): number {
    return (document.documentElement.scrollTop || document.body.scrollTop) + (window.innerHeight / 2);
  }

  private getPixelToElement() {
    let pixelToEl = this.el.nativeElement.offsetTop - this.getDocumentScrollOffset();
    return (pixelToEl >= 0) ? pixelToEl : 0;
  }

  private getPixelPastElement() {
    let pixelPastEl = this.getDocumentScrollOffset() - (this.el.nativeElement.offsetTop + this.el.nativeElement.offsetHeight);
    return (pixelPastEl <= 0) ? pixelPastEl : 0;
  }

  private isScreenAboveElement(): boolean {
    return this.getDocumentScrollOffset() < this.el.nativeElement.offsetTop;
  }

  private isScreenBelowElement(): boolean {
    return this.getDocumentScrollOffset() < (this.el.nativeElement.offsetTop + this.el.nativeElement.offsetHeight);
  }
}

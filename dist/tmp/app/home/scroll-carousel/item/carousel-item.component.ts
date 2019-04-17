import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hp-scroll-carousel-item',
  templateUrl: 'carousel-item.component.html',
  styleUrls: ['carousel-item.component.css']
})
export class ScrollCarouselItemComponent implements OnInit {

  @Input('placeOfContent') placeOfContent: string;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    if (!this.isPlaceOfContentValid()) this.placeOfContent = 'left';
  }

  isPlaceOfContentValid(): boolean {
    if (!this.placeOfContent) return false;
    else if (this.placeOfContent.toLowerCase() === 'left') return true;
    else if (this.placeOfContent.toLowerCase() === 'right') return true;
    return false;
  }

  updateStyle(numberOfItems: number) {
    this.el.nativeElement.setAttribute('style', 'width: calc(100% / ' + numberOfItems + ')');
  }
}

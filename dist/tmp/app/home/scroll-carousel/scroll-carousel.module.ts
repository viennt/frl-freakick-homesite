import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollCarouselComponent } from './scroll-carousel.component';
import { ScrollCarouselItemComponent } from './item/carousel-item.component';

@NgModule({
    imports: [CommonModule],
    exports: [ScrollCarouselComponent, ScrollCarouselItemComponent],
    declarations: [ScrollCarouselComponent, ScrollCarouselItemComponent],
})
export class ScrollCarouselModule { }

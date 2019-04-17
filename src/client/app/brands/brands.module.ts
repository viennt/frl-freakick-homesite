import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ScrollModule } from '../core/scroll/index';
import { BrandsComponent } from './brands.component';
import { SecondSectionComponent } from './second-section/second-section.component';
import { ThirdSectionComponent } from './third-section/third-section.component';

@NgModule({
    imports: [SharedModule, ScrollModule],
    exports: [BrandsComponent],
    declarations: [BrandsComponent, SecondSectionComponent, ThirdSectionComponent],
    providers: [],
})
export class BrandsModule { }

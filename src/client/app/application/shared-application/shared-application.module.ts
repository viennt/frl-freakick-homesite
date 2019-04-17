import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TemplatesModule } from './templates/templates.module';

import { PageHeaderComponent } from './page-header/page-header.component';
import { PageHeadingComponent } from './page-heading/page-heading.component';
import { SecondMenuBarComponent } from './second-menu-bar/second-menu-bar.component';

import { OneColumnLayoutComponent } from './layouts/one-column/one-column.component';
import { ThreeColumnsLayoutComponent } from './layouts/three-columns/three-columns.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [
    TemplatesModule,
    OneColumnLayoutComponent, ThreeColumnsLayoutComponent
  ],
  declarations: [
    PageHeaderComponent, PageHeadingComponent, SecondMenuBarComponent,
    OneColumnLayoutComponent, ThreeColumnsLayoutComponent
  ],
  providers: [],
})
export class SharedApplicationModule {
}

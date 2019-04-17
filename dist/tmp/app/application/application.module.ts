import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DemoGraphicModule } from './demo-graphic/demo-graphic.module';
import { TimeLinePageModule } from './time-line-page/time-line-page.module';

import { ApplicationComponent } from './application.component';

@NgModule({
  imports: [RouterModule, DemoGraphicModule, TimeLinePageModule],
  exports: [ApplicationComponent],
  declarations: [ApplicationComponent],
  providers: [],
})
export class ApplicationModule {
}

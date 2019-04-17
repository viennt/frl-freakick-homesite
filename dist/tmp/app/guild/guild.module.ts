import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ScrollModule } from '../core/scroll/index';
import { GuildComponent } from './guild.component';
import { SecondSectionComponent } from './second-section/second-section.component';

@NgModule({
    imports: [SharedModule, ScrollModule],
    exports: [GuildComponent],
    declarations: [GuildComponent, SecondSectionComponent],
    providers: [],
})
export class GuildModule { }

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SelectModule } from 'ng2-select/index';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NewFooterComponent } from './new-footer/new-footer.component';
import { SearchComponent } from './search-bar/search-bar.component';
import { ContactFormModule } from '../core/contact-form/contact-form.module';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule, SelectModule, ContactFormModule],
  declarations: [NavbarComponent, FooterComponent, NewFooterComponent, SearchComponent],
  exports: [NavbarComponent, FooterComponent, NewFooterComponent, SearchComponent,
    CommonModule, FormsModule, RouterModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}

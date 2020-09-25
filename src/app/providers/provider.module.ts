import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslatePipe } from './common/translation.pipe';
import { FilterPipe } from './common/filter.pipe';

// Providers: Directives
import { ModalComponent } from '../providers/directives/modal/dialog.directive';


@NgModule({
  declarations: [
    TranslatePipe,
    FilterPipe,
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TranslatePipe,FilterPipe,ModalComponent
  ]
})
export class ProviderModule { }

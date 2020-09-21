import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslatePipe } from '../providers/common/translation.pipe';
import { FilterPipe } from '../providers/common/filter.pipe';

// Providers: Directives
import { ModalComponent } from '../providers/directives/dialog.directive';


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

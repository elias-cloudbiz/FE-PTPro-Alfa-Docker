import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { salesCartComponent } from './salescart/salescart.component';
import { SessionComponent } from './sessionmanager/session.component';
import { SessionService } from '../../providers/services/session.service';

import { AuthGuardService as AuthGuard, AuthGuardRouteService } from '../../providers/guards/auth-guard.service';
@NgModule({
  declarations: [
    SessionComponent,
    salesCartComponent
  ],
  imports: [
    CommonModule,

    // Locale routing paths
    RouterModule.forChild([
      { path: 'helsetjenester', component: salesCartComponent, canActivate: [AuthGuard] },
    ])

  ],
  exports: [
    SessionComponent,
    salesCartComponent
  ],
  providers: [SessionService]
})
export class ApplicationModule { }

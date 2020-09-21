import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ConfirmationpaymentComponent } from './payment/confirmationpayment.component';
import { AuthGuardService as AuthGuard, AuthGuardRouteService } from '../../providers/guards/auth-guard.service';

@NgModule({
  declarations: [
    ConfirmationpaymentComponent
  ],
  imports: [
    CommonModule,

    // Locale routing paths
    RouterModule.forChild([
      /*
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      */
     { path: 'mypayvalidation/:token', component: ConfirmationpaymentComponent, canActivate: [AuthGuardRouteService] }
    ])
  ],
  exports: [
    ConfirmationpaymentComponent
  ]
})
export class PaymentModule { }

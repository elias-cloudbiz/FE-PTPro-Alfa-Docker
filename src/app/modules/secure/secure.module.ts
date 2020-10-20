import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySellerPageComponent } from './my-sellerpage/my-sellerpage.component'
import { OrdersComponent } from './my-sellerpage/orders/orders.component'
import { SettingsComponent } from './my-sellerpage/settings/settings.component'
import { MaterialModule } from '../../material.module';
import { RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard, AuthGuardRouteService } from '../../providers/auth-gaurds/auth-route.service';
import { AppRoutingModule } from '../../root-routing.module';
import { ProviderModule } from '../../providers/provider.module'
import { ClientprofileComponent } from '../profiles/clientprofile/clientprofile.component'


@NgModule({
  declarations: [
    MySellerPageComponent,
    OrdersComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    ProviderModule,

    // Locale routing paths
    RouterModule.forChild([
      { path: 'my', component: MySellerPageComponent, canActivate: [AuthGuard] },
      { path: 'my/profile', component: ClientprofileComponent, canActivate: [AuthGuard] },
      { path: 'my/settings', component: SettingsComponent, canActivate: [AuthGuard] },
      { path: 'my/orders', component: OrdersComponent, canActivate: [AuthGuard] },
    ])
  ]
})
export class SecureModule { }

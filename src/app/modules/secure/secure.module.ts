import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDetailsComponent } from './my-details/my-details.component'
import { OrdersComponent } from './my-details/orders/orders.component'
import { SettingsComponent } from './my-details/settings/settings.component'
import { MaterialModule } from '../../material.module';
import { RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard, AuthGuardRouteService } from '../../providers/guards/auth-guard.service';
import { AppRoutingModule } from '../../app-routing.module';
import { ProviderModule } from '../../providers/provider.module'
import { ClientprofileComponent } from '../profiles/clientprofile/clientprofile.component'


@NgModule({
  declarations: [
    MyDetailsComponent,
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
      { path: 'my', component: MyDetailsComponent, canActivate: [AuthGuard] },
      { path: 'my/profile', component: ClientprofileComponent, canActivate: [AuthGuard] },
      { path: 'my/settings', component: SettingsComponent, canActivate: [AuthGuard] },
      { path: 'my/orders', component: OrdersComponent, canActivate: [AuthGuard] },
    ])
  ]
})
export class SecureModule { }

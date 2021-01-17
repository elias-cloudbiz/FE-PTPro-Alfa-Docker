// @ts-ignore
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
// @ts-ignore
import { RouterModule, Routes } from '@angular/router';
// @ts-ignore
import { CommonModule } from '@angular/common';
// @ts-ignore
import { FormsModule } from '@angular/forms';
// @ts-ignore
import { MaterialModule } from '../../material.module';
// @ts-ignore
import { AppRoutingModule } from '../../root-routing.module';
// @ts-ignore
import { ProviderModule } from '../../providers/provider.module'
import { HomepageComponent } from './homepage/homepage.component';
import { PTLookupComponent } from './searchpage/pt-lookup.component';
import { PtActivityComponent } from './activitypage/pt-activity.component';
import { SignupComponent } from './signuppage/signup.component';

import { UserServiceConfig } from './user.service';


@NgModule({
  declarations: [
    HomepageComponent,
    PTLookupComponent,
    PtActivityComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ProviderModule,

    // Locale routing paths
    RouterModule.forChild([
      { path: 'lookup', component: PTLookupComponent },
      { path: 'activity', component: PtActivityComponent },
      { path: 'meld-inn', component: SignupComponent },
    ])
  ],
  exports: [ProviderModule]
})
// @ts-ignore
export class PublicModule { 

    constructor(@Optional() @SkipSelf() parentModule?: PublicModule) {
      if (parentModule) {
        throw new Error(
          'PublicModule is already loaded. Import it in the AppModule only');
      }
    }

    static forRoot(config: UserServiceConfig): ModuleWithProviders<PublicModule> {
      return {
        ngModule: PublicModule,
        providers: [
          {provide: UserServiceConfig, useValue: config }
        ]
      };
    }
}

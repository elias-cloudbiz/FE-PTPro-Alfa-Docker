// @ts-ignore
import { NgModule } from '@angular/core';
// @ts-ignore
import { RouterModule, Routes } from '@angular/router';
// @ts-ignore
import { CommonModule } from '@angular/common';
// @ts-ignore
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// @ts-ignore
import { MaterialModule } from '../../material.module';
// @ts-ignore
import { AppRoutingModule } from '../../root-routing.module';
// @ts-ignore
import { ProviderModule } from '../../providers/provider.module';

import { ProfileService } from './sellerprofile/profile.service';
import { ProfileDetailComponent } from './sellerprofile/sellerprofile.component';
import { ContactsComponent } from './sellerprofile/fields/contacts/contacts.component';
import { MediaComponent } from './sellerprofile/fields/media/media.component';
import { PlansComponent } from './sellerprofile/fields/plans/plans.component';
import { ReviewsComponent } from './sellerprofile/fields/reviews/reviews.component';
import { MainComponent } from './sellerprofile/fields/main/main.component';
import { SchedulerComponent } from './sellerprofile/fields/scheduler/scheduler.component';
import { ClientprofileComponent } from './clientprofile/clientprofile.component';

// crud components
import { ProfessionalAddComponent } from './sellerprofile/fields/main/crud/add/professionalAddComponent/professional.component'
import { ProfessionalEditComponent } from './sellerprofile/fields/main/crud/edit/professionalEditComponent/professional.component';
import { QualificationAddComponent } from "./sellerprofile/fields/main/crud/add/qualificationAddComponent/qualification.component";
import { QualificationEditComponent } from './sellerprofile/fields/main/crud/edit/qualificationEditComponent/qualification.component';
import { TraininglAddComponent } from './sellerprofile/fields/main/crud/add/trainingAddComponent/training.component';
import { TrainingEditComponent } from './sellerprofile/fields/main/crud/edit/trainingEditComponent/training.component';
import { AchievementsAddComponent } from './sellerprofile/fields/main/crud/add/achievementsAddComponent/achievements.component';
import { AchievementsEditComponent } from './sellerprofile/fields/main/crud/edit/achievementsEditComponent/achievements.component';
import { PlanAddComponent } from './sellerprofile/fields/plans/crud/add/planAddComponent/planAdd.component';
import { PlanEditComponent } from './sellerprofile/fields/plans/crud/edit/planEditComponent/planEdit.component';
import { PlanDetailComponent } from './sellerprofile/fields/plans/planDetailComponent/planDetail.component';
@NgModule({
  declarations: [
    ProfileDetailComponent,
    SchedulerComponent,
    ContactsComponent,
    MediaComponent,
    PlansComponent,
    ReviewsComponent,
    MainComponent,
    ClientprofileComponent,
    ProfessionalAddComponent,
    ProfessionalEditComponent,
    QualificationAddComponent,
    QualificationEditComponent,
    TraininglAddComponent,
    TrainingEditComponent,
    AchievementsAddComponent,
    AchievementsEditComponent,
    PlanAddComponent,
    PlanEditComponent,
    PlanDetailComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ProviderModule,

    // Locale routing paths
    RouterModule.forChild([
      { path: 'pt/:name', component: ProfileDetailComponent },
    ])
  ],
  exports: [
    ProfileDetailComponent, ProviderModule
  ],
  providers: [
    ProfileService,

  ],
  entryComponents: [ProfessionalAddComponent, ProfessionalEditComponent,
    QualificationAddComponent, QualificationEditComponent,
    TraininglAddComponent, TrainingEditComponent,
    AchievementsAddComponent, AchievementsEditComponent,
    PlanAddComponent, PlanEditComponent,
    PlanDetailComponent
  ]
})

export class profilesModule { }

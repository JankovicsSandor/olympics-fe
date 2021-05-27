import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AthleteEditRoutingModule } from './athlete-profile-routing.module';
import { AthleteProfileComponent } from './athlete-profile.component';
import { MatButtonModule } from '@angular/material/button';
import { AthleteProfileEditService } from './services/athlete-profile-edit.service';
import { AthleteProfileEditComponent } from './athlete-profile-edit/athlete-profile-edit.component';
import { AthleteProfileDataComponent } from './athlete-profile-edit/athlete-profile-data/athlete-profile-data.component';


@NgModule({
  declarations: [AthleteProfileComponent, AthleteProfileEditComponent, AthleteProfileDataComponent],
  imports: [
    CommonModule,
    AthleteEditRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [AthleteProfileEditService]
})
export class AthleteProfileModule { }

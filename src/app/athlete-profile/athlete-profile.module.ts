import { AgePipe } from './../pipes/age.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonComponentModule } from './../common/common-component.module';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AthleteEditRoutingModule } from './athlete-profile-routing.module';
import { AthleteProfileComponent } from './athlete-profile.component';
import { MatButtonModule } from '@angular/material/button';
import { AthleteProfileEditService } from './services/athlete-profile-edit.service';
import { AthleteProfileEditComponent } from './athlete-profile-edit/athlete-profile-edit.component';
import { CommonPipesModule } from '../pipes/common-pipes.module';


@NgModule({
  declarations: [AthleteProfileComponent, AthleteProfileEditComponent],
  imports: [
    CommonModule,
    AthleteEditRoutingModule,
    MatButtonModule,
    MatCardModule,
    CommonComponentModule,
    FormsModule,
    ReactiveFormsModule,
    CommonPipesModule
  ],
  providers: [AthleteProfileEditService]
})
export class AthleteProfileModule { }

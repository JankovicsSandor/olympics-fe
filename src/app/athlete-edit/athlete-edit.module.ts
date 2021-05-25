import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AthleteEditRoutingModule } from './athlete-edit-routing.module';
import { AthleteEditComponent } from './athlete-edit.component';


@NgModule({
  declarations: [AthleteEditComponent],
  imports: [
    CommonModule,
    AthleteEditRoutingModule
  ]
})
export class AthleteEditModule { }

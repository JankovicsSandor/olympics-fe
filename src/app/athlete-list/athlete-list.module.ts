import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AthleteListRoutingModule } from './athlete-list-routing.module';
import { AthleteListComponent } from './athlete-list.component';
import { AthleteListFilterComponent } from './athlete-list-filter/athlete-list-filter.component';
import { AthleteListListComponent } from './athlete-list-list/athlete-list-list.component';


@NgModule({
  declarations: [AthleteListComponent, AthleteListFilterComponent, AthleteListListComponent],
  imports: [
    CommonModule,
    AthleteListRoutingModule,
  ]
})
export class AthleteListModule { }

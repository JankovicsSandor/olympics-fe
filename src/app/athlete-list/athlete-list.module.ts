import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AthleteListRoutingModule } from './athlete-list-routing.module';
import { AthleteListComponent } from './athlete-list.component';
import { AthleteListFilterComponent } from './athlete-list-filter/athlete-list-filter.component';
import { AthleteListListComponent } from './athlete-list-list/athlete-list-list.component';
import { AthleteListViewComponent } from './athlete-list-list/athlete-list-view/athlete-list-view.component';
import { TableModule } from 'primeng/table';
import { AgePipe } from '../pipes/age.pipe';
import { MatCardModule } from "@angular/material/card"
import { AthleteListFilterService } from './services/athlete-list-filter.service';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [AthleteListComponent, AthleteListFilterComponent, AthleteListListComponent, AthleteListViewComponent, AgePipe],
  imports: [
    CommonModule,
    TableModule,
    AthleteListRoutingModule,
    MatCardModule,
    ButtonModule
  ],
  providers: [AgePipe, AthleteListFilterService]
})
export class AthleteListModule { }

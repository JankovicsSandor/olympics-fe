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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AthleteListFilterViewComponent } from './athlete-list-filter/athlete-list-filter-view/athlete-list-filter-view.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AthleteListComponent, AthleteListFilterComponent, AthleteListListComponent, AthleteListViewComponent, AgePipe, AthleteListFilterViewComponent],
  imports: [
    CommonModule,
    TableModule,
    AthleteListRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatNativeDateModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,

  ],
  providers: [AgePipe, AthleteListFilterService]
})
export class AthleteListModule { }

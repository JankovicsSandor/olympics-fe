import { NgModule } from '@angular/core';
import { AthleteQuery } from './athlete/athlete.query';
import { AthleteService } from './athlete/athlete.service';
import { AthleteStore } from './athlete/athlete.store';


@NgModule({
  providers: [AthleteQuery, AthleteService, AthleteStore]
})
export class StoreModule { }

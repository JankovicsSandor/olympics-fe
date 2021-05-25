import { NgModule } from '@angular/core';
import { AthleteDataProviderService } from './athlete/athlete-data-provider.service';



@NgModule({
  providers: [AthleteDataProviderService],
  exports: []
})
export class DataProviderModule { }

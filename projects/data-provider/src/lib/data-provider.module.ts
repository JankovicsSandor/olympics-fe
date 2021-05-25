import { NgModule } from '@angular/core';
import { AthleteDataProviderService } from './athlete/athlete-data-provider.service';



@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [AthleteDataProviderService],
  exports: [AthleteDataProviderService]
})
export class DataProviderModule { }

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AthleteDataProviderService } from './athlete/athlete-data-provider.service';



@NgModule({
  providers: [AthleteDataProviderService],
  imports: [HttpClientModule],
  exports: []
})
export class DataProviderModule { }

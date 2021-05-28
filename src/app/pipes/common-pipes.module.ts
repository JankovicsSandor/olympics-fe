import { AgePipe } from './age.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [AgePipe],
  imports: [
    CommonModule
  ],
  exports: [AgePipe]
})
export class CommonPipesModule { }

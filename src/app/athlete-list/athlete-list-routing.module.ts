import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AthleteListComponent } from './athlete-list.component';

const routes: Routes = [{ path: '', component: AthleteListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AthleteListRoutingModule { }

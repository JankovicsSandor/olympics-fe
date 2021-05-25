import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AthleteEditComponent } from './athlete-edit.component';

const routes: Routes = [
  { path: ':id', component: AthleteEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AthleteEditRoutingModule { }

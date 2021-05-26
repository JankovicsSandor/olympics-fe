import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'athlete/list', pathMatch: "full" },
  { path: 'athlete/list', loadChildren: () => import('./athlete-list/athlete-list.module').then(m => m.AthleteListModule) },
  { path: 'athlete', loadChildren: () => import('./athlete-edit/athlete-edit.module').then(m => m.AthleteEditModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

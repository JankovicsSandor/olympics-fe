import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'athlete/list', pathMatch: "full" },
  { path: 'athlete/list', loadChildren: () => import('./athlete-list/athlete-list.module').then(m => m.AthleteListModule) },
  { path: 'athlete', loadChildren: () => import('./athlete-profile/athlete-profile.module').then(m => m.AthleteProfileModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

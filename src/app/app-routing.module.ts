import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'client', pathMatch: "full" },
  { path: 'server', loadChildren: () => import('./server-side/server-side.module').then(m => m.ServerSideModule) },
  { path: 'client', loadChildren: () => import('./client-side/client-side.module').then(m => m.ClientSideModule) },
  { path: 'athlete', loadChildren: () => import('./athlete-edit/athlete-edit.module').then(m => m.AthleteEditModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

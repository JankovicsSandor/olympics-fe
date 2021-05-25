import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServerSideRoutingModule } from './server-side-routing.module';
import { ServerSideComponent } from './server-side.component';


@NgModule({
  declarations: [ServerSideComponent],
  imports: [
    CommonModule,
    ServerSideRoutingModule
  ]
})
export class ServerSideModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientSideRoutingModule } from './client-side-routing.module';
import { ClientSideComponent } from './client-side.component';


@NgModule({
  declarations: [ClientSideComponent],
  imports: [
    CommonModule,
    ClientSideRoutingModule
  ]
})
export class ClientSideModule { }

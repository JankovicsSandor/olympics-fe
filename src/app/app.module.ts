import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataProviderModule } from '@data-provider';
import { AgePipe } from './pipes/age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataProviderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

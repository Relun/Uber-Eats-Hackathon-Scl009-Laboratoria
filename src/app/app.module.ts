import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageInitialComponent } from './components/page-initial/page-initial.component';

@NgModule({
  declarations: [
    AppComponent,
    PageInitialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

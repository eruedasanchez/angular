import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // importo la libreria para utilizar ngmodel

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // importo la libreria para utilizar ngmodel 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

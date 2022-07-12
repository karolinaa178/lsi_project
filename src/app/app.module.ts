import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import {ButtonModule} from 'primeng/button';

const PRIME_MODULES = [
  ButtonModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PRIME_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

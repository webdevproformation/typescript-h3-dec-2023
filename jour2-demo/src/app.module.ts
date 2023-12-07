// /src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app/app.component';
import { Premier } from './app/premier.component';

@NgModule({
  declarations: [
    AppComponent ,
      Premier
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

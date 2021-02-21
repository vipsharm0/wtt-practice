import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ReactivePractice } from './reactive-forms/reactive-controller';
import { ReactiveOtherPractice } from './reactive-forms/ractiveother-controller';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, ReactivePractice, ReactiveOtherPractice],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

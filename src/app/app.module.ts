import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RidgeTreeModule} from './ridge-tree/ridge-tree.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RidgeTreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

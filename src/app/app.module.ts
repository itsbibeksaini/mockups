import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MockupHomeComponent } from './mockups/mockup-home/mockup-home.component';
import { LoginComponent } from './mockups/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MockupHomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

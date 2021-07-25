import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './inicio/body/body.component';
import { FooterComponent } from './inicio/footer/footer.component';
import { NavbarComponent } from './inicio/navbar/navbar.component';
import { LoginComponent } from './inicio/login/login.component';
import { ReactiveFormsModule }from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

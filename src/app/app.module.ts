import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HeaderComponent } from './header/header.component';


// For MDB Angular Free
import { StickyHeaderModule, NavbarModule } from 'angular-bootstrap-md'
import {MDBBootstrapModule} from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    WelcomepageComponent,
    AboutmeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    StickyHeaderModule,
    NavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

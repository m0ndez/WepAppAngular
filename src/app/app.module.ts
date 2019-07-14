import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HeaderComponent } from './header/header.component';

// For MDB Angular Free
import {
  StickyHeaderModule,
  NavbarModule,
  ButtonsModule,
  ModalModule,
  TooltipModule,
  PopoverModule,
  WavesModule, TableModule, InputsModule, InputUtilitiesModule, CarouselModule
} from 'angular-bootstrap-md';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {UsersService} from './users/shared/users.service';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { HomeComponent } from './users/home/home.component';
import { DashComponent } from './dash/dash.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    WelcomepageComponent,
    AboutmeComponent,
    HeaderComponent,
    DashComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    StickyHeaderModule,
    NavbarModule,
    ButtonsModule,
    ModalModule,
    TooltipModule,
    PopoverModule,
    WavesModule,
    TableModule,
    InputsModule,
    ModalModule,
    CarouselModule,
    InputUtilitiesModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [
    HeaderComponent
  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { HomeComponent } from './home/home.component';
import {ButtonsModule, MDBBootstrapModule, NavbarModule} from 'angular-bootstrap-md';
import { HeaderuComponent } from './headeru/headeru.component';

@NgModule({
  declarations: [HomeComponent, HeaderuComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NavbarModule,
    MDBBootstrapModule.forRoot(),
    ButtonsModule
  ]
})
export class UsersModule { }

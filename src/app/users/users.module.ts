import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { HomeComponent } from './home/home.component';
import {ButtonsModule, InputsModule, MDBBootstrapModule, NavbarModule, TableModule, WavesModule} from 'angular-bootstrap-md';
import { HeaderuComponent } from './headeru/headeru.component';
import {FormsModule} from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

@NgModule({
  declarations: [HomeComponent, HeaderuComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NavbarModule,
    MDBBootstrapModule.forRoot(),
    ButtonsModule,
    TableModule,
    InputsModule,
    FormsModule,
    WavesModule,
    Ng2SearchPipeModule,
  ]
})
export class UsersModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { HomeComponent } from './home/home.component';
import {
  ButtonsModule,
  InputsModule,
  MDBBootstrapModule,
  NavbarModule,
  TableModule,
  WavesModule,
  ModalModule,
  TooltipModule, PopoverModule
} from 'angular-bootstrap-md';
import { HeaderuComponent } from './headeru/headeru.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { CreateComponent } from './create/create.component';
import { UsersService } from './shared/users.service';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [HomeComponent, HeaderuComponent, CreateComponent, ViewComponent],
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
    NgxPaginationModule,
    ModalModule,
    ButtonsModule,
    ReactiveFormsModule,
    TooltipModule,
    PopoverModule,

  ],
  entryComponents: [CreateComponent, ViewComponent],
  providers: [UsersService]
})
export class UsersModule { }

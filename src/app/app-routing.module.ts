import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {WelcomepageComponent} from './welcomepage/welcomepage.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: WelcomepageComponent},
  {path: 'user', loadChildren: './users/users.module#UsersModule'},
  {path: '**', component: PagenotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true, preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {WelcomepageComponent} from './welcomepage/welcomepage.component';
import {AboutmeComponent} from './aboutme/aboutme.component';
import {DashComponent} from './dash/dash.component';
import {ContactComponent} from './contact/contact.component';
import {LoginComponent} from './login/login.component';
import {CallbackComponent} from './callback/callback.component';
import {ProfileComponent} from './profile/profile.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: WelcomepageComponent},
  {path: 'dash', component: DashComponent},
   {path: 'about', component: AboutmeComponent},
  {path: 'signin', component: LoginComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'user', loadChildren: './users/users.module#UsersModule'},
  {path: 'callback', component: CallbackComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: '**', component: PagenotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true, preloadingStrategy: PreloadAllModules,
  scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

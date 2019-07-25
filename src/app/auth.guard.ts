import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('authguard work !');
    if (localStorage.getItem('token')) {
      return true;
    } else {
      this.router.navigate(['/signin'])
      alert('please Log in')
      return false;
    }
  }
  /*
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    const client = await this.auth.getAuth0Client()
    const isAuthenticated = await client.isAuthenticated()
    if (isAuthenticated){
    return true;
    }
    client.loginWithRedirect({
      appState: { target: state.url }
    })
    return false
  } */
}

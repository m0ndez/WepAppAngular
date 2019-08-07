import { Injectable } from '@angular/core';
import createAuth0Client from '@auth0/auth0-spa-js';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import {BehaviorSubject, Observable, pipe, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = new BehaviorSubject(false);
  profile = new BehaviorSubject<any>(null);
  private auth0Client: Auth0Client;
  loginUrl = 'https://dev-a54zskzi.auth0.com/oauth/token';
  profileUrl = 'https://dev-a54zskzi.auth0.com/oauth/userinfo';

  constructor(private http: HttpClient) {
  }

  _getReflesh = new Subject<void>()
  _GetUpdate = new Subject<string>()
  get getUpdate() {
    return this._GetUpdate;
  }
  get getReflesh() {
    return this._getReflesh;
  }

  login(loginForm: any): Observable<any> {
    const myheader = {'Content-Type': 'application/json'};
    const body = {
      'grant_type': 'password',
      'username': loginForm.email,
      'password': loginForm.password,
      'audience': 'https://dev-a54zskzi.auth0.com/api/v2/',
      'scope': 'openid',
      'client_id': 'iaTVzhQoG8Rr3elEoD3Zx0N52I3O0fbM'
    };
    return this.http.post<any>(this.loginUrl, body, {headers: myheader}).pipe(tap(() => {this._getReflesh.next()}));
  }

  getProfile(): Observable<any> {
    const token = JSON.parse(localStorage.getItem('token'))
    const myheader = {
      'Authorization': 'Bearer ' + token.access_token
    };
    return this.http.get<any>(this.profileUrl, {headers: myheader}).pipe(tap(() => {this._getReflesh.next()}));
  }

  isLogin(): boolean {
    const token = JSON.parse(localStorage.getItem('token'))
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  isLogout() {
    localStorage.removeItem('token')
    localStorage.removeItem('profile')
  }
}






  /*
  config = {
    domain: "dev-a54zskzi.auth0.com",
    client_id: "iaTVzhQoG8Rr3elEoD3Zx0N52I3O0fbM",
    redirect_uri: `${window.location.origin}/callback`
  }; */
  /**
   * Gets the Auth0Client instance.

  async getAuth0Client(): Promise<Auth0Client> {
    if (!this.auth0Client) {
      this.auth0Client = await createAuth0Client(this.config);

      // Provide the current value of isAuthenticated
      this.isAuthenticated.next(await this.auth0Client.isAuthenticated());

      // Whenever isAuthenticated ch  anges, provide the current value of `getUser`
      this.isAuthenticated.subscribe(async isAuthenticated => {
        if (isAuthenticated) {
          this.profile.next(await this.auth0Client.getUser());

          return;
        }

        this.profile.next(null);
      });
    }

    return this.auth0Client;
  }
}
   */

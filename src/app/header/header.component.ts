import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import {Router} from '@angular/router';
import {UsersService} from '../users/shared/users.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogin: boolean
  profile: any = JSON.parse(localStorage.getItem('profile'))
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.isLogin = this.auth.isLogin()
 }
 logOut() {
    this.auth.isLogout()
   this.router.navigate(['/home'])
 }
}

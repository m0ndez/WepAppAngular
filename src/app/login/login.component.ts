import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(3)]]
  })
  isLogin = false;
  profile: any;
  constructor(private fb: FormBuilder, private auth: AuthService) {
    if (this.auth.isLogin()) {
      this.isLogin = true;
      this.profile = JSON.parse(localStorage.getItem('profile'))
    }
  }
  ngOnInit() {
  }
login() {
    // console.log(this.loginForm.value)
  this.auth.login(this.loginForm.value).subscribe(
    (token) => {
      if (token) {
        this.isLogin = true;
        alert('Login Success');
        localStorage.setItem('token', JSON.stringify(token))
        this.auth.getProfile().subscribe(
          (profile) => {
            if (profile) {
              localStorage.setItem('profile', JSON.stringify(profile))
            }
          }
        )
      }
    }
  )
}
}

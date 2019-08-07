import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: any;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.profile.subscribe(profile => {this.profile = profile})
  }

}

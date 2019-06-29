import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  heading: string;
  content: any;

firstname = new FormControl('', Validators.required);
lastname = new FormControl('', Validators.required);
phonenumber = new FormControl('', Validators.required);
email = new FormControl('', Validators.email);
password = new FormControl('', Validators.required);

  constructor(public modalRef: MDBModalRef, private fb: FormBuilder) { }

  ngOnInit() {
  }

onNoClick() {
  this.modalRef.hide()
}

}

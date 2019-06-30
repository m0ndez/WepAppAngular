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

  createForm = this.fb.group({
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    phonenumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    email: ['', [Validators.required, Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')]],
    /* password: [null, [Validators.required]]*/
  });

  constructor(public modalRef: MDBModalRef, private fb: FormBuilder) {
  }
  ngOnInit() {
  }

  hasError(controlName: string, errorName: string){
  return this.createForm.controls[controlName].hasError(errorName)
  }

  onNoClick() {
    this.modalRef.hide()
  }

  isCreate() {
    // console.log(this.createForm.value)
    if(this.createForm.valid) {
    const body = {
      'firstname': this.createForm.value.firstname,
      'lastname': this.createForm.value.lastname,
      'phonenumber': this.createForm.value.phonenumber,
      'email': this.createForm.value.email
    }
      console.log(body)
    }
  }
}

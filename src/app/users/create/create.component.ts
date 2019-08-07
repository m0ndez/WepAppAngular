import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import {UsersService} from '../shared/users.service';
import Swal from 'sweetalert2';

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

  constructor(public modalRef: MDBModalRef, private fb: FormBuilder, private service: UsersService) {
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
    if (this.createForm.valid) {
      console.log(this.createForm.value)
      this.service.createUser(this.createForm.value).subscribe((res) => {
         console.log(res)
        // console.log(res['resultCode'])
         if (res['resultCode'] !== 200) {
           // alert(res['error']['message'])
           Swal.fire({
             type: 'error',
             title: 'Oops...',
             text: res['error']['message'],
             footer: 'ErrorCode :' + '' + res['resultCode']
           })
         } else {
           Swal.fire(
             'Success !',
             'You created user',
             'success'
           )
           this.modalRef.hide()
         }
      },(error) => {
        console.log(error)
      }, () => {
        console.log('Completed')
      })
    }
  }
}

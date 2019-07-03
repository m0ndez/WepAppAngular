import {Component, Directive, OnInit} from '@angular/core';
import {MDBModalRef} from 'angular-bootstrap-md';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})

export class ViewComponent implements OnInit {
  // viewForm: FormGroup
  isDisable = true;
  content: any;
  data: {
    firstname: any,
    lastname: any,
    phonenumber: number,
    email: any
  };

  viewForm = this.fb.group( {
    firstname: ['',[Validators.required]],
    lastname: ['',[Validators.required]],
    phonenumber: ['',[Validators.required]],
    email: ['', [Validators.required]]
  })
  constructor(public modalRef: MDBModalRef, private fb: FormBuilder) { }
  ngOnInit() {
    this.viewForm.disable()
  }

  hasError(controlName: string, errorName: string) {
    return this.viewForm.controls[controlName].hasError(errorName)
  }
  /*
  get optionEdit() {
    return this.viewForm.get('optionEdit') as FormControl
  }
   */
  editButton() {
    this.isDisable = !this.isDisable
  }

  toggleEdit(firstname, lastname, phonenumber, email) {
    this.isDisable = !this.isDisable
    // console.log(this.modalRef.content['content']['firstname'])
    // console.log(this.viewForm.value)
    if(this.isDisable === false) {
      this.viewForm.enable()
    }
    if(this.isDisable === true) {
      this.viewForm.disable()
      if (this.viewForm.value) {
        /*this.data = {
          firstname: firstname,
          lastname: lastname,
          phonenumber: phonenumber,
          email: email
        } */
        console.log(this.viewForm.value)
        // console.log(this.data)

      }
    }
  }

  isEdit() {
    console.log(this.viewForm.value)
  }
}

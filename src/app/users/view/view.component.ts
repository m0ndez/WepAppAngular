import {Component, Directive, OnInit} from '@angular/core';
import {MDBModalRef} from 'angular-bootstrap-md';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})

export class ViewComponent implements OnInit {
  // viewForm: FormGroup
  isDisable = true;
  content: any;


  constructor(public modalRef: MDBModalRef, private fb: FormBuilder) { }

  viewForm = this.fb.group( {
    firstname: [null,[Validators.required]],
    lastname: [null,[Validators.required]],
    phonenumber: [null,[Validators.required]],
    email: [null, [Validators.required]]
  })


  ngOnInit() {
    this.viewForm.disable()
  }
  /*
  get optionEdit() {
    return this.viewForm.get('optionEdit') as FormControl
  }
   */
  editButton() {
    this.isDisable = !this.isDisable
  }

  toggleEdit() {
    this.isDisable = !this.isDisable
    // console.log(this.modalRef.content['content']['firstname'])
    console.log(this.viewForm.value.firstname)
    if(this.isDisable === false) {
      this.viewForm.enable()
    }
    if(this.isDisable === true) {
      this.viewForm.disable()
      if (this.viewForm.value) {
        console.log(this.viewForm.value)

      }
    }
  }

  isEdit() {
    console.log(this.viewForm.value)
  }
}

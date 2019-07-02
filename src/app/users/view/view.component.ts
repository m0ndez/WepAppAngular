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

  viewForm = this.fb.group( {
    firstname: [Validators.required],
    lastname: [Validators.required],
    phonenumber: [Validators.required],
    email: [Validators.required]
  })
  isDisable = true;

  constructor(public modalRef: MDBModalRef, private fb: FormBuilder) { }

  ngOnInit() {/*
    this.viewForm = new FormGroup({
      optionEdit: new FormControl({disabled: true, value: ''},[Validators.required]),
      firstname: new FormControl({disabled: true, value: ''},[Validators.required]),
      lastname: new FormControl({disabled: true, value: ''},[Validators.required]),
      phonenumber: new FormControl({disabled: true, value: ''}, [Validators.required]),
      email: new FormControl({disabled: true, value: ''}, [Validators.required])
    });*/
  }
  /*
  get optionEdit() {
    return this.viewForm.get('optionEdit') as FormControl
  }
   */
  toggleEdit() {
    this.isDisable = !this.isDisable
  }

  isEdit() {
    console.log(this.viewForm.value)
  }
}

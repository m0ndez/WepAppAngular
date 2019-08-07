import {Component, Directive, OnInit} from '@angular/core';
import {MDBModalRef} from 'angular-bootstrap-md';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {UsersService} from '../shared/users.service';

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
  constructor(public modalRef: MDBModalRef, private fb: FormBuilder,
              private service: UsersService) { }
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
    this.toggleEdit()
  }

  toggleEdit() {
    // console.log(this.modalRef.content['content']['firstname'])
    // console.log(this.viewForm.value)
    if(this.isDisable === false) {
      this.viewForm.enable()
    }
    if(this.isDisable === true) {
      if (this.viewForm.valid) {
        /*this.data = {
          firstname: firstname,
          lastname: lastname,
          phonenumber: phonenumber,
          email: email
        } */
        console.log(this.viewForm.value, 'edit')
        this.service.putUpdateUser(this.content.id, this.viewForm.value).subscribe((res) => {
          console.log(res)
        },(error) => {
          console.log(error)
        }, () => {
          console.log('Complete')
          this.viewForm.reset()
        })
        // console.log(this.data)
      }
      this.viewForm.disable()
      this.modalRef.hide()
    }
  }

  isEdit() {
    console.log(this.viewForm.value)
  }
}

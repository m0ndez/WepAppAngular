import {MDBModalRef, MDBModalService, MdbTableDirective} from 'angular-bootstrap-md';
import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {UsersService} from '../shared/users.service';
import {Users} from '../shared/users.model';
import {interval, Observable, Subscription} from 'rxjs';
import Swal from 'sweetalert2';
import {CreateComponent} from '../create/create.component';
import {map} from 'rxjs/operators';
import {ViewComponent} from '../view/view.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {
@ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;
  p: number = 1;
elements: Users[];
previous: string;
search;
button = false;
chk = false;
headElements = ['No.', 'FirstName', 'LastName', 'PhoneNumber', 'E-mail'];
sub: Subscription
modalRef: MDBModalRef
//

  constructor(private service: UsersService, private modalService: MDBModalService) { }

  ngOnInit() {
    setTimeout(() => {
      this.loginChk()
    }, 2000);
    this.service.getReflesh.subscribe(() => {
      this.getAll()
      console.log('Data Updated')
    })
    this.getAll()
    this.mdbTable.setDataSource(this.elements);
    this.elements = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
  }

  openmodal() {
    this.modalRef = this.modalService.show(CreateComponent, { backdrop: true,
      keyboard: true,
      focus: true,
      show: false,
      ignoreBackdropClick: true,
      class: 'modal-center modal-top',
      containerClass: 'right',
      animated: true,
      data: { heading : 'Create user',
              content: { heading: 'Insert data', description: 'Content ... ' ,} }
    })
  }

  openViewmodal(_id, firstname, lastname, phonenumber, email) {
  this.modalRef = this.modalService.show(ViewComponent, { backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: true,
    class: 'modal-center modal-top',
    containerClass: 'right',
    animated: true,
    data: { heading : 'View',
      content: { heading: 'View and edit', description: 'Content ... ',
      id: _id,
      firstname: firstname,
      lastname: lastname,
      phonenumber: phonenumber,
      email: email} }
  })
    console.log(_id)
  }

  getAll() {
    this.sub = this.service.getAll().subscribe((res) => {
      this.elements = res['data']
      console.log(this.elements)
    }, (error) => {
      console.log(error)
    }, () => {
      console.log('Completely load data')
    })
  }

  openTools(event: any) {
  //  this.button = !this.button
    if(event) {
      this.button = !this.button
    }
    console.log(event)
  }

  pushDelete(id) {
  console.log(id)
    Swal.fire({
      title: 'Are you sure?',
      text: 'Your account permanent delete',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      console.log(result.value)
      if (result.value === true) {
        this.service.deleteUser(id).subscribe((res) => {
          console.log(res)
          if(res['resultCode'] !== 200) {
            Swal.fire({
              type: 'error',
              title: 'Oops...',
              text: res['error']['message'],
            });
          } else  {
            Swal.fire(
              'Deleted!',
              'User has been deleted.',
              'success'
            )
            // this.getAll()
          }
        },(error) => {
          console.log(error)
        }, () => {
          console.log('Service is no problem')
        })
      }
    })
  }

  pushView(id, firstname, lastname, phonenumber, email) {
  const body = {
  '_id' : id,
  'firstname' : firstname,
  'lastname' : lastname,
  'phonenumber' : phonenumber,
  'email' : email
  }
  console.log(body)
  }

  loginChk () {
    if(localStorage.getItem('token')) {
      this.chk = true
      console.log(this.chk)
    }
  }

  ngOnDestroy(): void {
  this.sub.unsubscribe()
  }
}

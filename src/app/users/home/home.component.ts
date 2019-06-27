import { MdbTableDirective} from 'angular-bootstrap-md';
import {Component, OnInit, ViewChild, ChangeDetectorRef, OnDestroy} from '@angular/core';
import {UsersService} from '../shared/users.service';
import {Users} from '../shared/users.model';
import {Subscription} from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
@ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;
  p: number = 1;
elements: Users[];
previous: string;
search;
button = false;
headElements = ['No.', 'FirstName', 'LastName', 'PhoneNumber', 'E-mail'];
sub: Subscription
  constructor(private service: UsersService) { }

  ngOnInit() {
    this.getAll()
    this.mdbTable.setDataSource(this.elements);
    this.elements = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
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

  openTools() {
  this.button = !this.button
  }

  pushDelete(id) {
  console.log(id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      console.log(result.value)
      if (result.value === true) {
        this.service.deleteUser(id +1).subscribe((res) => {
          console.log(res)
          if(res !== 200) {
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
            this.getAll()
          }
        },(error) => {
          console.log(error)
        }, () => {
          console.log('Service is no problem')
        })
      }
    })

  }

  ngOnDestroy(): void {
  this.sub.unsubscribe()
  }
}

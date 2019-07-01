import { Component, OnInit } from '@angular/core';
import {MDBModalRef} from 'angular-bootstrap-md';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor(public modalRef: MDBModalRef) { }

  ngOnInit() {
    this.data()
  }
  data() {
    console.log(this.modalRef)
  }

}

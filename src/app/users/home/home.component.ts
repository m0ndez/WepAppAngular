import { MdbTablePaginationComponent, MdbTableDirective} from 'angular-bootstrap-md';
import { Component, OnInit, ViewChild, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import {UsersService} from '../shared/users.service';
import {Users} from '../shared/users.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
frame;
users: Users[]
  length: number
@ViewChild(MdbTablePaginationComponent) mdbTablePagination: MdbTablePaginationComponent;
@ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;
elements: any = [];
previous: any = [];
headElements = ['ID', 'First', 'Last', 'Handle'];
  constructor(private cdRef: ChangeDetectorRef, private service: UsersService) { }

  ngOnInit() {
    this.service.getAll().subscribe((res) => {
      this.users = res['data']
      console.log(this.users)
      console.log('array Length: ' + this.users.length)
    }, (error) => {
      console.log(error)
    }, () => {
      console.log('Completely load data')
      this.length = this.users.length
      console.log(this.length)
    })
    for (let i = 1; i <= 30 ; i++) {
      this.elements.push({id: i.toString(), first: 'User ' + i, last: 'Name ' + i, handle: 'Handle ' + i});
    }
    this.mdbTable.setDataSource(this.elements);
    this.elements = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);
    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

}

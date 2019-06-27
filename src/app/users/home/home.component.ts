import { MdbTablePaginationComponent, MdbTableDirective} from 'angular-bootstrap-md';
import {Component, OnInit, ViewChild, HostListener, AfterViewInit, ChangeDetectorRef, OnDestroy} from '@angular/core';
import {UsersService} from '../shared/users.service';
import {Users} from '../shared/users.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
@ViewChild(MdbTablePaginationComponent) mdbTablePagination: MdbTablePaginationComponent;
@ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;
elements: Users[];
previous: string;
search;
button = false;
headElements = ['No.', 'FirstName', 'LastName', 'PhoneNumber', 'E-mail'];
sub: Subscription
  constructor(private cdRef: ChangeDetectorRef, private service: UsersService) { }

  ngOnInit() {
    this.sub = this.service.getAll().subscribe((res) => {
      this.elements = res['data']
      console.log(this.elements)
    }, (error) => {
      console.log(error)
    }, () => {
      console.log('Completely load data')
    })
    this.mdbTable.setDataSource(this.elements);
    this.elements = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(this.elements.length);
    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  openTools() {
  this.button = !this.button

  }

  ngOnDestroy(): void {
  this.sub.unsubscribe()
  }
}

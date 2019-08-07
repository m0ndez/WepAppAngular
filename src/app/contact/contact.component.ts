import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  title: string = 'Contact me at .. ';
  lat: number = 13.8064103;
  lng: number = 100.72106;
  constructor() { }

  ngOnInit() {
  }

}

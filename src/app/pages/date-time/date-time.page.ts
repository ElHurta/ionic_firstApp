import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  birthDate: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  cambiarDate(event) {
    console.log(event.detail.value);
  }

}

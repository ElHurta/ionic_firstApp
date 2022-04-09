import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage {

  favorite: boolean = false;

  constructor() { }

  onClick(){
    this.favorite = !this.favorite;
  }

}

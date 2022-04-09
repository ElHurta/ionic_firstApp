import { Component} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage {

  nombre: string = "Hurtado";
  usuario = {
    email: "",
    password: "",
  }

  constructor() { }

  onSubmit(){
    console.log(this.usuario.email);
  }

}

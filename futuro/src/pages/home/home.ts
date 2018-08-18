import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //variaveis
  valor1:number;
  valor2:number;
  resultado:number;
  constructor(public navCtrl: NavController) {

  }

  somar(){
    this.resultado = parseFloat(this.valor1) + parseFloat(this.valor2);

  }
}

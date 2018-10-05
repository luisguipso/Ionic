import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlimentacaoPage } from '../alimentacao/alimentacao';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  callAlimentacao(){
    this.navCtrl.push(AlimentacaoPage);
  }

}

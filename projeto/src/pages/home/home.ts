import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  callCadastro(){
    this.navCtrl.push(CadastroPage);
  }
  callMenu(){
    this.navCtrl.push(MenuPage);
  }

}

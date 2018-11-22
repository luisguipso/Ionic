import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroService } from '../../service/cadastro.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Cadastro } from '../../model/cadastro';
import { ToastController } from 'ionic-angular';


/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  esconderCampo;
  private cadastro: Cadastro = new Cadastro();

  constructor(public navCtrl: NavController, private cadastroService: CadastroService, public toastCtrl: ToastController){

  }

  verifica(selectedValue: any){
   if(selectedValue == "empresa"){
     this.esconderCampo = false;
   }else{
     this.esconderCampo = true;
   }
 }
 exibirMensagem(mensagem) {
    const toast = this.toastCtrl.create({
      message: mensagem,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
}
cadastrar(){
  this.cadastroService.addCadastro(this.cadastro);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

}

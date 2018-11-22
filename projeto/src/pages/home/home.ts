import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { MenuPage } from '../menu/menu';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularFire2/database';
import { Platform , LoadingController} from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { Cadastro } from '../../model/cadastro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AngularFireDatabase,AngularFireAuth]
})
export class HomePage {

  email;
  senha;
  loagin: any;
  private cadastro: Cadastro = new Cadastro();


  constructor(public navCtrl: NavController,
    private afAuth: AngularFireAuth,
        public loadingCtrl: LoadingController,
        public toastCtrl: ToastController,) {

  }
  callCadastro(){
    this.navCtrl.push(CadastroPage);
  }

  showLoader(){
  this.loagin = this.loadingCtrl.create({
    content: 'Aguarde...'
  });
  this.loagin.present();
}


 
  autenticar(){

    this.showLoader();
    var query = firebase.firestore().collection('cadastro').where('email', '==', this.email).where('senha','==',this.senha);

     var observer = query.onSnapshot(querySnapshot => {
       if(querySnapshot.size > 0){
         querySnapshot.forEach(doc => {
          this. cadastro = <Cadastro> doc.data();
        if(this.cadastro.perfil == "empresa"){

          this.loagin.dismiss();
        //  this.navCtrl.setRoot(ProfissionalPage,  {"usuario":this.cadastroPessoa});
        }else{
            this.loagin.dismiss();
            this.navCtrl.setRoot(MenuPage,  {"usuario":this.cadastro});
        }


         })
       }else{
          this.loagin.dismiss();
           this.exibirMensagem("Login ou senha inválido !!!");
       }

  }, err => {
    console.log(`Encountered error: ${err}`);
  });



  }

  exibirMensagem(mensagem) {
    const toast = this.toastCtrl.create({
      message: mensagem,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
}



  callMenu(){
    this.navCtrl.push(MenuPage);
  }

}

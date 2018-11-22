import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { MenuPage } from '../pages/menu/menu';
import { CadastroService } from '../service/cadastro.service';

var config = {
    apiKey: "AIzaSyBspXCggONPWn4RPPmBQg-bk92km48rq2g",
    authDomain: "hackthon-ca0c4.firebaseapp.com",
    databaseURL: "https://hackthon-ca0c4.firebaseio.com",
    projectId: "hackthon-ca0c4",
    storageBucket: "hackthon-ca0c4.appspot.com",
    messagingSenderId: "50960847017"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroPage,
    MenuPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule.enablePersistence(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroPage,
    MenuPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CadastroService,

  ]
})
export class AppModule {}

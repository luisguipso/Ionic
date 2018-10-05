import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AlimentacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alimentacao',
  templateUrl: 'alimentacao.html',
})
export class AlimentacaoPage {

  menu = {breakfast: 'cafe', lunch:'almoco', dinner:'janta'};

  breakfast = ['Um pão francês com queijo minas e um copo de suco de laranja',
               'Granola com um iogurte natural e pedaços de maçã',
               'Café com leite, um pão de cereais com margarina e uma pera',
               'Cereais integrais com frutas misturadas e bebida de amêndoa',
               '2 torradas com uma vitamina de morango de bebida de soja'];

  lunch = ['Salada de alface, tomate, cenoura crua ralada e farinha de linhaça, Arroz integral e suflê preparado com pedaços de chuchu, atum e creme de leite light (preferência por creme de leite caseiro)',
           'Laranja, banana prata, mamão e abacaxi em pedaços, Macarrão integral com molho ao sugo (molho caseiro), lentilha cozida e refogada em pouco óleo (girassol), filé de frango grelhado',
           'Salada de rúcula, agrião, acelga e pepino, Purê de batata doce com carne moída (patinho ou coxão mole)',
           'Salada de brócolis, ervilha, cenoura e grãos de milho cozidos, Berinjela ao forno recheada com frango desfiado, tomate e azeitonas',
           'Salada de alface, couve, grão de bico, tomate cereja e queijo fresco, Arroz integral, feijão e filé de tilápia assado'];

  dinner = ['Salada de alface, rúcula, tomate, couve-flor e mandioquinha acompanhada de pedaços de melão e mamão, Panqueca integral de frango desfiado',
            'Um filé de peito de frango grelhado (temperado a gosto), Duas torradas integrais, Um prato de salada de cenoura, alface e pepino',
            'Duas colheres (sopa) de purê de abóbora, Um prato de salada de alface, beterraba e ervilhas, Um filé de peito de frango grelhado, Três colheres (sopa) de agrião refogado',
            'Um filé de salmão grelhado, Uma maçã verde picada em cubos, em uma tigela com duas colheres (sopa) de quinoa em flocos, Um prato (sobremesa) de salada de rúcula e alface roxa, Uma fatia de melão picado',
            'Um prato de couve refogada, Uma omelete (prepare-a com azeite e alguns vegetais picados)'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.menu.breakfast = this.breakfast[this.generateRandom()];
    this.menu.dinner = this.lunch[this.generateRandom()];
    this.menu.lunch = this.dinner[this.generateRandom()];
  }

  generateRandom(){
    return Math.floor(Math.random() * 4 + 1);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlimentacaoPage');
  }

}

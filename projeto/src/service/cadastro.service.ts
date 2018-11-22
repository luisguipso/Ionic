import { Injectable } from '@angular/core';
import { Cadastro } from '../model/cadastro';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class CadastroService {

  itemsCollection: AngularFirestoreCollection<Cadastro> = this.afs.collection<Cadastro>('cadastro');

  constructor(private afs: AngularFirestore) { }
  getCadastros() {
    return this.itemsCollection;
  }
  addCadastro(cadastro: Cadastro) {
    const id = this.afs.createId();
    cadastro.key = id;
    this.itemsCollection.doc(id).set(JSON.parse(JSON.stringify(cadastro)));
  }
  updateCadastro(cadastro: Cadastro) {
    return this.itemsCollection.doc(cadastro.key).update(cadastro);
  }
  removeCadastro(cadastro: Cadastro) {
    return this.itemsCollection.doc(cadastro.key).delete();
  }
}

import {Component} from '@angular/core';
import {Modal, NavController} from 'ionic-angular';
import {DAOContas} from '../../dao/dao-contas';
import {ModalContasPage} from '../modal-contas/modal-contas';

@Component({
  templateUrl: 'build/pages/contas/contas.html'
})

export class ContasPage {
  dao: any;
  listaContas: any = [];

  constructor(private nav: NavController) {
    this.dao = new DAOContas();
    this.dao.getList((result) => {
      this.listaContas = result;
    });
  }

  insert() {
    let modal = Modal.create(ModalContasPage);

    modal.onDismiss((data) => {
      this.dao.insert(data, (result) => {
        this.listaContas.push(result);
      });
    });

    this.nav.present(modal);
  }
  
  edit(conta) {
    let modal = Modal.create(ModalContasPage, {param: conta});

    modal.onDismiss((data) => {
      this.dao.edit(data, (result) => {});
    });

    this.nav.present(modal);
  }

  delete(conta) {
    this.dao.delete(conta, (result) => {
      let pos = this.listaContas.indexOf(result);
      this.listaContas.splice(pos, 1);
    });
  }

}

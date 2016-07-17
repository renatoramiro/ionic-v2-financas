import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/modal-contas/modal-contas.html',
})
export class ModalContasPage {

  conta: any;

  constructor(private view: ViewController, private params: NavParams) {
    this.conta = params.get('param') || { descricao: '' };
  }

  cancel() {
    this.view.dismiss();
  }

  salvar() {
    this.view.dismiss(this.conta);
  }

}

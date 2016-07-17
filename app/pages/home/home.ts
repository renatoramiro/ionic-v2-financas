import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  nome: string;

  constructor(private navController: NavController) {
    this.nome = 'Renato Ramiro';
  }

  getNome() {
    return 'Retornando pelo método: ' + this.nome;
  }
}

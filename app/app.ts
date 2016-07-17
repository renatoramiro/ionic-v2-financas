import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {ContasPage} from './pages/contas/contas';
import {AboutPage} from './pages/about/about';


@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {
  home: any = HomePage;
  contas: any = ContasPage;
  about: any = AboutPage;

  rootPage: any = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(opcao) {
    this.rootPage = opcao;
  }
}

ionicBootstrap(MyApp);

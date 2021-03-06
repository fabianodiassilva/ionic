import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the Pagina2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

   public textoPageHome 

  constructor(public navCtrl: NavController, public navParams: NavParams) {

      this.textoPageHome = this.navParams.get('texto') + " - Texto inserido na PAGINA2";

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina2Page');
  }

  voltaHome(){

    this.navCtrl.push(HomePage);

  }

  irpagina3(){
    this.navCtrl.push('Pagina3Page')
  }

}

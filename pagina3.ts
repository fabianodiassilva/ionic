import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the Pagina3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {

  public _corBotao  

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this._corBotao = this.navParams.get('_corButton');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina3Page');
  }

}

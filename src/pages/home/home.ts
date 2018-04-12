import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public _ctexto = 'Texto inserido na HOME';  

  constructor(public navCtrl: NavController) {

  }

  mudarpagina(){

      this.navCtrl.push('Pagina2Page',{texto:this._ctexto})
  }

}

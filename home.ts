import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public _ctexto = 'Texto inserido na HOME'
  public checkVar = 'UNIPAM'
  public carros = [{'carro':'GOL'},
                   {'carro':'CORSA'}, 
                   {'carro':'FUSCA'},
                   {'carro':'BMW'},
                   {'carro':'COMBE'}]
  public corButton = 'verde'                   

  constructor(public navCtrl: NavController) {

  }

  mudarpagina(){

      this.navCtrl.push('Pagina2Page',{texto:this._ctexto})
  }

  irpag3(){
    this.navCtrl.push('Pagina3Page',{_corButton:this.corButton})
  }



}

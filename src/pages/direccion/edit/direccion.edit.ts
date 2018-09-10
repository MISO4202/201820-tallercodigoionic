import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {DireccionModel} from '../../../model/direccion/direccion'

@Component({
  selector: 'page-direccion-edit',
  templateUrl: 'direccion.edit.html'
})
export class DireccionEditPage {

  direccion = new DireccionModel();
  
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.direccion =  navParams.get("data");
  }


}

import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {CursoModel} from '../../../model/curso/curso'

@Component({
  selector: 'page-curso-edit',
  templateUrl: 'curso.edit.html'
})
export class CursoEditPage {

  curso = new CursoModel();
  
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.curso =  navParams.get("data");
  }


}

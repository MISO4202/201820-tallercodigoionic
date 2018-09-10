import { Component } from '@angular/core';
import { NavController ,ToastController, NavParams} from 'ionic-angular';
import {AtributoItemInterface} from '../../../model/common/atributo-item'
import {AtributoItemBooleanModel} from '../../../model/common/atributo-item-boolean'
import {AtributoItemStringModel} from '../../../model/common/atributo-item-string'
import {AtributoItemDateModel} from '../../../model/common/atributo-item-date'
import {AtributoItemNumberModel} from '../../../model/common/atributo-item-number'
import {CursoModel, CursoModelDelegate} from '../../../model/curso/curso'

@Component({
  selector: 'page-curso-add',
  templateUrl: 'curso.add.html'
})
export class CursoAddPage {

  curso = new CursoModel();
  
  public delegate:CursoModelDelegate;

  constructor(private toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams) {
    this.delegate =  navParams.get("delegate");
  }
  
  guardar(){
    if(this.validar()){
      this.delegate.addCurso(this.curso)
      this.navCtrl.pop();
    }
    else{
      this.presentToast();
    }
    
  }
  validar():Boolean{
    var resp = true;
    for(let f of this.curso.fields){
      
      if(f.isMandatory && ( f instanceof AtributoItemStringModel || f instanceof AtributoItemDateModel  ) ){

        if(f.getValue().trim() === ""){
          resp= false;
        }
        
      }
    }

    return resp;
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Debe completar todos los datos requeridos para Curso',
      duration: 3000,
      position: 'bottom'
    });
  
    toast.present();
  }
}

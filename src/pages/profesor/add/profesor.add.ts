import { Component } from '@angular/core';
import { NavController ,ToastController, NavParams} from 'ionic-angular';
import {AtributoItemInterface} from '../../../model/common/atributo-item'
import {AtributoItemBooleanModel} from '../../../model/common/atributo-item-boolean'
import {AtributoItemStringModel} from '../../../model/common/atributo-item-string'
import {AtributoItemDateModel} from '../../../model/common/atributo-item-date'
import {AtributoItemNumberModel} from '../../../model/common/atributo-item-number'
import {ProfesorModel, ProfesorModelDelegate} from '../../../model/profesor/profesor'
import {ProfesorService} from '../../../services/profesor-service'

@Component({
  selector: 'page-profesor-add',
  templateUrl: 'profesor.add.html'
})
export class ProfesorAddPage {

  profesor = new ProfesorModel();

  public delegate:ProfesorModelDelegate;
 
  constructor(private toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams,private model:ProfesorService) {
    this.delegate =  navParams.get("delegate");
  }
  
  guardar(){
    if(this.validar()){
      this.delegate.addProfesor(this.profesor);
      this.navCtrl.pop();
    }
    else{
      this.presentToast();
    }
    
  }
  validar():Boolean{
    var resp = true;
    for(let f of this.profesor.fields){
      
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
      message: 'Debe completar todos los datos requeridos para Profesor',
      duration: 3000,
      position: 'bottom'
    });
  
    toast.present();
  }
}

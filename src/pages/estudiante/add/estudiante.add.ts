import { Component } from '@angular/core';
import { NavController ,ToastController, NavParams} from 'ionic-angular';
import {AtributoItemStringModel} from '../../../model/common/atributo-item-string'
import {AtributoItemDateModel} from '../../../model/common/atributo-item-date'
import {EstudianteModel, EstudianteModelDelegate} from '../../../model/estudiante/estudiante'
import {EstudianteService} from '../../../services/estudiante-service'

@Component({
  selector: 'page-estudiante-add',
  templateUrl: 'estudiante.add.html'
})
export class EstudianteAddPage {

  estudiante = new EstudianteModel();
 
  public delegate:EstudianteModelDelegate;

  constructor(private toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams,private model:EstudianteService) {
    this.delegate =  navParams.get("delegate");
  }
  
  guardar(){
    if(this.validar()){
      this.delegate.addEstudiante(this.estudiante)
      this.navCtrl.pop();
    }
    else{
      this.presentToast();
    }
    
  }
  validar():Boolean{
    var resp = true;
    for(let f of this.estudiante.fields){
      
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
      message: 'Debe completar todos los datos requeridos para Estudiante',
      duration: 3000,
      position: 'bottom'
    });
  
    toast.present();
  }
}

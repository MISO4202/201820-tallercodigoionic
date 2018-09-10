import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { ProfesorModel } from '../../../model/profesor/profesor';
import { DireccionModel, DireccionModelDelegate } from '../../../model/direccion/direccion';
import { DireccionAddPage } from '../../direccion/add/direccion.add';
import { DireccionEditPage } from '../../direccion/edit/direccion.edit';

@Component({
  selector: 'page-profesor-edit',
  templateUrl: 'profesor.edit.html'
})
export class ProfesorEditPage implements DireccionModelDelegate{


  profesor = new ProfesorModel();
  
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.profesor =  navParams.get("data");
  }

  toggleSectionDirecciones() {
    this.profesor.direccionesOpen = !this.profesor.direccionesOpen;
  }
  pressAddDireccion(){
    this.navCtrl.push(DireccionAddPage,{
      delegate: this
    });
  }
  public addDireccion(direccion:DireccionModel):void{
    this.profesor.addDireccion(direccion)
  }
  public removeDireccion(direccion:DireccionModel):void{
    this.profesor.removeDireccion(direccion)
  }

  itemSelectedDireccion(direccion){
    this.navCtrl.push(DireccionEditPage, {
      data: direccion
    });
  }


}

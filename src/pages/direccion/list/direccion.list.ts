import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DireccionService} from '../../../services/direccion-service'
import { DireccionEditPage } from '../edit/direccion.edit';
import { DireccionAddPage } from '../add/direccion.add';
import { DireccionModel, DireccionModelDelegate } from '../../../model/direccion/direccion';

@Component({
  selector: 'page-direccion-list',
  templateUrl: 'direccion.list.html'
})
export class DireccionListPage implements DireccionModelDelegate {

  

  

  constructor(public navCtrl: NavController,private model:DireccionService) {

  }
  itemSelected(item) {
    
    this.navCtrl.push(DireccionEditPage, {
      data: item
    });
  }

  add() {
    this.navCtrl.push(DireccionAddPage, {
      delegate: this
    });
  }
  delete(direccion){
    this.model.remove(direccion);
  }

  public addDireccion(direccion:DireccionModel):void{
    this.model.add(direccion)
  }
  public removeDireccion(direccion:DireccionModel):void{
    this.model.remove(direccion)
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EstudianteService} from '../../../services/estudiante-service'
import { EstudianteEditPage } from '../edit/estudiante.edit';
import { EstudianteAddPage } from '../add/estudiante.add';
import { EstudianteModel, EstudianteModelDelegate } from '../../../model/estudiante/estudiante';

@Component({
  selector: 'page-estudiante-list',
  templateUrl: 'estudiante.list.html'
})
export class EstudianteListPage implements EstudianteModelDelegate{

  constructor(public navCtrl: NavController,private model:EstudianteService) {

  }
  itemSelected(item) {
    
    this.navCtrl.push(EstudianteEditPage, {
      data: item
    });
  }

  pressAddEstudiante(){
    this.navCtrl.push(EstudianteAddPage,{
      delegate: this
    });
  }
  public addEstudiante(estudiante:EstudianteModel):void{
    this.model.add(estudiante)
  }
  public removeEstudiante(estudiante:EstudianteModel):void{
    this.model.remove(estudiante);
  }


}

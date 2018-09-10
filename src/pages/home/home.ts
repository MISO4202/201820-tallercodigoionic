import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EntidadModel } from '../../model/common/entidad';
import { EntidadItemModel } from '../../model/common/entidad-item';
import { EstudianteListPage } from '../estudiante/list/estudiante.list';
import { ProfesorListPage } from '../profesor/list/profesor.list';
import { CursoListPage } from '../curso/list/curso.list';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  model :EntidadModel;  
  constructor(public navCtrl: NavController) {
      this.model= new EntidadModel();
      this.model.addItem(new EntidadItemModel("Estudiantes","Lista de estudiantes de la universidad"));
      this.model.addItem(new EntidadItemModel("Profesores","Lista de profesores de la universidad"));
      this.model.addItem(new EntidadItemModel("Cursos","Lista de cursos de la universidad"));
  }
  itemSelected(item: EntidadItemModel) {
    if (item.title === 'Estudiantes'){
      this.navCtrl.push(EstudianteListPage);
    }else if(item.title === 'Profesores'){
      this.navCtrl.push(ProfesorListPage);
    }
    else if(item.title === 'Cursos'){
      this.navCtrl.push(CursoListPage);
    }    
  }
}

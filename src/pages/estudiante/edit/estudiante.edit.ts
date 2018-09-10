import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {EstudianteModel} from '../../../model/estudiante/estudiante'
import { DireccionAddPage } from '../../direccion/add/direccion.add';
import { DireccionModelDelegate, DireccionModel } from '../../../model/direccion/direccion';
import { CursoListPage } from '../../curso/list/curso.list';
import { CursoModelDelegate, CursoModel } from '../../../model/curso/curso';
import { DireccionEditPage } from '../../direccion/edit/direccion.edit';
import { CursoEditPage } from '../../curso/edit/curso.edit';

@Component({
  selector: 'page-estudiante-edit',
  templateUrl: 'estudiante.edit.html'
})
export class EstudianteEditPage implements DireccionModelDelegate,CursoModelDelegate{

  estudiante = new EstudianteModel();

  
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.estudiante =  navParams.get("data");
  }

  toggleSectionDirecciones() {
    this.estudiante.direccionesOpen = !this.estudiante.direccionesOpen;
  }
  toggleSectionCursos() {
    this.estudiante.cursosOpen = !this.estudiante.cursosOpen;
  }
  pressAddDireccion(){
    this.navCtrl.push(DireccionAddPage,{
      delegate: this
    });
  }

  pressAddCurso(){
    this.navCtrl.push(CursoListPage,{
      delegate: this
    });
  }
  public addDireccion(direccion:DireccionModel):void{
    this.estudiante.addDireccion(direccion)
  }
  public removeDireccion(direccion:DireccionModel):void{
    this.estudiante.removeDireccion(direccion)
  }

  public addCurso(curso:CursoModel):void{
    this.estudiante.addCurso(curso)
  }
  public removeCurso(curso:CursoModel):void{
    this.estudiante.removeCurso(curso)
  }

  itemSelectedDireccion(direccion){
    this.navCtrl.push(DireccionEditPage, {
      data: direccion
    });
  }
  itemSelectedCurso(curso){
    this.navCtrl.push(CursoEditPage, {
      data: curso
    });
  }


}

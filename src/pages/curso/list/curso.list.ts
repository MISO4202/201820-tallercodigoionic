import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CursoService} from '../../../services/curso-service'
import { CursoEditPage } from '../edit/curso.edit';
import { CursoAddPage } from '../add/curso.add';
import { CursoModel, CursoModelDelegate } from '../../../model/curso/curso';

@Component({
  selector: 'page-curso-list',
  templateUrl: 'curso.list.html'
})
export class CursoListPage implements CursoModelDelegate {


  public delegate:CursoModelDelegate;

  constructor(public navCtrl: NavController,private model:CursoService, public navParams: NavParams) {
    this.delegate =  navParams.get("delegate");
  }
  itemSelected(item) {
    
    this.navCtrl.push(CursoEditPage, {
      data: item
    });
  }
  itemSelectedToMaster(item) {
    
    this.delegate.addCurso(item);
    this.navCtrl.pop();
  }

  pressAddCurso() {
    this.navCtrl.push(CursoAddPage, {
      delegate: this
    });
  }

  public addCurso(curso:CursoModel):void{
    this.model.add(curso)
  }
  public removeCurso(curso:CursoModel):void{
    this.model.remove(curso)
  }

}

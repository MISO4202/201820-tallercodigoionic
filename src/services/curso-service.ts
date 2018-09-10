import { Injectable } from '@angular/core';
import { CursoModel } from '../model/curso/curso';

@Injectable()
export class CursoService {

  cursos : CursoModel[];
  constructor() {
    this.cursos = []; 
  }

  add(curso:CursoModel){
    this.cursos.push(curso);
  }

  remove(curso:CursoModel){
    for(var i = 0; i < this.cursos.length; i++) {
        if(this.cursos[i] == curso){
            this.cursos.splice(i, 1);
        }
    }
  }
}
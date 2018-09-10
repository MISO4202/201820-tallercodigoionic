import { Injectable } from '@angular/core';
import { EstudianteModel } from '../model/estudiante/estudiante';

@Injectable()
export class EstudianteService {

  estudiantes : EstudianteModel[];
  constructor() {
    this.estudiantes = []; 
  }

  add(estudiante:EstudianteModel){
    this.estudiantes.push(estudiante);
  }

  remove(estudiante:EstudianteModel){
    for(var i = 0; i < this.estudiantes.length; i++) {
        if(this.estudiantes[i] == estudiante){
            this.estudiantes.splice(i, 1);
        }
    }
  }
}
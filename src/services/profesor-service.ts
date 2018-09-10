import { Injectable } from '@angular/core';
import { ProfesorModel } from '../model/profesor/profesor';

@Injectable()
export class ProfesorService {

  profesores : ProfesorModel[];
  constructor() {
    this.profesores = []; 
  }

  add(profesor:ProfesorModel){
    this.profesores.push(profesor);
  }

  remove(profesor:ProfesorModel){
    for(var i = 0; i < this.profesores.length; i++) {
        if(this.profesores[i] == profesor){
            this.profesores.splice(i, 1);
        }
    }
  }
}
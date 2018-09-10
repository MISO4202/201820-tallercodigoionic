import { Injectable } from '@angular/core';
import { DireccionModel } from '../model/direccion/direccion';

@Injectable()
export class DireccionService {

  direcciones : DireccionModel[];
  constructor() {
    this.direcciones = []; 
  }

  add(direccion:DireccionModel){
    this.direcciones.push(direccion);
  }

  remove(direccion:DireccionModel){
    for(var i = 0; i < this.direcciones.length; i++) {
        if(this.direcciones[i] == direccion){
            this.direcciones.splice(i, 1);
        }
    }
  }
}
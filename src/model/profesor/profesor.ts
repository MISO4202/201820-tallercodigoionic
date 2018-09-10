import '../common/atributo-item'
import { AtributoItemModel,AtributoItemInterface } from '../common/atributo-item';
import { AtributoItemStringModel } from '../common/atributo-item-string';
import { AtributoItemNumberModel } from '../common/atributo-item-number';
import { AtributoItemBooleanModel } from '../common/atributo-item-boolean';
import { AtributoItemDateModel } from '../common/atributo-item-date';
import { DireccionModel, DireccionModelDelegate } from '../direccion/direccion';

export interface ProfesorModelDelegate {
    addProfesor: (profesor:ProfesorModel) => void;
    removeProfesor: (profesor:ProfesorModel)=> void;
}
export class ProfesorModel implements DireccionModelDelegate{
 
    public fields: AtributoItemModel[]

    //Direccion
    public direcciones:DireccionModel[]
    public direccionesOpen:Boolean = false;

    constructor(){
        this.fields = [];
        this.fields.push(new AtributoItemStringModel("Nombre",true,true,true,false,""))
        this.fields.push(new AtributoItemStringModel("Código",false,true,true,false,""))
        this.fields.push(new AtributoItemStringModel("Facultad",false,false,true,true,""))
        this.fields.push(new AtributoItemDateModel("Inicio",false,false,false,true,""))

        this.direcciones = []
    }

    public getTitleField():AtributoItemModel{
        for(let f of this.fields){
            if(f.isTitle){
                return f;
            }
        }
        return null;
    }
    public addDireccion(direccion:DireccionModel){
        this.direcciones.push(direccion) 
     }
 
     public removeDireccion(direccion:DireccionModel){
         for(var i = 0; i < this.direcciones.length; i++) {
             if(this.direcciones[i] == direccion){
                 this.direcciones.splice(i, 1);
             }
         }
      }
    
}
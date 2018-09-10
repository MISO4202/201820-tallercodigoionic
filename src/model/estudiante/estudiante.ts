import '../common/atributo-item'
import { AtributoItemModel,AtributoItemInterface } from '../common/atributo-item';
import { AtributoItemStringModel } from '../common/atributo-item-string';
import { AtributoItemNumberModel } from '../common/atributo-item-number';
import { AtributoItemBooleanModel } from '../common/atributo-item-boolean';
import { DireccionModel, DireccionModelDelegate } from '../direccion/direccion';
import { CursoModel, CursoModelDelegate } from '../curso/curso';

export interface EstudianteModelDelegate {
    addEstudiante: (estudiante:EstudianteModel) => void;
    removeEstudiante: (estudiante:EstudianteModel)=> void;
}


export class EstudianteModel implements DireccionModelDelegate, CursoModelDelegate{
 
    public fields: AtributoItemModel[]

    //Direccion
    public direcciones:DireccionModel[]
    public direccionesOpen:Boolean = false;
    //Cursos
    public cursos:CursoModel[]
    public cursosOpen:Boolean = false;

    constructor(){
        this.fields = [];
        this.fields.push(new AtributoItemStringModel("Nombre",true,true,true,false,""))
        this.fields.push(new AtributoItemStringModel("Código",false,true,true,false,""))
        this.fields.push(new AtributoItemNumberModel("Semestre",false,false,true,true,0))
        this.fields.push(new AtributoItemBooleanModel("Activo",false,false,false,true,true))

        this.direcciones = []
        this.cursos = [];

    
    }

    public getTitleField():AtributoItemModel{
        for(let f of this.fields){
            if(f.isTitle){
                return f;
            }
        }
        return null;
    }


    public addCurso(direccion:CursoModel){
        this.cursos.push(direccion) 
     }
 
     public removeCurso(curso:CursoModel){
         for(var i = 0; i < this.cursos.length; i++) {
             if(this.cursos[i] == curso){
                 this.cursos.splice(i, 1);
             }
         }
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
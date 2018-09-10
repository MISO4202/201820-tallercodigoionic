import '../common/atributo-item'
import { AtributoItemModel,AtributoItemInterface } from '../common/atributo-item';
import { AtributoItemStringModel } from '../common/atributo-item-string';
import { AtributoItemNumberModel } from '../common/atributo-item-number';
import { AtributoItemBooleanModel } from '../common/atributo-item-boolean';
import { AtributoItemDateModel } from '../common/atributo-item-date';

export interface CursoModelDelegate {
    addCurso: (curso:CursoModel) => void;
    removeCurso: (curso:CursoModel)=> void;
}


export class CursoModel {
 
    public fields: AtributoItemModel[]

    constructor(){
        this.fields = [];
        this.fields.push(new AtributoItemStringModel("Nombre",true,true,true,false,""))
        this.fields.push(new AtributoItemStringModel("Codigo",false,true,true,false,""))
    }

    public getTitleField():AtributoItemModel{
        for(let f of this.fields){
            if(f.isTitle){
                return f;
            }
        }
        return null;
    }
 
    
}
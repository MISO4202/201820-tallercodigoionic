import '../common/atributo-item'
import { AtributoItemModel,AtributoItemInterface } from '../common/atributo-item';
import { AtributoItemStringModel } from '../common/atributo-item-string';
import { AtributoItemNumberModel } from '../common/atributo-item-number';
import { AtributoItemBooleanModel } from '../common/atributo-item-boolean';

export interface DireccionModelDelegate {
    addDireccion: (direccion:DireccionModel) => void;
    removeDireccion: (direccion:DireccionModel)=> void;
}


export class DireccionModel {
 
    public fields: AtributoItemModel[]

    constructor(){
        this.fields = [];
        this.fields.push(new AtributoItemStringModel("Direccion",true,true,true,false,""))
        this.fields.push(new AtributoItemStringModel("Ciudad",false,true,true,false,""))
        this.fields.push(new AtributoItemStringModel("Pais",false,true,true,false,""))
        this.fields.push(new AtributoItemNumberModel("Zipcode",false,true,true,false,0))
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
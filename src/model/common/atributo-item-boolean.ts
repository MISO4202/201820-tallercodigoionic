import { AtributoItemModel,AtributoItemInterface } from './atributo-item';
export class AtributoItemBooleanModel extends AtributoItemModel implements AtributoItemInterface<Boolean>{
 
    
    constructor(public name:String,public isTitle:Boolean,public isVisibleInList:Boolean,public isMandatory:Boolean,public isEditable:Boolean,public value:Boolean){
        super(name,isTitle,isVisibleInList,isMandatory,isEditable)
        this.type='boolean';
    }

    public setValue(value:Boolean){
        this.value = value;
    }
    public getValue():Boolean{
        return this.value;
    }
    

}
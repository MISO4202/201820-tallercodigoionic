import { AtributoItemModel,AtributoItemInterface } from './atributo-item';
export class AtributoItemNumberModel extends AtributoItemModel implements AtributoItemInterface<Number>{
 
    
    constructor(public name:String,public isTitle:Boolean,public isVisibleInList:Boolean,public isMandatory:Boolean,public isEditable:Boolean,public value:Number){
        super(name,isTitle,isVisibleInList,isMandatory,isEditable)
        this.type='number';
    }

    public setValue(value:Number){
        this.value = value;
    }
    public getValue():Number{
        return this.value;
    }
    

}
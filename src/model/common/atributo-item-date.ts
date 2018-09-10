import { AtributoItemModel,AtributoItemInterface } from './atributo-item';
export class AtributoItemDateModel extends AtributoItemModel implements AtributoItemInterface<String>{
 
    
    constructor(public name:String,public isTitle:Boolean,public isVisibleInList:Boolean,public isMandatory:Boolean,public isEditable:Boolean,public value:String){
        super(name,isTitle,isVisibleInList,isMandatory,isEditable)
        this.type='date';
    }

    public setValue(value:String){
        this.value = value;
    }
    public getValue():String{
        return this.value;
    }
    

}
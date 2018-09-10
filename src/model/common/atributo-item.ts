export interface AtributoItemInterface<T> {
    setValue: (value:T) => void;
    getValue: () => T;
}

export abstract class AtributoItemModel {
 
    public type:String;
    constructor(public name:String,public isTitle:Boolean,public isVisibleInList:Boolean,public isMandatory:Boolean,public isEditable:Boolean){
 
    }

    public isString():Boolean{
        return this.type == 'string'
    }
    public isNumber():Boolean{
        return this.type == 'number'
    }
    public isBoolean():Boolean{
        return this.type == 'boolean'
    }
    public isDate():Boolean{
        return this.type == 'date'
    }

}
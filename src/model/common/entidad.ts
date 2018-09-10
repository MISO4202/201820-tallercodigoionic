import './entidad-item'
import { EntidadItemModel } from './entidad-item';
export class EntidadModel {
 
    public items: EntidadItemModel[]
    constructor(){
        this.items = [];
    }
 
    addItem(item:EntidadItemModel){
        this.items.push(item);
    }
 
    removeItem(item:EntidadItemModel){
 
        for(var i = 0; i < this.items.length; i++) {
            if(this.items[i] == item){
                this.items.splice(i, 1);
            }
        }
 
    }
}
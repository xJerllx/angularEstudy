import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {


  public charaters:Character[]=[{
    id:uuid(),
    name:"Krilin",
    power:1000

  },

  {
    id:uuid(),
    name:"Goku",
    power:10000
  }


];

onAddCharater(charater:Character):void{

  const newCharater:Character={
     ...charater,id:uuid()}

  this.charaters.push(newCharater);

}

  constructor() { }


  onDelete(id:string){
this.charaters=this.charaters.filter( charater => charater.id !== id);
  }
}

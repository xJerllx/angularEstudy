import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  @Input()
  public characterList: Character[]=[{
    name:"Trunks",
    power:100
  }];


  @Output()
   public onDelete: EventEmitter<string> = new EventEmitter();



  onDeleteCharater(id?:string):void{
    if(!id) return;

    this.onDelete.emit(id);
  }

}


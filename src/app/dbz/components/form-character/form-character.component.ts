import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-form-character',
  templateUrl: './form-character.component.html',
  styleUrls: ['./form-character.component.css']
})
export class FormCharacterComponent {
  @Output()
 public onNewCharater: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name:"",
    power:0,
  };


   addCharater():void {
    console.log (this.character);

    if ( this.character.name.length === 0) return;

    this.onNewCharater.emit(this.character)

    this.character= {name:"",power:0}
   }

}

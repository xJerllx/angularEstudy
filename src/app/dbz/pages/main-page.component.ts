import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor(private dbzService:DbzService) { }


  get charaters():Character[]{
    return [...this.dbzService.charaters];
  }


  onDelete( id:string):void{
this.dbzService.onDelete(id)
  }


  onAddCharater( charater:Character):void{
    this.dbzService.onAddCharater(charater);
  }


}

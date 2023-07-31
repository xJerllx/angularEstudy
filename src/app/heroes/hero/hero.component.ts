import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:string ="Ironman";
  public edad:number=45;

  public get Capitalizacion() : string {
    return this.name.toUpperCase();
  }

  metodo():string{
    return `${this.name } + ${this.edad}` ;
  }

  changeHero():void{
    this.name="Spiderman";
  }

  ageHero():void{
    this.edad=25;
  }

  Reset():void{
    this.name="Ironman";
    this.edad=45;
  }

}

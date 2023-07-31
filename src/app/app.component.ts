import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClasesAngular';
  public counter: number=10;

  incremetaBy(value:number):void{
  this.counter +=value;
}

resetBy():void {
  this.counter =10;
}
}



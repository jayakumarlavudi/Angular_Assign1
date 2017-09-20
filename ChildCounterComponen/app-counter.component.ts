import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  inputs :['counterInp'],
  template: `
    <p>app-counter</p>
    
    <p>child component: <button (click)="decrement()">-</button> 
     {{counterInp}}
      <button (click)="increment()">+</button> </p>
  `,
  styles: []
})
export class AppCounterComponent {

  public  counterInp;

  @Output()
  updatechild = new EventEmitter<number>();
  constructor()
  {
    this.counterInp =0;
  }
  decrement(){
    this.counterInp--;
    //console.log();
    this.updatechild.emit(this.counterInp);
  }

  increment(){
    this.counterInp++;
    //console.log();
    this.updatechild.emit(this.counterInp);
  }



}

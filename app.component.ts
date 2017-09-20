import {Component,Output, EventEmitter,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation : ViewEncapsulation.Emulated
})
export class AppComponent {

  title = 'My counter app';
  public counterInpParent =0;

  constructor(){
    this.counterInpParent=0;
  }


  setChildValue(value){
    this.counterInpParent = value;
   // console.log(this.counterInpParent);
  }

  UpdatefromChildValue(val)
  {
    this.counterInpParent=val;

  }


}

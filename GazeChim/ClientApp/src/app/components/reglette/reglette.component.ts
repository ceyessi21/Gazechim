import { Component, } from '@angular/core';
import { Bartemp, Fluide } from '../interfaces.model';
import { faExclamationTriangle, } from '@fortawesome/free-solid-svg-icons'
import { float } from '@zxing/library/esm/customTypings';

@Component({
  selector: 'app-reglette',
  templateUrl: './reglette.component.html',
  styleUrls: ['./reglette.component.scss']
})
export class RegletteComponent {

  warningIcon = faExclamationTriangle;
  title : string = "R427A";
  absolute : boolean = false;
  dew : boolean = false;
  bar : float = 0;
  temp : float = 0;


   bartmp : Bartemp[] = [
    { bar: 100, temp: 10, tempAbs: 200 },  { bar: 90, temp: 20, tempAbs: 2 }, { bar: 80, temp: 30 , tempAbs: 3}, { bar: 70, temp: 40, tempAbs: 4 },{ bar: 60, temp: 50, tempAbs: 5 },
    { bar: 50, temp: 60, tempAbs: 6 }, { bar: 40, temp: 70, tempAbs: 7 }, { bar: 30, temp: 80, tempAbs: 8 }, { bar: 20, temp: 90, tempAbs: 9 }, { bar: 10, temp: 100, tempAbs: 10 },
    { bar: 0, temp: 110, tempAbs: -1 },
    { bar: -10, temp: 10 , tempAbs: 11}, { bar: -20, temp: 10, tempAbs: 12}, { bar: -30, temp: 10, tempAbs: 13 }, { bar: -40, temp: 10 , tempAbs: 14}, { bar: -50, temp: 10, tempAbs: 15 },
    { bar: -60, temp: 10, tempAbs: 16 }, { bar: -70, temp: 10, tempAbs: 17 }, { bar: -80, temp: 10, tempAbs: 18 }, { bar: -90, temp: 10 , tempAbs: 19}, { bar: -100, temp: 10, tempAbs: 21 },
   ];

   fluide : Fluide = {
    name:'R427A',
    securityGroup: "A1",
    data : this.bartmp,
   }

   element = this.fluide.data[0];
  //  this.bartmp[0];

  updateTemp() {
    const newBar = Number(this.element.bar);
    const bartmp = this.bartmp.find(item => item.bar === newBar);
    if (bartmp) {
      if(!this.absolute){
        this.element.temp = bartmp.temp;
      } else{
        this.element.tempAbs = bartmp.tempAbs;
      }

    }
  }

  updateBar() {
    if(!this.absolute){
      const newTemp = Number(this.element.temp);
      const bartmp = this.bartmp.find(item => item.temp === newTemp);
      if (bartmp) {
        this.element.bar = bartmp.bar;
      }
    }

    if(this.absolute){
      const newTempAbs = Number(this.element.tempAbs);
      const bartmp = this.bartmp.find(item => item.temp === newTempAbs);
      if (bartmp) {
        this.element.bar = bartmp.bar;
      }
    }

  }

}

import { Component } from '@angular/core';
import { Bartemp, Fluide } from '../interfaces.model';

@Component({
  selector: 'app-reglette-svg',
  templateUrl: './reglette-svg.component.html',
  styleUrls: ['./reglette-svg.component.scss']
})
export class RegletteSvgComponent {
  fillColor = 'rgb(255, 0, 0)';

  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }

  getYCoordinate(index: number): number {
    return 10 + index * 10;
  }


  bartmp : Bartemp[] = [
    { bar: 100, temp: 10, tempAbs: 200 },  { bar: 90, temp: 20, tempAbs: 2 }, { bar: 80, temp: 30 , tempAbs: 3}, { bar: 70, temp: 40, tempAbs: 4 },{ bar: 60, temp: 50, tempAbs: 5 },
    { bar: 50, temp: 60, tempAbs: 6 }, { bar: 40, temp: 70, tempAbs: 7 }, { bar: 30, temp: 80, tempAbs: 8 }, { bar: 20, temp: 90, tempAbs: 9 }, { bar: 10, temp: 100, tempAbs: 10 },
    { bar: 0, temp: 110, tempAbs: -1 },
    { bar: -10, temp: 10 , tempAbs: 11}, { bar: -20, temp: 10, tempAbs: 12}, { bar: -30, temp: 10, tempAbs: 13 }, { bar: -40, temp: 10 , tempAbs: 14}, { bar: -50, temp: 10, tempAbs: 15 },
    { bar: -60, temp: 10, tempAbs: 16 }, { bar: -70, temp: 10, tempAbs: 17 }, { bar: -80, temp: 10, tempAbs: 18 }, { bar: -90, temp: 10 , tempAbs: 19}, { bar: -100, temp: 10, tempAbs: 21 },
   ];

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent {
    height : number = 0;
    length : number = 0;
    width : number = 0 ;
    surface !: number;

    calculateSurface() {
      console.log("Calculer la surface");
      this.surface = this.height * this.length * this.width;
    }
}

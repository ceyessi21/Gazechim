import { Component, EventEmitter, Input, Output } from '@angular/core';
import  { CalculatorService } from '../calculatorService'

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent {
    height : number = 0;
    length : number = 0;
    width : number = 0 ;
    volume !: number;

    @Output() changeVolume = new EventEmitter<number>();

    constructor(private calculService: CalculatorService) {}

    calculateVolume() {
      console.log("Calculer la surface");
      this.volume = this.height * this.length * this.width;
      this.calculService.setVolume(this.volume);
      console.log("this.calculService.getVolume() "+this.calculService.getVolume());
      this.changeVolume.emit(this.volume);
    }
}

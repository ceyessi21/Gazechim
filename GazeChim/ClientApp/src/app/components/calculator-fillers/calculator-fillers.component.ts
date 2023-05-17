import { Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators, FormGroup } from '@angular/forms';
import  { Opteon } from '../interfaces.model';
import  { CalculatorService } from '../calculatorService'

@Component({
  selector: 'app-calculator-fillers',
  templateUrl: './calculator-fillers.component.html',
  styleUrls: ['./calculator-fillers.component.scss']
})
export class CalculatorFillersComponent implements OnInit{

  isLinear=true;
  listOpteon !: Opteon[];
  volume !: number;
  accessCategory : string = 'A';
  accessClass : string = 'Classe I';


  constructor(private builder: FormBuilder, private calculService: CalculatorService) { }

  ngOnInit(): void {
    this.listOpteon = [
      {nameFluide:" Opteon™ XL10",  lFL: 0.289 , m1: 1.734, m2: 7.514, m3: 37.57, qlmv: 0.06, qlav: 0.14},
      {nameFluide:" Opteon™ XL20",  lFL: 0.293 , m1: 1.758, m2: 7.618, m3: 38.09, qlmv: 0.06, qlav: 0.14},
      {nameFluide:" Opteon™ XL40",  lFL: 0.278 , m1: 1.668, m2: 7.228, m3: 36.14, qlmv: 0.06, qlav: 0.13},
      {nameFluide:" Opteon™ XL41",  lFL: 0.303 , m1: 1.818, m2: 7.878, m3: 39.39, qlmv: 0.06, qlav: 0.15}
    ]
    this.calculService.setOpteonListe(this.listOpteon);
  }

  application = this.builder.group({
    //firstCtrl: ['', Validators.required],
  });
  category = this.builder.group({
    //secondCtrl: ['', Validators.required],
  });
  class = this.builder.group({
    //secondCtrl: ['', Validators.required],
  });
  system = this.builder.group({
    //secondCtrl: ['', Validators.required],
  });
  result = this.builder.group({
    //secondCtrl: ['', Validators.required],
  });

  }

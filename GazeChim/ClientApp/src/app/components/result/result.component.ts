import { Component, EventEmitter, Input, Output, OnInit, AfterViewInit } from '@angular/core';
import { Opteon, CategoryLabel } from '../interfaces.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})

export class ResultComponent implements  AfterViewInit {

  @Input() volume: number = 72;
  @Input() listOpteon!: Opteon[];
  @Input() accessCategory: string = 'Classe I';
  @Input() accessClass: string = 'A';
  enappc!: number | null;
  m1!: number;
  qlmv!: number;
  qlav!: number;
  selectedOption!: string;
  selectedOpteon!: Opteon | null;

  ngOnInit(): void {
    console.log("this.volume = "+this.volume);
    this.selectedOpteon = this.listOpteon[1];
    console.log("this.selectedOpteon = "+this.selectedOpteon);
    this.selectedOption = this.listOpteon[1].nameFluide;
    console.log("this.selectedOption = "+this.selectedOption);
    this.loadCalculate(event);
    console.log("Call first loadCalculate()");
    console.log("this.accessCategory = "+this.accessCategory);
    console.log("this.accessClass = "+this.accessClass);

  }

  ngAfterViewInit() {
    console.log('Etape result chargée');
  }

  loadCalculate(event: any) {
    this.selectedOpteon = this.getElementByName(this.selectedOption);
    console.log("selectedOpteon after getElement() = "+this.selectedOpteon);
    let qm2, qm3;
    if (this.selectedOpteon != null) {
      qm2 = this.selectedOpteon.m2*1.5;
      qm3 = this.selectedOpteon.m3 * 1.5;
      this.enappc = this.formatValue(this.selectedOpteon.lFL * this.volume * 0.2);
      console.log("Je suis dans loadCalculate()");
      console.log("this.accessCategory"+ this.accessCategory);
      switch (this.accessCategory) {
        case "A":
          if (this.accessClass == 'Classe I') {
            this.getCalcI(qm2, this.selectedOpteon);

            // if (Math.floor((this.enappc > qm2 ? qm2 : this.enappc)*1000)/1000 < this.selectedOpteon.m1) {
            //   this.qlav = this.formatValue(this.selectedOpteon.m1);
            //   this.qlmv = this.formatValue(this.selectedOpteon.m1);
            // } else {
            //   this.qlav = this.formatValue((this.enappc > qm2 ? qm2 : this.enappc));
            //   this.qlmv = this.formatValue((this.enappc > qm2 ? qm2 : this.enappc));
            // }

          } else if (this.accessClass == 'Classe II') {

            //Calcul QLMV
            if ((this.selectedOpteon.qlmv * this.volume) > qm3) {
              this.qlmv = this.formatValue(qm3);
            } else {
              this.qlmv = this.formatValue(this.selectedOpteon.qlmv*this.volume);
            }
            //Calcul QLAV
            if ((this.selectedOpteon.qlav * this.volume) > qm3) {
              this.qlav = this.formatValue(qm3);
            } else {
              this.qlav = this.formatValue(this.selectedOpteon.qlav*this.volume);
            }

          } else if (this.accessClass == 'Classe III') {
            console.log("Pas de valeurs définies");
            this.init();
          } else if (this.accessClass == 'Classe IV') {
                this.init();
                this.enappc = this.formatValue(qm3);
          }

          break;

        case "B":
          if (this.accessClass == 'Classe I') {
            // if (Math.floor((this.enappc > qm2 ? qm2 : this.enappc)*1000)/1000 < this.selectedOpteon.m1) {
            //   this.qlav = this.formatValue(this.selectedOpteon.m1);
            //   this.qlmv = this.formatValue(this.selectedOpteon.m1);
            // } else {
            //   this.qlav = this.formatValue((this.enappc > qm2 ? qm2 : this.enappc));
            //   this.qlmv = this.formatValue((this.enappc > qm2 ? qm2 : this.enappc));
            // }
            this.getCalcI(qm2, this.selectedOpteon);
          } else if (this.accessClass == 'Classe II') {
                 //Calcul QLMV
            if ((this.selectedOpteon.qlmv * this.volume) > qm3) {
              this.qlmv = this.formatValue(qm3);
            } else {
              this.qlmv = this.formatValue(this.selectedOpteon.qlmv*this.volume);
            }
            //Calcul QLAV
            if ((this.selectedOpteon.qlav * this.volume) > qm3) {
              this.qlav = this.formatValue(qm3);
            } else {
              this.qlav = this.formatValue(this.selectedOpteon.qlav*this.volume);
            }
          } else if (this.accessClass == 'Classe III') {
            this.init();
            console.log("Pas de valeurs définies");
          } else if (this.accessClass == 'Classe IV') {
            this.init();
            this.enappc = this.formatValue(qm3);
          }
          break;
        case "C":
          if (this.accessClass == 'Classe I') {
            // if (Math.floor((this.enappc > qm2 ? qm2 : this.enappc)*1000)/1000 < this.selectedOpteon.m1) {
            //   this.qlav = this.formatValue(this.selectedOpteon.m1);
            //   this.qlmv = this.formatValue(this.selectedOpteon.m1);
            // } else {
            //   this.qlav = this.formatValue((this.enappc > qm2 ? qm2 : this.enappc));
            //   this.qlmv = this.formatValue((this.enappc > qm2 ? qm2 : this.enappc));
            // }
            this.getCalcI(qm2, this.selectedOpteon);
          } else if (this.accessClass == 'Classe II') {
             //Calcul QLMV
             if ((this.selectedOpteon.qlmv * this.volume) > qm3) {
              this.qlmv = this.formatValue(qm3);
            } else {
              this.qlmv = this.formatValue(this.selectedOpteon.qlmv*this.volume);
            }
            //Calcul QLAV
            if ((this.selectedOpteon.qlav * this.volume) > qm3) {
              this.qlav = this.formatValue(qm3);
            } else {
              this.qlav = this.formatValue(this.selectedOpteon.qlav*this.volume);
            }
          } else if (this.accessClass == 'Classe III') {
            console.log("Pas de valeurs définies");
            this.init();
          } else if (this.accessClass == 'Classe IV') {
            this.init();
            this.enappc = this.formatValue(qm3);
          }
          break;
        default:
          console.log("Une erreure s'est produite");
          break;
      }
    }
  }

    getCalcI(qm2: number, selectedOpteon: Opteon){
    if(this.enappc != null){
      if (Math.floor((this.enappc > qm2 ? qm2 : this.enappc)*1000)/1000 < selectedOpteon.m1) {
        this.qlav = this.formatValue(selectedOpteon.m1);
        this.qlmv = this.formatValue(selectedOpteon.m1);
      } else {
        this.qlav = this.formatValue((this.enappc > qm2 ? qm2 : this.enappc));
        this.qlmv = this.formatValue((this.enappc > qm2 ? qm2 : this.enappc));
      }
    }
  }

  // onSegmentChanged(event: any) {
  //   this.selectedOpteon = this.getElementByName(this.selectedOption);
  //   console.log(' this.selectedOpteon = ' + this.selectedOpteon);
  //   if (this.selectedOpteon != null) {
  //     this.enappc = this.formatValue(
  //       this.selectedOpteon.lFL * this.volume * 0.2
  //     );
  //     this.qlav = this.formatValue(this.volume * this.selectedOpteon.qlmv);
  //     this.qlmv = this.formatValue(this.volume * this.selectedOpteon.qlav);
  //     console.log('selectedOption = ' + this.selectedOption);
  //   }
  // }

  getElementByName(name: string): Opteon | null {
    let value: Opteon | null = null;
    for (let opt of this.listOpteon) {
      if (opt.nameFluide === name) {
        value = opt;
        break;
      }
    }
    return value;
  }

  formatValue(value: number) {
    return (value = Math.round(value * 100) / 100);
  }

  init(){
    this.enappc = null;
    this.qlav = 0;
    this.qlmv = 0;
  }

}

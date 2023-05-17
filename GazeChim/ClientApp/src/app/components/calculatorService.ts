import  { Opteon } from './interfaces.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CalculatorService {
  private opteonList !: Opteon [];
  private volume !: number;
  private enappc !: number;

  setOpteonListe (list : Opteon[]){
      this.opteonList = list;
  }

  getOpteonListe(){
    return this.opteonList;
  }

  getVolume(){
    return this.volume;
  }

  setVolume(volume : number){
     this.volume = volume;
  }

  // getEnappc(){
  //   var list = this.getOpteonListe();
  //   var second = list[1];
  //   return this.enappc = this.getVolume()*second.lFL*0.2;
  // }


}

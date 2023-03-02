import { Component, Input, OnInit } from '@angular/core';
import  { TimeElement } from './timeElement.model'

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  //  @Input()
   timeElements: TimeElement[] = [
    { title : "Emetteur", name : "Etablissement de test", adress : "1 Avenue des Roches",passed : true},
    { title : "Transporteur", name : "Etablissement de test", adress : "1 Avenue des Roches",passed : true},
    { title : "Destinataire", name : "Etablissement de test", adress : "1 Avenue des Roches",passed : false},
    { title : "Destinataire", name : "Etablissement de test", adress : "1 Avenue des Roches",passed : false},
   ];

   ngOnInit(){

   }

}

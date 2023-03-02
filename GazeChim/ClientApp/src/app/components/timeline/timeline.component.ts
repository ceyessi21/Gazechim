import { Component, Input, OnInit } from '@angular/core';
import  { TimeElement } from '../timeElement.model'

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  @Input() timeElements!: TimeElement[];


   ngOnInit(){

   }

}

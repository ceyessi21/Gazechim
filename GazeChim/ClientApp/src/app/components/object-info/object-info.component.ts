import { Component, Input } from '@angular/core';
import { faBuildingFlag } from '@fortawesome/free-solid-svg-icons';
import  { Object } from '../interfaces.model'


@Component({
  selector: 'app-object-info',
  templateUrl: './object-info.component.html',
  styleUrls: ['./object-info.component.scss']
})
export class ObjectInfoComponent {
  @Input() title : string = "";
  @Input() object! : Object[];
  @Input() icon = faBuildingFlag;

}

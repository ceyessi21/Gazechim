import { Component, Input } from '@angular/core';
import { faExclamationTriangle, faTimesCircle, faCheckCircle, faInfoCircle  } from '@fortawesome/free-solid-svg-icons'
import { IonIcon } from '@ionic/angular';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  @Input() type : string = "";
  @Input() message : string = "";
  @Input() title : string = "";

  warningIcon = faExclamationTriangle;
  errorIcon = faTimesCircle;
  successIcon = faCheckCircle;
  infoIcon = faInfoCircle;

  constructor() {}

}

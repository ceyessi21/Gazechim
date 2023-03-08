import { Component, Input } from '@angular/core';
import { faExclamationTriangle, faTimesCircle, faCheckCircle, faInfoCircle  } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-loadpage',
  templateUrl: './loadpage.component.html',
  styleUrls: ['./loadpage.component.scss']
})
export class LoadpageComponent {
  @Input() type : string = "success";
  @Input() message : string = "Bordereau à Signer";
  @Input() number : string = "13";
  @Input() link :string ="toggle";

  warningIcon = faExclamationTriangle;
  errorIcon = faTimesCircle;
  successIcon = faCheckCircle;
  infoIcon = faInfoCircle;

  constructor() {}
}

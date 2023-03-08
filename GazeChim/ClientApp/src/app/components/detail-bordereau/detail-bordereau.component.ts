import { Component } from '@angular/core';
import { Object } from '../interfaces.model';
import { faBuildingCircleExclamation, faBuildingUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detail-bordereau',
  templateUrl: './detail-bordereau.component.html',
  styleUrls: ['./detail-bordereau.component.scss']
})
export class DetailBordereauComponent {
  myicon = faBuildingCircleExclamation;
  myicon1 = faBuildingUser;

  object : Object[]= [
    { label: 'Raison Sociale', value: 'Etablissement de test' },
    { label: 'Siret', value: '0000000000012980' },
    { label: 'N° TVA', value: '1234567890123' },
    { label: 'Adresse', value: '1 Avenue des roches, 13001 Marseille' },
    { label: 'Téléphone', value: '0412345678' },
    { label: 'E-mail', value: 'exemple@email.fr' },
    { label: 'Contact', value: 'DUPONT Paul' },
    { label: 'Conditionnement', value: 'BOUTEILLE 1234 (2kg)' },
    { label: 'Poids total', value: '2kg' },
  ];
}

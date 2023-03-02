import { BsffDetenteur } from './bsff-detenteur';
import { BsffOperateur } from './bsff-operateur';

export interface BsffFicheIntervention {
  id: string;
  numero: string;
  weight: number;
  detenteur: BsffDetenteur;
  operateur: BsffOperateur;
  postalCode: string;
}

import { BsffDestination } from './bsff-destination';
import { BsffFicheIntervention } from './bsff-fiche-intervention';
import { BsffPackaging } from './packaging/bsff-packaging';
import { BsffWaste } from './bsff-waste';
import { BsffWeight } from './bsff-weight';
import BsffEmitter from './emission/bsff-emitter';
import { BsffType } from './enums/bsff-type';
import { BsffTransporter } from './transport/bsff-transporter';

export interface Bsff {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isDraft: boolean;
  type: BsffType;
  status: string;
  emitter: BsffEmitter;
  bsffPackagings: BsffPackaging[];
  waste: BsffWaste;
  weight: BsffWeight;
  transporter: BsffTransporter;
  destination: BsffDestination;
  ficheInterventions: BsffFicheIntervention[];
  forwarding: BsffPackaging[];
  grouping: BsffPackaging[];
  repackaging: BsffPackaging[];
}

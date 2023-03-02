import { BsffCompany } from '../bsff-company';
import { BsffTransport } from './bsff-transport';
import { BsffTransporterRecepisse } from './bsff-transporter-recepisse';

export interface BsffTransporter extends BsffCompany {
  Recepisse: BsffTransporterRecepisse;
  Transport: BsffTransport;
}

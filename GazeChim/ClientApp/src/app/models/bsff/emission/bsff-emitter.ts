import { BsffCompany } from '../bsff-company';
import { BsffEmission } from './bsff-emission';

export default interface BsffEmitter extends BsffCompany {
  emission: BsffEmission;
}

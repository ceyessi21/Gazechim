import { BsffCompany } from './bsff-company';
import { Signature } from './signature';

export interface BsffReception extends BsffCompany {
  date: Date;
  signature: Signature;
}

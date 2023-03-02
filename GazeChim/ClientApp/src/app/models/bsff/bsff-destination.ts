import { BsffCompany } from './bsff-company';
import { BsffReception } from './bsff-reception';
import { BsffOperationCode } from './enums/bsff-operation-code';

export interface BsffDestination extends BsffCompany {
  plannedOperationCode: BsffOperationCode;
  reception: BsffReception;
  cap: string;
}

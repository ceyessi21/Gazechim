import { BsffOperationCode } from '../enums/bsff-operation-code';
import { FormCompany } from '../form-company';

export interface BsffPackagingNextDestination {
  plannedOperationCode: BsffOperationCode;
  cap: string;
  company: FormCompany;
}

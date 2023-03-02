import { BsffOperationCode } from '../enums/bsff-operation-code';
import { Signature } from '../signature';
import { BsffPackagingNextDestination } from './bsff-packaging-next-destination';

export interface BsffPackagingOperation {
  code?: BsffOperationCode;
  description?: string;
  date?: Date;
  noTraceability?: boolean;
  nextDestination?: BsffPackagingNextDestination;
  signature?: Signature;
}

import { Bsff } from '../bsff';
import { BsffPackagingAcceptation } from './bsff-packaging-acceptation';
import { BsffPackagingOperation } from './bsff-packaging-operation';
import { BsffPackagingType } from '../enums/bsff-packaging-type';

export interface BsffPackaging {
  id: string;
  bsffId: string;
  numero: string;
  type: BsffPackagingType;
  other?: string;
  name: string;
  volume?: number;
  weight: number;
  acceptation?: BsffPackagingAcceptation;
  operation: BsffPackagingOperation;
  bsff: Bsff;
  nextBsff: Bsff[];
  initialBsff: Bsff[];
}

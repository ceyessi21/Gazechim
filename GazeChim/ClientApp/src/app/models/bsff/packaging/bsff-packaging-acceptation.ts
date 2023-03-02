import { WasteAcceptationStatus } from '../enums/waste-acceptation-status';
import { Signature } from '../signature';

export interface BsffPackagingAcceptation {
  date: Date;
  weight: number;
  status: WasteAcceptationStatus;
  refusalReason: string;
  wasteCode: string;
  wasteDescription: string;
  signature: Signature;
}

import { TransportMode } from '../enums/transport-mode';
import { Signature } from '../signature';

export interface BsffTransport {
  takenOverAt: Date;
  mode: TransportMode;
  plates: string[];
  signature: Signature;
}

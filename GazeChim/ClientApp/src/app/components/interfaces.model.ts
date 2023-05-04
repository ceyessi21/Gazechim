import { float } from "@zxing/library/esm/customTypings";

export interface TimeElement {
    title : string,
    name : string,
    adress : string,
    passed : boolean,
}

export interface Object {
  label : string,
  value : string,
}

export interface Bartemp {
  bar : float,
  temp : float,
  tempAbs: float,
}

export interface Fluide {
  name : string,
  securityGroup : string,
  data: Bartemp[];
}


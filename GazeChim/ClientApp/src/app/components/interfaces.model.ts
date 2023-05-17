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

export interface Opteon {
  nameFluide : string;
  lFL: number;
  m1: number;
  m2: number;
  m3: number;
  qlmv: number;
  qlav: number;
}
export interface CategoryLabel {
    label : string;
}
export interface ClassLabel {
  label : string;
}


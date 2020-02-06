export interface IRegion {
  id?: number;
  regionName?: string;
  regionName2?: string;
}

export class Region implements IRegion {
  constructor(public id?: number, public regionName?: string, public regionName2?: string) {}
}

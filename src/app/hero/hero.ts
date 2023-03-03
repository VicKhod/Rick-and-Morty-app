export interface IHero {
  id: number;
  name: string;
  status: string;
  species?: string;
  type?: string;
  gender?: string;
}
export class Hero{
  constructor(public id: number, public name:string, public status: string){}
}
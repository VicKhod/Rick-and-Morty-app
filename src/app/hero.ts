export interface IHero {
  id: number;
  name: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: {
    url:  string;
    name:  string;
  },
  location?: {
    name:  string;
    url:  string;
  },
  image?: string;
  episode?: [
    string,
    // ...
  ],
}
export class Hero{
  constructor(public id: number, public name:string, public gender: string, public image: string){}
}
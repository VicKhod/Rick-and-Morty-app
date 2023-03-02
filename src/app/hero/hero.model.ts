export class Hero {
    id: number;
    name: string;
    status: string;
    species?: string;
    type?: string;
    gender?: string;

constructor(id: number, name: string, status: string) {
    this.id = id;
    this.name = name;
    this.status = status;
}
}
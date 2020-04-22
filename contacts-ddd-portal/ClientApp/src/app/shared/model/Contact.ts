import { Phone } from './phone';

export class Contact {

  constructor(public id: number,
    public name: string,
    public phones: Phone[]) {}

}

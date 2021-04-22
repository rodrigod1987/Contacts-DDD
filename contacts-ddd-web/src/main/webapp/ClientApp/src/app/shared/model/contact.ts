import { Phone } from './phone';
import { UserAuth } from './user.auth';

export class Contact {

  constructor(public id: number,
    public name: string,
    public phones: Phone[],
    public user: UserAuth) {}

} 

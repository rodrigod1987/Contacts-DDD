import { PhoneType } from '../enums/phone-type';
import { Contact } from './contact';

export class Phone {

  constructor(public id: number,
    public number: number,
    public type: PhoneType,
    public contact: Contact) {}

}

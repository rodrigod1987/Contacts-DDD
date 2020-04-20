import { PhoneType } from '../enums/phone-type';
import { Contact } from './contact';

export interface Phone {
    id: number,
    number: number,
    type: PhoneType,
    contact: Contact
}

import { PhoneType } from '../enums/phone-type';
import { Contact } from './Contact';

export interface Phone {
    id: number,
    number: number,
    type: PhoneType,
    contact: Contact
}

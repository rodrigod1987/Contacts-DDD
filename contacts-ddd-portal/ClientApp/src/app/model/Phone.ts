import { Contact } from './Contact';

export interface Phone {
    id: number,
    number: number,
    contactId: number,
    contact: Contact
}
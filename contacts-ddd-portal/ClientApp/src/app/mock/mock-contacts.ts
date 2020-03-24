import { Contact } from '../model/Contact';

export const CONTACTS: Contact[] = [
    { id: 11, name: 'Dr Nice', phones: [] },
    { id: 12, name: 'Rodrigo Duarte', phones: [
        { id: 1, number: 992366275, contactId: 12, contact: null }
    ] },
    { id: 13, name: 'Bombasto', phones: [] },
    { id: 14, name: 'Celeritas', phones: [] },
    { id: 15, name: 'Magneta', phones: [] },
    { id: 16, name: 'RubberMan', phones: [] },
    { id: 17, name: 'Dynama', phones: [] },
    { id: 18, name: 'Dr IQ', phones: [] },
    { id: 19, name: 'Magma', phones: [] },
    { id: 20, name: 'Tornado', phones: [] }
]
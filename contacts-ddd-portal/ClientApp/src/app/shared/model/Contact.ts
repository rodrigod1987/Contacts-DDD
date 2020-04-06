import { Phone } from './Phone';

export interface Contact {
    id: number,
    name: string,
    phones: Phone[]
}
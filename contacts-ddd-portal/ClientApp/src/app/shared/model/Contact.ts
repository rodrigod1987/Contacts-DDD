import { Phone } from './phone';

export interface Contact {
    id: number,
    name: string,
    phones: Phone[]
}

import { Hasformatter } from '../interfaces/Hasformatter.js';

// Classes
export class Invoice implements Hasformatter {
    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ) {}

    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`
    }
}
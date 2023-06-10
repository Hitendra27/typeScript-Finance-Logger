import { Hasformatter } from '../interfaces/Hasformatter.js';

// Classes
export class Payment implements Hasformatter {
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number,
    ) {}

    format() {
        return `${this.recipient} is owed £${this.amount} from ${this.details}`
    }
}
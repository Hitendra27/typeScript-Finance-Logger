import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { Hasformatter } from './interfaces/Hasformatter';


// let docOne: Hasformatter;
// let docTwo: Hasformatter;

// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'plumbing work'. 200);

// let docs: Hasformatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

// const invOne = new Invoice('Mario', 'Worked on the mario website', 400);
// const invTwo = new Invoice('Luigi', 'Worked on the backend website', 600);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// })




const form = document.querySelector('.new-item-form') as HTMLFormElement;
//console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: Hasformatter;
    if(type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)

    }

    console.log(doc);
});





// // interfaces
// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// }

// const me: IsPerson = {
//     name: 'Jammy',
//     age: 30,
//     speak(text: string): void {
//         console.log(text);
//     },
//     spend(amount: number): number {
//         console.log('I spent', amount);
//         return amount;
//     }
// };

// const greetPerson = (person: IsPerson) => {
//     console.log('hello ', person.name);
// }

// console.log(greetPerson(me));

// console.log(me);

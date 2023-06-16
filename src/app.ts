import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplates.js';
import { Payment } from './classes/Payment.js';
import { Hasformatter } from './interfaces/Hasformatter';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
//console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: Hasformatter;
    if(type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end');  
});

// GENERICS

const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};

}

let docOne = addUID({name: 'yoshi', age: 40});

console.log(docOne.age);

// with interfaces
interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
}

const docThree: Resource<object> = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'shaun' }
}

const docFour: Resource<string[]> = {
    uid: 2,
    resourceName: 'shoppingList',
    data: ['bread', 'milk', 'toilet roll']
}

console.log(docThree, docFour)




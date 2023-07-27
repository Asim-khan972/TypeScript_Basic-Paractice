import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from "./classes/Payment.js";
//// here we implements the interface 
// let docOne : HasFormatter ;
// let docTwo : HasFormatter;
//  docOne = new Invoice('Asim', 'work on the mario website', 250);
// docTwo = new Payment('Asum', 'work on the luigi website', 300);
// //// we made array that only has classes who implement interface 
// let docs: HasFormatter[] =[];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
// invOne.client = 'yoshi';
// invOne.amount = 50;
let invoices = []; // here we create empty array 
invoices.push(invOne);
invoices.push(invTwo); /// push both object in array 
//// put loop on array 
invoices.forEach(inv => {
    console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
let list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
    console.log(doc);
});

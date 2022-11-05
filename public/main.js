import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
const form = document.querySelector('.new-item-form');
const container = document.querySelector(".item-list");
const List = new ListTemplate(container);
// inputs
const typeInput = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let values = [toFrom.value, details.value, amount.valueAsNumber];
    if (typeInput.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    List.render(doc, typeInput.value, 'end');
});

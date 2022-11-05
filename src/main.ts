import { Invoice } from "./classes/Invoice.js"; 
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter";
import { ListTemplate } from "./classes/ListTemplate.js";

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const container = document.querySelector(".item-list") as HTMLUListElement;
const List = new ListTemplate(container);

// inputs
const typeInput = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener('submit', (e: SubmitEvent): void => {
    e.preventDefault();

    let doc: HasFormatter;
    let values: [string, string, number] = [toFrom.value, details.value, amount.valueAsNumber];
    if(typeInput.value === "invoice") {
        doc = new Invoice(...values)
    } else {
        doc = new Payment(...values)
    }

    List.render(doc, typeInput.value, 'end')
})


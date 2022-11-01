const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children)

const typeInput = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener('submit', (e: SubmitEvent): void => {
    e.preventDefault();
    console.log(typeInput.value, toFrom.value, details.value, amount.value)
})

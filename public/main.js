"use strict";
const form = document.querySelector('.new-item-form');
console.log(form.children);
const typeInput = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(typeInput.value, toFrom.value, details.value, amount.value);
});

// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".


const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

const onNameInputChange = (e) => {
  if (e.currentTarget.value === "") {
    nameOutputEl.textContent = "Anonymous";
  } else {
    nameOutputEl.textContent = e.currentTarget.value;
  }
};

nameInputEl.addEventListener("input", onNameInputChange);
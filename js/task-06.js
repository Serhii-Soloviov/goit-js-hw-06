// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст щодо правильної кількості введених символів.
//  -Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
//  -Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const textInputEl = document.querySelector("#validation-input");
const symbolsNumber = Number(textInputEl.dataset.length);
console.log(symbolsNumber);
textInputEl.addEventListener("blur", onInputBlur);

function onInputBlur(e) {
  if (e.currentTarget.value.length === symbolsNumber) {
    e.currentTarget.classList.add("valid");
    e.currentTarget.classList.remove("invalid");
  } else {
    e.currentTarget.classList.add("invalid");
    e.currentTarget.classList.remove("valid");
  }
}

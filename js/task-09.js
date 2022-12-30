//Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.


const changeColorBtnEl = document.querySelector(".change-color");
const colorIndicatorEl = document.querySelector(".color");

changeColorBtnEl.addEventListener("click", onColorChange);

function onColorChange(e) {
  const newColor = getRandomHexColor();

  colorIndicatorEl.textContent = newColor;
  document.body.style.backgroundColor = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
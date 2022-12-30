// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.
//  - Розміри найпершого <div> - 30px на 30px.
//  - Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
//  - Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnCreateEl = document.querySelector("#controls button[data-create");
const btnDestroyEl = document.querySelector("#controls button[data-destroy");
const inputEl = document.querySelector("#controls input");
const boxesEl = document.querySelector("#boxes");
const controlsEl = document.querySelector("#controls");

btnCreateEl.addEventListener("click", onBtnCreateEl);
btnDestroyEl.addEventListener("click", onBtnDestroyEl);

function onBtnDestroyEl() {
  boxesEl.innerHTML = "";
  inputEl.value = "";
}

function onBtnCreateEl() {
  createBoxes(Number(inputEl.value));
}

function createBoxes(amount) {
  let markup = ``;

  for (let i = 0; i < amount; i += 1) {
    markup += `<div style="background-color: ${getRandomHexColor()}"></div>`;
  }

  boxesEl.insertAdjacentHTML("afterbegin", markup);

  const arr = [...boxesEl.children];
  arr.forEach((div, index) => {
    div.style.width = `${30 + 10 * (index + 1)}px`;
    div.style.height = `${30 + 10 * (index + 1)}px`;
  });
}
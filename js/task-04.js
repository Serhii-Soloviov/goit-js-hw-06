// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.



let counterValue = 0;

const counterValueIndicatorEl = document.querySelector("#value");

const decrementBtnEl = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnEl = document.querySelector(
  'button[data-action="increment"]'
);

decrementBtnEl.addEventListener("click", () => {
  counterValue -= 1;
  counterValueIndicatorEl.textContent = counterValue;
});

incrementBtnEl.addEventListener("click", () => {
  counterValue += 1;
  counterValueIndicatorEl.textContent = counterValue;
});

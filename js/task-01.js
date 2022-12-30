// Напиши скрипт, який:

// 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// 2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const ulEl = document.querySelector("#categories");
const amountOfCategories = ulEl.children.length;
console.log(`Number of categories: ${amountOfCategories}`);

const liEl = ulEl.children;
for (let i = 0; i < liEl.length; i += 1) {
  const childrenOfLiEl = liEl[i].children;

  const textContentEl = childrenOfLiEl[0].textContent;
  console.log("Category: ", textContentEl);

  const countOfChildEl = childrenOfLiEl[1].children.length;
    console.log("Elements: ", countOfChildEl);
}

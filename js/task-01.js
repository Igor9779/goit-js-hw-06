// 1) Написати скрипт, який порахує і виведе в консоль кількість категорій в ul#categories,
//  тобто елементів li.item.

const numberOfCategories = document.querySelectorAll('.item').length;
console.log(`Number of categories: ${numberOfCategories}`);

// ******************************************************************
// 2) Для кожного элемента li.item у списку ul#categories,
// знайти і вивести в консоль текст заголовку елемента(тегу < h2 >) і кількість елементів в категорії
// (усіх < li >, вкладених в нього).

const categoryName = document.querySelectorAll('.item');

categoryName.forEach(name => {
    const title = name.firstElementChild.textContent;
    const countItems = name.querySelectorAll('li').length;
    console.log(`Category: ${title} Elements: ${countItems}`);
});
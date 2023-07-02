const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

// Написати скрипт, який для кожного елемента масиву ingredients:

// 1) Створить окремий елемент <li>.
// 2) Обов'язково використати метод document.createElement().
// 3) Додасть назву інгредієнта як його текстовий вміст.
// 4) Додасть елементу клас item.
// 5) Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const listRef = document.querySelector('#ingredients');

  const itemsRef = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add('item');
    return itemEl;
  });

  listRef.append(...itemsRef);
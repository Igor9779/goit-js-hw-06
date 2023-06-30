// Написати скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку
// на button.change - color і виводить значення кольору в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const {bodyRef, btnRef, spanRef} = {
  bodyRef: document.querySelector('body'),
  btnRef: document.querySelector('.change-color'),
  spanRef: document.querySelector('.color'),
};


btnRef.addEventListener('click', onBtnClick);

function onBtnClick() {
  const randomColor = getRandomHexColor();
  bodyRef.style.backgroundColor = randomColor;
  spanRef.textContent = randomColor;
};
// Написати скрипт, який реагує на зміну значення input#font-size-control (подія input)
// і змінює інлайн - стиль span#text, оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRef.addEventListener('input', (event) => {
    const textSize = event.target.value + 'px';
    spanRef.style.fontSize = textSize;
});
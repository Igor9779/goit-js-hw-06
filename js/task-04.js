// Створити змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізувати її значенням 0.
// Додати слухачів кліків до кнопок, всередині яких збільшувати або зменшувати значення лічильника.
// Оновлювати інтерфейс новим значенням змінної counterValue.

const refs = {
    incrementValue: document.querySelector('[data-action="increment"]'),
    decrementValue: document.querySelector('[data-action="decrement"]'),
    value: document.querySelector('#value'),
};

const { incrementValue, decrementValue, value } = refs;

let counterValue = 0;

incrementValue.addEventListener('click', onIncrement);
decrementValue.addEventListener('click', onDecrement);


function onIncrement() {
    value.textContent = counterValue += 1;
};

function onDecrement() {
    value.textContent = counterValue -= 1;
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

  const inputRef = document.querySelector('input');
  const createBtn = document.querySelector('[data-create]');
  const deleteBtn = document.querySelector('[data-destroy]');
  const boxesContainerRef = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
deleteBtn.addEventListener('click', deleteBoxes);

function createBoxes() {
  const amount = Number(inputRef.value);
  const boxes = [];

  for (const item of amount) {
    const box = document.createElement('div');
    const size = 30 + item * 10;
    box.style.width = size + 'px';
    box.style.height = size + 'px';
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  };

  boxesContainerRef.append(...boxes);
};

function deleteBoxes(){
  boxesContainerRef.innerHTML = '';
};
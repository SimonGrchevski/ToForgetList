import './style.css';
import events from './events.js';
import './status.js';

const toDoListWrapper = document.querySelector('.to-do-list-wrap');

class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

let toDoList = [new Task('wash the dishes', false, 5),
  new Task('complete to do list project', false, 1),
  new Task('Watch movie', false, 3),
];

const initializeListWrapper = () => {
  toDoListWrapper.innerHTML = '';
  const li = document.createElement('li');
  const inpWrap = document.createElement('li');
  const inp = document.createElement('input');

  li.innerHTML = 'Todays to do';
  inp.type = 'text';
  inp.className = 'newTask';
  inp.placeholder = 'Add to your list...';
  inpWrap.append(inp);
  toDoListWrapper.append(li, inpWrap);
};

const sortList = () => {
  toDoList = toDoList.sort((a, b) => +a.index - +b.index);
};

const display = () => {
  initializeListWrapper();

  toDoList.forEach((list, i) => {
    const li = document.createElement('li');
    const des = list.description;
    const div = document.createElement('div');
    div.innerHTML = `<input type='checkbox' id=${des} name=${des}>
  <label draggable='true' for = ${des}>${des}</label>`;
    div.draggable = true;
    div.dataset.id = i;
    div.classList.add('can-swap');
    li.append(div);
    toDoListWrapper.append(li);
  });
};

const updateLocalStorage = () => {
  sortList();
  localStorage.setItem('toDoList', JSON.stringify(toDoList));
};

if (JSON.parse(localStorage.getItem('toDoList'))) {
  toDoList = JSON.parse(localStorage.getItem('toDoList'));
}

updateLocalStorage();
display();
events.setDragStart();
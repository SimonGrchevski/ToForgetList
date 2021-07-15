import './style.css';
import events from './events.js';
import status from './status.js';

export const toDoListWrapper = document.querySelector('.to-do-list-wrap');

class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

export let toDoList = [];

if (JSON.parse(localStorage.getItem('toDoList'))) {
  toDoList = JSON.parse(localStorage.getItem('toDoList'));
} else {
  toDoList.push(new Task('wash the dishes', false, 0));
  toDoList.push(new Task('complete to do list project', false, 1));
  toDoList.push(new Task('Watch movie', false, 2));
}

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

export const sortList = () => {
  toDoList = toDoList.sort((a, b) => +a.index - +b.index);
};

export const display = () => {
  initializeListWrapper();

  toDoList.forEach((list) => {
    const li = document.createElement('li');
    const des = list.description;
    const div = document.createElement('div');
    const inp = document.createElement('input');
    inp.type = 'checkbox';
    inp.classList.add('check');
    inp.name = des;
    const label = document.createElement('label');
    label.draggable = true;
    label.textContent = des;
    if (list.completed) {
      inp.checked = true;
      label.classList.add('checked');
    }
    div.append(inp, label);
    div.draggable = true;
    div.dataset.id = list.index;
    div.classList.add('can-swap');
    li.append(div);
    toDoListWrapper.append(li);
  });
  status.addCheckBoxHandlers();
};

export const updateLocalStorage = () => {
  sortList();
  localStorage.setItem('toDoList', JSON.stringify(toDoList));
};

updateLocalStorage();
display();
events.setDragStart();
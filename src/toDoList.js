import Task from './task.js';

export const toDoListWrapper = document.querySelector('.to-do-list-wrap');
export class ToDoList {
  constructor() {
    this.toDoList = [];
  }
}

export const updateToDoList = (toDoList) => {
  if (localStorage.getItem('toDoList') !== null && JSON.parse(localStorage.getItem('toDoList')).length !== 0) {
    toDoList = JSON.parse(localStorage.getItem('toDoList'));
  } else {
    toDoList.push(new Task('task0', false, 0));
    toDoList.push(new Task('task1', false, 1));
    toDoList.push(new Task('task2', false, 2));
  }
  return toDoList;
};

export const sortList = (toDoList) => {
  toDoList.sort((a, b) => +a.index - +b.index);
};

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

export const display = (toDoList) => {
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
    } else {
      inp.checked = false;
    }
    div.append(inp, label);
    div.draggable = true;
    div.dataset.id = list.index;
    div.classList.add('can-swap');
    li.append(div);
    toDoListWrapper.append(li);
  });
};

export const updateLocalStorage = (toDoList) => {
  sortList(toDoList);
  localStorage.setItem('toDoList', JSON.stringify(toDoList));
};
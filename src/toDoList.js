export const toDoListWrapper = document.querySelector('.to-do-list-wrap');
export class ToDoList {
  constructor() {
    this.toDoList = [];
  }
}

export const updateToDoList = (toDoList) => {
  if (localStorage.getItem('toDoList') !== null && JSON.parse(localStorage.getItem('toDoList')).length !== 0) {
    toDoList = JSON.parse(localStorage.getItem('toDoList'));
  }
  return toDoList;
};

export const sortList = (toDoList) => {
  if (toDoList.length !== 0) toDoList.sort((a, b) => +a.index - +b.index);
};

export const editToDoList = (toDoList, index, value) => {
  toDoList[index].description = value;
};

export const deleteToDo = (toDoList, index) => {
  toDoList.splice(index, 1);
  toDoList.forEach((task, i) => {
    task.index = i;
  });
};

export const filterToDo = (toDoList) => {
  toDoList = toDoList.filter((task) => task.completed === false);
  toDoList.forEach((task, i) => {
    task.index = i;
  });
  return toDoList;
};

export const initializeListWrapper = () => {
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
    label.setAttribute('contenteditable', '');
    if (list.completed) {
      inp.checked = true;
      label.classList.add('checked');
    } else {
      inp.checked = false;
    }
    const span = document.createElement('div');
    span.innerHTML = 'delete';
    span.classList.add('material-icons');
    div.classList.add('task');
    div.append(inp, label, span);
    div.draggable = true;
    div.dataset.id = list.index;
    div.classList.add('can-swap');
    li.append(div);
    toDoListWrapper.append(li);
  });
  const buttonWrapper = document.createElement('div');
  buttonWrapper.classList.add('center');
  const button = document.createElement('button');
  button.innerHTML = 'Clear all completed';
  buttonWrapper.append(button);
  toDoListWrapper.append(buttonWrapper);
};

export const updateLocalStorage = (toDoList) => {
  sortList(toDoList);
  localStorage.setItem('toDoList', JSON.stringify(toDoList));
};
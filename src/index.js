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
  new Task('Watch movie', false, 3)
];


sortList = () => {
  toDoList = toDoList.sort((a, b) => a.index - b.index);
}

display = () => {
  toDoList.forEach(list => {
    const li = document.createElement('li');
    li.innerHTML = `<input type='checkbox' id=${list.description} name=${list.description}>
  <label for = ${list.description}>${list.description}</label>`
    toDoListWrapper.append(li);
  })
}

updateLocalStorage = () => {
  sortList();
  localStorage.setItem('toDoList', JSON.stringify(toDoList));
}

addTask = (newTask) => {
  toDoList.push(newTask);
  sortList();
  updateLocalStorage();
}

if (JSON.parse(localStorage.getItem('toDoList'))) {
  toDoList = JSON.parse(localStorage.getItem('toDoList'));
  display();
}

updateLocalStorage();
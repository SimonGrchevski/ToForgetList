const toDoListWrapper = document.querySelector('.to-do-list-wrap');

class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const toDoList = [new Task('wash the dishes', false, 0), new Task('complete to to list project', false, 1)];

console.log(toDoList.length);

toDoList.forEach(list => {
  const li = document.createElement('li');
  li.innerHTML = list.description;
  toDoListWrapper.append(li);
})
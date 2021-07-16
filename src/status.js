import { updateToDoList } from './toDoList.js';

const status = (() => {
  const addCheckBoxHandlers = (toDoList) => {
    [...document.querySelectorAll('.check')].forEach((box) => {
      box.addEventListener('change', () => {
        const toDoListLS = JSON.parse(localStorage.getItem('toDoList'));
        box.nextElementSibling.classList.toggle('checked');
        toDoListLS[box.parentElement.dataset.id].completed = box.checked;
        localStorage.setItem('toDoList', JSON.stringify(toDoListLS));
        updateToDoList(toDoList);
      });
    });
  };

  return { addCheckBoxHandlers };
})();

export default status;
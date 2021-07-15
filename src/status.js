import { toDoList } from './index';
export const status = (() => {

  const addCheckBoxHandlers = () => {
    [...document.querySelectorAll('.check')].forEach((box) => {
      box.addEventListener('change', () => {
        box.nextElementSibling.classList.toggle('checked');
        box.chacked = !box.checked;
        box.parentElement.dataset.id
        toDoList[box.parentElement.dataset.id].completed = box.checked;
        localStorage.setItem('toDoList', JSON.stringify(toDoList));
      })
    })
  }

  return { addCheckBoxHandlers };
})();

export default status;
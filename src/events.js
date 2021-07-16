import { toDoList, sortList, display } from './toDoList.js';

const li = [...document.querySelectorAll('li')];
const events = (() => {

  const updateList = (parent, dragTarget, target, upwards) => {
    if (upwards) {
      parent.insertBefore(dragTarget.parentNode, target.parentNode);
      toDoList[dragTarget.dataset.id].index = toDoList[target.dataset.id].index;
      for (let i = target.dataset.id; i < dragTarget.dataset.id; ++i) {
        toDoList[i].index += 1;
      }
    } else {
      parent.insertBefore(target.parentNode, dragTarget.parentNode);
      toDoList[dragTarget.dataset.id].index = toDoList[target.dataset.id].index;
      for (let i = target.dataset.id; i > dragTarget.dataset.id; --i) {
        toDoList[i].index -= 1;
      }
    }
  };
  const setDragStart = () => {
    let dragTarget;
    let initialY;
    document.addEventListener('drag', (event) => {

    }, false);

    document.addEventListener('dragstart', (event) => {
      event.stopPropagation();
      dragTarget = event.target;
      initialY = event.clientY;
    }, true);

    document.addEventListener('dragover', (event) => {
      event.preventDefault();
    }, false);

    document.addEventListener('drop', (event) => {
      event.stopImmediatePropagation();
      console.log(localStorage);
      if (event.target.classList != 'can-swap') return;
      const parent = document.querySelector('.to-do-list-wrap');
      const { target } = event;
      updateList(parent, dragTarget, target, initialY - event.clientY > 0);
      localStorage.setItem('toDoList', JSON.stringify(toDoList));
      sortList();
      display();
    }, false);
  };

  return { setDragStart };
})();

export default events;
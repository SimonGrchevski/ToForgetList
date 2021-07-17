/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }]
*/
import { sortList, display, updateToDoList } from './toDoList.js';
import status from './status.js';
import crud from './crud.js';

const events = (() => {
  const updateList = (toDoList, parent, dragTarget, target, upwards) => {
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
  const setDragStart = (toDoList) => {
    let dragTarget;
    let initialY;
    document.addEventListener('drag', () => {

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
      if (event.target.classList.contains('can-swap')) {
        const parent = document.querySelector('.to-do-list-wrap');
        const { target } = event;
        toDoList = updateToDoList(toDoList);
        updateList(toDoList, parent, dragTarget, target, initialY - event.clientY > 0);
        sortList(toDoList);
        localStorage.setItem('toDoList', JSON.stringify(toDoList));
        display(toDoList);
        crud.setAddEvent();
        status.addCheckBoxHandlers(toDoList);
        crud.setEditEvent();
        crud.setDeleteEvent();
        crud.setFilterEvent();
      }
    }, false);
  };

  return { setDragStart };
})();

export default events;
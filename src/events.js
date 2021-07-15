import { toDoList } from './index';
import { sortList } from './index';
import { display } from './index';

let li = [...document.querySelectorAll('li')];
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
        console.log(i);
        toDoList[i].index -= 1;
      }
    }

  }
  const setDragStart = () => {

    let dragTarget;
    let initialY;
    document.addEventListener("drag", function(event) {

    }, false);

    document.addEventListener("dragstart", function(event) {
      event.stopPropagation();
      dragTarget = event.target;
      initialY = event.clientY;
      console.log(initialY);
    }, true);

    document.addEventListener("dragover", function(event) {
      event.preventDefault();
    }, false);

    document.addEventListener("drop", function(event) {

      event.stopImmediatePropagation();
      if (event.target.classList != 'can-swap') return;
      let parent = document.querySelector('.to-do-list-wrap');
      let target = event.target;

      updateList(parent, dragTarget, target, initialY - event.clientY > 0)
      sortList();
      display();
      console.log(toDoList);
    }, false);

  }


  return { setDragStart };
})();

export default events;
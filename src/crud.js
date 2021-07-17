/* eslint-disable no-use-before-define */

import Task from './task.js';
import {
  updateToDoList, updateLocalStorage, display, editToDoList, deleteToDo,
} from './toDoList.js';
import status from './status.js';

const crud = (() => {
  let toDoList = [];

  const addNewTask = (task) => {
    toDoList = updateToDoList(toDoList);
    toDoList.push(new Task(task.value, false, toDoList.length));
    task.value = '';
    updateLocalStorage(toDoList);
    display(toDoList);
  };

  const setAddEvent = () => {
    const task = document.querySelector('.newTask');

    task.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && task.value.length > 0) { // && task.value.length > 3
        addNewTask(task);
        status.addCheckBoxHandlers(toDoList);
        setAddEvent();
        setDeleteEvent();
      }
    });
  };

  const editTask = (lbl) => {
    lbl.addEventListener('keyup', () => {
      // let toDoList = [];
      toDoList = updateToDoList(toDoList);
      editToDoList(toDoList, lbl.parentNode.dataset.id, lbl.innerHTML);
      updateLocalStorage(toDoList);
    });
  };

  const setEditEvent = () => {
    [...document.querySelectorAll('label')].forEach((lbl) => {
      editTask(lbl);
    });
  };

  const deleteTask = (btn) => {
    btn.addEventListener('click', () => {
      // let toDoList = [];
      toDoList = updateToDoList(toDoList);
      deleteToDo(toDoList, btn.parentNode.dataset.id);
      updateLocalStorage(toDoList);
      display(toDoList);
      setAddEvent();
      setDeleteEvent();
    });
  };

  const setDeleteEvent = () => {
    [...document.querySelectorAll('.material-icons')].forEach((btn) => {
      deleteTask(btn);
    });
  };

  return { setAddEvent, setEditEvent, setDeleteEvent };
})();

export default crud;
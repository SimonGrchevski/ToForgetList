/* eslint-disable no-use-before-define */

import Task from './task.js';
import {
  updateToDoList, updateLocalStorage, display, editToDoList, deleteToDo, filterToDo,
} from './toDoList.js';
import status from './status.js';

const crud = (() => {
  let toDoList = [];

  const addNewTask = (task) => {
    toDoList = updateToDoList(toDoList);
    toDoList.push(new Task(task.value, false, toDoList.length + 1));
    task.value = '';
    updateLocalStorage(toDoList);
    display(toDoList);
  };

  const setAddEvent = () => {
    const task = document.querySelector('.newTask');

    task.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && task.value.length > 0) {
        addNewTask(task);
        status.addCheckBoxHandlers(toDoList);
        setAddEvent();
        setEditEvent();
        setDeleteEvent();
        setFilterEvent();
      }
    });
  };

  const editTask = (lbl) => {
    lbl.addEventListener('keyup', () => {
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
      toDoList = updateToDoList(toDoList);
      deleteToDo(toDoList, btn.parentNode.dataset.id);
      updateLocalStorage(toDoList);
      display(toDoList);
      status.addCheckBoxHandlers(toDoList);
      setAddEvent();
      setEditEvent();
      setDeleteEvent();
      setFilterEvent();
    });
  };

  const setDeleteEvent = () => {
    [...document.querySelectorAll('.material-icons')].forEach((btn) => {
      deleteTask(btn);
    });
  };

  const setFilterEvent = () => {
    document.querySelector('button').addEventListener('click', () => {
      toDoList = updateToDoList(toDoList);
      toDoList = filterToDo(toDoList);
      updateLocalStorage(toDoList);
      display(toDoList);
      status.addCheckBoxHandlers(toDoList);
      setAddEvent();
      setEditEvent();
      setDeleteEvent();
      setFilterEvent();
    });
  };

  return {
    setAddEvent, setEditEvent, setDeleteEvent, setFilterEvent,
  };
})();

export default crud;
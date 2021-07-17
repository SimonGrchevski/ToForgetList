import './style.css';
import events from './events.js';
import status from './status.js';
import crud from './crud.js';
import {
  ToDoList,
  updateToDoList,
  updateLocalStorage,
  display,
  sortList,
} from './toDoList.js';

const tdl = new ToDoList();
tdl.toDoList = updateToDoList(tdl.toDoList);
sortList(tdl.toDoList);
updateLocalStorage(tdl.toDoList);
display(tdl.toDoList);
status.addCheckBoxHandlers(tdl.toDoList);
events.setDragStart(tdl.toDoList);
crud.setAddEvent();
crud.setEditEvent();
crud.setDeleteEvent();
crud.setFilterEvent();
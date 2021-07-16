import './style.css';
import events from './events.js';
import status from './status.js';

import { updateToDoList, updateLocalStorage, display, sortList } from './toDoList.js';

updateToDoList();
sortList();
updateLocalStorage();
display();
status.addCheckBoxHandlers();
events.setDragStart();
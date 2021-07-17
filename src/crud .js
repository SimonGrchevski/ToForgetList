import Task from "./task.js";
import { updateToDoList, updateLocalStorage, display, editToDoList} from "./toDoList.js";


const crud = (() => {
  
  const addNewTask = (task) => {
    let toDoList = [];

    toDoList = updateToDoList(toDoList);
    
    toDoList.push(new Task( task.value, false, toDoList.length ) );
    task.value = '';
    updateLocalStorage(toDoList);
    display(toDoList);
  }
  const setAddEvent = () => {
    const task = document.querySelector('.newTask');

    task.addEventListener('keypress', (e) =>{
      if (e.key === 'Enter' && task.value.length > 0) // && task.value.length > 3
        addNewTask(task);
    });
  }

  const editTask = (lbl) => {
  //   const oldValue = btn.previousSibling.innerHTML;
  //   let newS = document.createElement('input');
  //   btn.parentNode.replaceChild(newS,btn.previousSibling);
  //   newS.value = oldValue;

        lbl.addEventListener('keyup', (e) => {
          let toDoList = [];
          toDoList = updateToDoList(toDoList);
          editToDoList(toDoList, lbl.parentNode.dataset.id, lbl.innerHTML);
          updateLocalStorage(toDoList);
        });
    
  //   newS.addEventListener('keypress', (e, newS) => {
  //     if (e.key === 'Enter') {
  //       console.log(newS.parrentNode.dataset.id);
  //     }
  //  })
  }

  const setEditEvent = () =>
  {
    [...document.querySelectorAll('label')].forEach((lbl) => {
      editTask(lbl);
    });
  }

  return { setAddEvent, setEditEvent};
})();

export default crud;
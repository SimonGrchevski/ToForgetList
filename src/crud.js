import Task from "./task.js";
import { updateToDoList, updateLocalStorage, display} from "./toDoList.js";


const crud = (() => {
  
  const addNewTask = (task) => {
    let toDoList = [];

    toDoList = updateToDoList(toDoList);
    
    console.log(toDoList);
    toDoList.push(new Task( task.value, false, toDoList.length ) );
    task.value = '';
    updateLocalStorage(toDoList);
    display(toDoList);
    console.log(toDoList);
  }
  const setAddEvent = () => {
    const task = document.querySelector('.newTask');

    task.addEventListener('keypress', (e) =>{
      console.log(task);
      if (e.key === 'Enter' && task.value.length > 3)
        addNewTask(task);
    });
  }

  const editTask = (btn) => {
  //   const oldValue = btn.previousSibling.innerHTML;
  //   let newS = document.createElement('input');
  //   btn.parentNode.replaceChild(newS,btn.previousSibling);
  //   newS.value = oldValue;
    
  //   newS.addEventListener('keypress', (e, newS) => {
  //     if (e.key === 'Enter') {
  //       console.log(newS.parrentNode.dataset.id);
  //     }
  //  })
  }

  const setEditEvent = () =>
  {
    [...document.querySelectorAll('.edit-btn')].forEach((b) => {
      editTask(b);
    });
  }

  return { setAddEvent, setEditEvent};
})();

export default crud;
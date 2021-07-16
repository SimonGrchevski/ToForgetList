const toDoList = JSON.parse(localStorage.getItem('toDoList'));
export const status = (() => {
  const addCheckBoxHandlers = () => {
    [...document.querySelectorAll('.check')].forEach((box) => {
      box.addEventListener('change', () => {
        box.nextElementSibling.classList.toggle('checked');
        toDoList[box.parentElement.dataset.id].completed = box.checked;
        localStorage.setItem('toDoList', JSON.stringify(toDoList));
      });
    });


  };

  return { addCheckBoxHandlers };
})();

export default status;
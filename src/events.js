let li = [...document.querySelectorAll('li')];
const events = (() => {

  const setDragStart = () => {

    let dragTarget;
    document.addEventListener("drag", function(event) {

    }, false);

    document.addEventListener("dragstart", function(event) {
      event.stopPropagation();
      dragTarget = event.target;
    }, true);

    document.addEventListener("dragover", function(event) {
      event.preventDefault();
    }, false);

    document.addEventListener("drop", function(event) {

      event.stopImmediatePropagation();
      if (event.target.classList != 'can-swap') return;
      // let temp = +JSON.stringify(dragTarget.dataset.id);
      // dragTarget.dataset.id = event.target.dataset.id;
      // event.target.dataset.id = temp;
      // [dragTarget.dataset.id, event.target.dataset.id] = [event.target.dataset.id, dragTarget.dataset.id];
      // const text = [event.target.cloneNode(true).innerHTML, dragTarget.cloneNode(true).innerHTML];
      // event.target.innerHTML = text[1];
      // dragTarget.innerHTML = text[0];
      const text = [event.target.cloneNode(true), dragTarget.cloneNode(true)];
      event.target.innerHTML = text[1].innerHTML;
      dragTarget.innerHTML = text[0].innerHTML;
    }, false);

  }


  return { setDragStart };
})();




export default events;
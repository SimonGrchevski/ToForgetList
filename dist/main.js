(()=>{const t=document.querySelector(".to-do-list-wrap");class e{constructor(t,e,o){this.description=t,this.completed=e,this.index=o}}let o=[new e("wash the dishes",!1,5),new e("complete to do list project",!1,1),new e("Watch movie",!1,3)];sortList=()=>{o=o.sort(((t,e)=>t.index-e.index))},display=()=>{o.forEach((e=>{const o=document.createElement("li");o.innerHTML=`<input type='checkbox' id=${e.description} name=${e.description}>\n  <label for = ${e.description}>${e.description}</label>`,t.append(o)}))},updateLocalStorage=()=>{sortList(),localStorage.setItem("toDoList",JSON.stringify(o))},addTask=t=>{o.push(t),sortList(),updateLocalStorage()},JSON.parse(localStorage.getItem("toDoList"))&&(o=JSON.parse(localStorage.getItem("toDoList")),display()),updateLocalStorage()})();
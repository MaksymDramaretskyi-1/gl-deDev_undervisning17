/* 
Kommentar 
for
flere
linjer
*/

// Kommentar for en linje
console.log('Hello!');



/* Steg #1 
  Lager en variabel som lagrer at den henter et element fra HTML med id-navn addTodo 
*/
const addTodo = document.getElementById("addTodo");// En variabel som henter HTML element med #addTodo
console.log(addTodo);

/**/
addTodo.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Button click?");

  /* */
  const todoInput = document.getElementById("todoInput");
  console.log(todoInput);
  const todoInputValue = todoInput.value;
  console.log(todoInputValue);

  /*
  Opprett en «li»-tag, vis den deretter i console.log(), og vis den på siden 
  */
  const todoItem = document.createElement("li");
  console.log(todoItem);
  todoItem.textContent = todoInputValue;

  /* */
  const deleteTodo = document.createElement("button");
  // deleteTodo.textContent = "Slett";
  deleteTodo.className = "listBtnDelete";
  const img = document.createElement("img");
  img.src = "images/trash.png";
  img.alt = " trash";

  deleteTodo.appendChild(img);


  deleteTodo.addEventListener("click", function () {
    todoItem.remove();

  });

   /* */
  const todoDisplay = document.getElementById("todoDisplay");
  console.log(todoDisplay);

  /* */
  todoItem.appendChild(deleteTodo);
  todoDisplay.appendChild(todoItem);


});
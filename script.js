/* 
Kommentar 
for
flere
linjer
*/

// Kommentar for en linje
console.log('Hello!');

function checkInput (){
  const input = document.getElementById("todoInput").value.trim();
  const errorMsg = document.getElementById("errorMessage");

  if(input === ""){
    errorMsg.textContent = "Please, can you check";
    
   } else {
    errorMsg.textContent = "";
   }
}



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
  const div = document.createElement("div");
  div.className = "divStyle"
  
  const todoItem = document.createElement("li");

  console.log(todoItem);
  todoItem.textContent = todoInputValue;
  todoItem.className = "todoItem"
  todoItem.appendChild(div)

  /* */
  const deleteTodo = document.createElement("button");
  const img = document.createElement("img");

  deleteTodo.className = "listBtnDelete";
  img.src = "images/trash.png";
  img.alt = "img-trash";

  deleteTodo.appendChild(img);


  deleteTodo.addEventListener("click", function (deleteTodo) {
    if (todoItem.classList.contains("done")) {
      todoItem.remove();
      
    } else {

      todoItem.classList.add("warning");

      setTimeout(() => {
        todoItem.classList.remove("warning");
      }, 1000);
      
      alert("First mark the task as completed!!");
    }
  });
  

  const doneTodo = document.createElement("button");
  const imgCheck = document.createElement("img");

  doneTodo.className = "listBtnDone";
  imgCheck.src = "images/check-circle.png"
  imgCheck.alt = "img-check-circle"

  doneTodo.appendChild(imgCheck);

  doneTodo.addEventListener("click", function () {
    todoItem.classList.toggle("done"); // Toggles the "done" class
  });

   /* */
  const todoDisplay = document.getElementById("todoDisplay");
  console.log(todoDisplay);

  /* */
  div.appendChild(doneTodo);// "Done" button
  div.appendChild(deleteTodo);// "Delete" button
  // todoItem.appendChild(doneTodo);// "Done" button
  // todoItem.appendChild(deleteTodo);// "Delete" button
  todoDisplay.appendChild(todoItem);

  todoInput.value = "";

});
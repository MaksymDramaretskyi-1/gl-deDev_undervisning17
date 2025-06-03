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


  /* */
  const todoInput = document.getElementById("todoInput");
  const todoInputValue = todoInput.value.trim();
  
  if (todoInputValue === "") {
    todoInput.value = ""; // очищает поле на всякий случай
    todoInput.placeholder = "Please enter a task!";
    todoInput.classList.add("inputError"); // (опционально: красная рамка)
    setTimeout(() => {
      todoInput.placeholder = "Skriv et gjøremål";
      todoInput.classList.remove("inputError");
    }, 2000);
    
    return;
  } else {
    todoInput.placeholder = "Skriv et gjøremål"; // вернуть оригинальный
    todoInput.classList.remove("inputError");
  }
  


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
/* 
Kommentar 
for
flere
linjer
*/

// Kommentar for en linje
console.log('Hello!');


// En variabel som henter HTML element med #addTodo
const addTodo = document.getElementById("addTodo");

//Vi sender resultatet ut til konsollen
console.log(addTodo);


/*En klikkhendelseshåndterer er tilordnet til addTodo-elementet (knappen «Legg til»)*/
addTodo.addEventListener("click", function (event) {
  //Overstyrer standardoppførselen til knappen.
  event.preventDefault();


  //Henter et oppgaveinndataelement og dets verdi uten mellomrom på kantene
  const todoInput = document.getElementById("todoInput");
  const todoInputValue = todoInput.value.trim();

  //Sjekk om en streng er tom
  if (todoInputValue === "") {

    //Hvis feltet er tomt
    todoInput.value = ""; //Rydder feltet uansett

    //Plassholderendringer i advarsel, klasse med feil er lagt til
    todoInput.placeholder = "Please enter a task!";
    todoInput.classList.add("inputError");

    //Etter 2 sekunder returneres plassholderen og designet.
    setTimeout(() => {
      todoInput.placeholder = "Skriv et gjøremål";
      todoInput.classList.remove("inputError");
    }, 2000);
    
    return;

    //Standardverdiene gjenopprettes (hvis det var en feil tidligere).
  } else {
    todoInput.placeholder = "Skriv et gjøremål"; 
    todoInput.classList.remove("inputError");
  }
  

  //En div-wrapper opprettes for kontrollknappene.
  const div = document.createElement("div");
  div.className = "divStyle"
  
  //Et <li>-element opprettes, den inntastede teksten skrives der, og en klasse settes. En div med knapper settes inn i li-en.
  const todoItem = document.createElement("li");
  console.log(todoItem);
  todoItem.textContent = todoInputValue;
  todoItem.className = "todoItem";
  todoItem.appendChild(div);

  /*Slett-knapp
    Knapp med et søppelbøtteikon. Bildet legges til knappen.*/
  const deleteTodo = document.createElement("button");
  const img = document.createElement("img");

  deleteTodo.className = "listBtnDelete";
  img.src = "images/trash.png";
  img.alt = "img-trash";

  deleteTodo.appendChild(img);


  // Installer knappbehandler
  deleteTodo.addEventListener("click", function (deleteTodo) {

    //Hvis oppgaven allerede er merket som fullført (klassen «ferdig»), slettes den.
    if (todoItem.classList.contains("done")) {
      todoItem.remove();
      
    } else {
      //Midlertidig lagt til klassen «warning»
      todoItem.classList.add("warning");

      //Den blir slettet om 1 sekund.
      setTimeout(() => {
        todoItem.classList.remove("warning");
      }, 1000);

      //En advarsel vises.
      alert("First mark the task as completed!!");
    }
  });
  
  //Ferdig-knapp
  const doneTodo = document.createElement("button");
  const imgCheck = document.createElement("img");

  //En knapp med et hakemerke («ferdig»-ikonet) opprettes, og et bilde legges til.
  doneTodo.className = "listBtnDone";
  imgCheck.src = "images/check-circle.png";
  imgCheck.alt = "img-check-circle";
  doneTodo.appendChild(imgCheck);

  /*Ferdig knappbehandler
  Veksler mellom «ferdig»-klassen – markerer eller fjerner merkingen som «ferdig»*/
  doneTodo.addEventListener("click", function () {
    todoItem.classList.toggle("done"); // Toggles the "done" class
    doneTodo.className = "active";
  });

   /*Hente og sende ut en listebeholder
   Henter beholderen der oppgaver skal legges til (f.eks. <ul>). */
  const todoDisplay = document.getElementById("todoDisplay");
  console.log(todoDisplay);

  /*Sette inn knapper og oppgaver 
  Knapper legges til i div-en.
  Hele oppgaven (<li>) settes inn i listen.*/
  div.appendChild(doneTodo);// "Done" button
  div.appendChild(deleteTodo);// "Delete" button
  todoDisplay.appendChild(todoItem);

  //Tømme inndatafeltet. Etter at en oppgave er lagt til, tømmes inndatafeltet.
  todoInput.value = "";
});
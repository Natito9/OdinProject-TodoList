import { addToDoList } from './ToDoListCreator.js'; 

function openNewList() {
    const saveList = document.querySelector("#save-note-button");
    const form = document.querySelector("#form-create-note");
    const newListButton = document.querySelector("#new-list-button"); // Select the new list button
    const dialog = document.querySelector("#new-list-dialog"); // Select the dialog element

    //open new list
    newListButton.addEventListener("click", () => {
        dialog.showModal(); // Open the dialog
    });
   
}

// Call the function to set up event listeners
openNewList();


saveList.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default form submission
    addToDoList(); // Call the function to save the information
});
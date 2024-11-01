import { createCopyOfNewList } from "./classifyBystatus";
//OPEN LIST

export function openNewList() {
   
    const newListButton = document.querySelector("#new-list-button"); 
    const dialog = document.querySelector("#new-list-dialog"); 

    newListButton.addEventListener("click", () => {
        dialog.showModal(); 
        console.log ("new list clicked");
    });  
   
}
openNewList();


//CLOSE LIST
export function closeNewList() {
    const closeListButton = document.querySelector('[data-close-modal]');
    const dialog = document.querySelector("#new-list-dialog"); 

    closeListButton.addEventListener("click",() =>{

        dialog.close();

    });
}



//CLEAR LIST
export function clearInputsNewList() {
    document.getElementById('input-title-note').value = ''; 
    document.getElementById('input-description-note').value = ''; 
}

document.getElementById('clear-note').addEventListener("click", () => {
    clearInputsNewList(); 
});

document.addEventListener("DOMContentLoaded", () => {
    const saveButton = document.getElementById('save-note-button');
    saveButton.addEventListener("click", createCopyOfNewList);
});


import {
  openNewList,
  closeNewList,
  clearInputsNewList
} from "./dialogListEvents.js";
import { createCopyOfNewList } from "./classifyBystatus.js";
import "./styles.css";


  openNewList();
  clearInputsNewList();
  handleSaveList()
  closeNewList()

  
function handleSaveList(event) {

  const saveList = document.querySelector("#save-note-button");
  const dialog = document.querySelector("#new-list-dialog"); 

  saveList.addEventListener("click", (e) => {
    e.preventDefault();
   
    const newToDoList = createNewToDoObject();
    storeToDoObject(newToDoList);
    createCopyOfNewList(e);
    dialog.close();
     console.log("save clicked");
    
  });
}

handleSaveList();

// notes array stored
export const toDoListStorage = [];
// Object constructor
export class ToDoList {
  constructor(title, description, status) {
    this.title = title;
    this.description = description;
    this.status = status.toLowerCase();
  }
}

function storeToDoObject(newToDo) {
  toDoListStorage.push(newToDo);
}

function createNewToDoObject() {
  const title = document.querySelector("#input-title-note").value;
  const description = document.querySelector("#input-description-note").value;
  const status = document.querySelector("#set-status-select").value;

  return new ToDoList(title, description, status);
}

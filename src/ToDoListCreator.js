// notes array where will be stored
const toDoListStorage = [];
// Object constructor
class ToDoList {
    constructor(title, description, status) {
        this.title = title;
        this.description = description;
        this.status = status === "not started";
    }
}

//add note to array
export function addToDoList(){
    // Get values from input fields
    const title = document.querySelector("#input-title-note").value;
    const description = document.querySelector("#input-description-note").value;
    const status = document.querySelector("#list-status").value;

    // Create and add new ToDoList object
    const newToDoList = new ToDoList(title, description, status);
    toDoListStorage.push(newToDoList);
}
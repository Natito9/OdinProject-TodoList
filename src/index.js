// notes array where will be stored
const toDoListStorage = [];
// Object constructor
class ToDoList {
    constructor(title, description, status) {
        this.title = title;
        this.description = description;
        this.status = status.toLowerCase();
    }

    // New method to create a div for the ToDoList
    createDivList() {
        const newToDoList = document.createElement('div');
        newToDoList.setAttribute("data-index", toDoListStorage.length);
        newToDoList.innerHTML = `<h3>${this.title}</h3><p>${this.description}</p>`;
        const containerId = this.getContainerId();
        if (containerId) {
            const container = document.querySelector(`#${containerId}`);
            if (container) {
                container.appendChild(newToDoList);
            } else {
                console.error("Container not found: " + containerId);
            }
        } else {
            console.error("Invalid container ID");
        }
    }

    // New method to get the container ID based on status
    getContainerId() {
        switch (this.status) {
            case "not started":
                return 'container-not-started-list';
            case "in progress":
                return 'container-in-progress-list';
            case "completed":
                return 'container-completed-list';
            default:
                return '';
        }
    }
}

//add note to array
export function addToDoList(){
    // Get values from input fields
    const title = document.querySelector("#input-title-note").value;
    const description = document.querySelector("#input-description-note").value;
    const status = document.querySelector("#set-status-select").value;

    // Create and add new ToDoList object
    const newToDoList = new ToDoList(title, description, status);
    toDoListStorage.push(newToDoList);

}
// function addToDoListId

// Update the sortByStatus function to use the ToDoList class
function sortByStatus(event) {
    event.preventDefault(); // Prevent the default form submission

    const title = document.getElementById('input-title-note').value;
    const description = document.getElementById('input-description-note').value;
    const status = document.getElementById('set-status-select').value;

    const newToDoList = new ToDoList(title, description, status);
    newToDoList.createDivList(); // Create the div for the new ToDoList
    // Clear the form fields after submission
    document.getElementById('form-create-note').reset();
}




/////////////////       EVENTS  NEW LIST  //////////////////
function openNewList() {
   
    const newListButton = document.querySelector("#new-list-button"); 
    const dialog = document.querySelector("#new-list-dialog"); 

    //open new list
    newListButton.addEventListener("click", () => {
        dialog.showModal(); 
        console.log ("button clicked");
    });
   
}

const saveList = document.querySelector("#save-note-button");

// Call the function to set up event listeners
openNewList();




function handleSaveList(event) {
    event.preventDefault(); // Prevent the default form submission
    addToDoList(); 
    closeNewList();
    sortByStatus(event);
    console.log("save clicked");
}

//event listener save button
saveList.addEventListener("click", handleSaveList);





function closeNewList() {
    const modal = document.querySelector('[data-modal]');
    if (modal) {
        modal.close(); 
    }
}

// event listener close button
document.querySelector('[data-close-modal]').addEventListener("click", closeNewList);



function clearInputsNewList() {
    document.getElementById('input-title-note').value = ''; 
    document.getElementById('input-description-note').value = ''; 
}

//event listener clear button
document.getElementById('clear-note').addEventListener("click", clearInputsNewList);
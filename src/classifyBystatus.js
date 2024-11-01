import { toDoListStorage, ToDoList } from "./index.js";

export function createCopyOfNewList(event) {
    event.preventDefault(); // Prevent the default form submission

    const title = document.getElementById('input-title-note').value;
    const description = document.getElementById('input-description-note').value;
    const status = document.getElementById('set-status-select').value;

    const newToDoList = new ToDoList(title, description, status);
    createDivList(newToDoList); // Call createDivList with the newToDoList object
    // Clear the form fields after submission
    document.getElementById('form-create-note').reset();
}

export function createDivList(toDoList) {
    const newToDoList = document.createElement("div");
    newToDoList.setAttribute("data-index", toDoListStorage.length);
    newToDoList.innerHTML = `<h3>${toDoList.title}</h3><p>${toDoList.description}</p>`;
    
    // Call getContainerId with the current status
    const containerId = getContainerId(toDoList.status);

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

// get the container ID based on status
export function getContainerId(status) {
    switch (status) {
        case "not started":
            return "container-not-started-list";
        case "in progress":
            return "container-in-progress-list";
        case "completed":
            return "container-completed-list";
        default:
            return "";
    }
}


let toDoList = [];

// Function to add new task from input field after button is pressed
function addTask() {
    let inputValue = document.querySelector("#input-task").value;
    if (inputValue !== "") {
        let task = document.createElement("li");
        let input = document.createElement("input");
        let text = document.createElement("span");
        let button = document.createElement("button");
        button.setAttribute("onClick", "removeTask(parentNode);")
        button.type = "button";
        button.className = "delete-btn";

        button.innerHTML = "X";
        text.className = 'task';
        text.innerHTML = inputValue;
        input.type = "checkbox";
        input.setAttribute("onClick", "completedTask(this.parentNode);")

        task.appendChild(input);
        task.appendChild(text);
        task.appendChild(button);
        toDoList.push(inputValue);
        updateLocalStorage();

        let list = document.querySelector("#task-list");
        list.appendChild(task);
        document.querySelector("#input-task").value = "";
    }
}

// Function that loads all elements from local storage
function load() {
    toDoList = JSON.parse(localStorage.getItem("tasks")) || [];
    for (let i = 0; i < toDoList.length; i++) {
        let list = document.querySelector("#task-list");
        let text = document.createElement("span");
        let input = document.createElement("input");
        let button = document.createElement("button");
        button.setAttribute("onClick", "removeTask(parentNode);")
        button.type = "button";
        button.className = "delete-btn";
        button.innerHTML = "X";
        input.type = "checkbox";
        input.setAttribute("onClick", "completedTask(this.parentNode);")
        text.className = "task";
        let task = document.createElement("li");
        text.innerHTML = toDoList[i];
        task.appendChild(input);
        task.appendChild(text);
        task.appendChild(button);
        list.appendChild(task);
    }
}

// function that updates local storage
function updateLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(toDoList));
}

// Function that removes task from list and updates local storage
function removeTask(parentNode) {
    let text = parentNode.querySelector(".task").innerHTML;
    parentNode.remove();

    const index = toDoList.indexOf(text);
    if (index > -1) {
        toDoList.splice(index, 1);
    }
    updateLocalStorage();
}

// Function that changes text decoration style if by checkbox value
function completedTask(parentNode) {
    let box = parentNode.querySelector(".task");
    if (box.style.textDecoration === "line-through") {
        box.style.textDecoration = "none";
    } else {
        box.style.textDecoration = "line-through";
    }
}

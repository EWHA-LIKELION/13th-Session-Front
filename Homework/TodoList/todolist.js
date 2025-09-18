const form = document.querySelector(".todo-form");
const todoMessage = document.querySelector(".todo-message");

const init = () => {
    form.addEventListener("submit", addTodoItem);
}

const addTodo = () => {
    form.style.display = (form.style.display === "none") ? "block" : "none";
};

const addTodoItem = (event) => {
    event.preventDefault();
    const todoContent = document.querySelector(".todo-input").value;
    if (todoContent) printTodoItem(todoContent);
};

const printTodoItem = (text) => {
    const li = document.createElement("li");
    const dot = document.createElement("span");
    dot.className = "dot";
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerHTML = text;
    span.addEventListener("click", toggleTodoToDone);
    button.innerHTML = "-";
    button.addEventListener("click", deleteTodoItem);
    li.appendChild(dot);
    li.appendChild(span);
    li.appendChild(button);
    document.querySelector(".todo-list").appendChild(li);
    document.querySelector(".todo-input").value = "";
    checkAllTasksCompleted();
    const completedMessage = document.querySelector(".todo-message .completed");
    if (completedMessage) {
        completedMessage.remove();
    }
};


const deleteTodoItem = (e) => {
    const target = e.target.parentElement;
    document.querySelector(".todo-list").removeChild(target);
    checkAllTasksCompleted();
};


const toggleTodoToDone = (e) => {
    deleteTodoItem(e);
    printDoneItem(e.target.innerText);
};

const printDoneItem = (text) => {
    const li = document.createElement("li");
    const check = document.createElement("span");
    check.className = "check-icon";
    check.innerText = "✓";
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = text;
    span.addEventListener("click", toggleDoneToDo);
    button.innerText = "-";
    button.addEventListener("click", deleteDoneItem);
    li.appendChild(check);
    li.appendChild(span);
    li.appendChild(button);
    document.querySelector(".done-list").appendChild(li);
};


const deleteDoneItem = (e) => {
    const target = e.target.parentElement;
    document.querySelector(".done-list").removeChild(target);
    checkAllTasksCompleted();
};


const toggleDoneToDo = (e) => {
    deleteDoneItem(e);
    printTodoItem(e.target.innerText);
    checkAllTasksCompleted();
};

const checkAllTasksCompleted = () => {
    const todoList = document.querySelector(".todo-list");
    const todoMessage = document.querySelector(".todo-message");
    if (todoList.children.length === 0) {
        if (!document.querySelector(".todo-message.completed")) {
            const message = document.createElement("p");
            message.innerText = "오늘 할일을 모두 마쳤어요!";
            message.classList.add("completed");
            todoMessage.appendChild(message);
        }
        form.style.display = "none";


    } else {
        const completedMessage = document.querySelector(".todo-message.completed");
        if (completedMessage) {
            completedMessage.remove();
        }
    }
};

const showInputField = () => {
    if (todoMessage) {
        todoMessage.innerHTML = '';
    }
    document.querySelector(".todo-input").style.display = 'block';
};

document.querySelector(".todo-header button").addEventListener("click", showInputField);

init();
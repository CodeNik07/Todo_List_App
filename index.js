document.addEventListener("DOMContentLoaded", function () {
    const todoInput = document.getElementById("todo-input");
    const addButton = document.getElementById("add-button");
    const todoList = document.getElementById("todo-list");
    const taskCount = document.getElementById("task-count");

    let id = 1;

    addButton.addEventListener("click", function () {
        const todoText = todoInput.value.trim();

        if (todoText !== "") {
            const todoItem = createTodoItem(todoText);
            todoList.appendChild(todoItem);
            updateTaskCount();
            todoInput.value = "";
        } else {
            alert("Please add task first!!!");
        }
    });

    function createTodoItem(text) {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function () {
            li.classList.toggle("completed");
            updateTaskCount();
        });

        const label = document.createElement("label");
        label.textContent = text;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            li.remove();
            updateTaskCount();
        });

        li.className = "todo-item";
        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(deleteButton);

        return li;
    }

    function updateTaskCount() {
        const completedTasks = document.querySelectorAll(".todo-item.completed").length;
        const totalTasks = todoList.children.length;
        taskCount.textContent = totalTasks - completedTasks;
    }
});



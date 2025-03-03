function addDate() {
if (date.value.trim() === "Montag") {
        const todoItem = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // Wenn die Checkbox abgehakt wird, lösche das Todo
        checkbox.onclick = function () {
            removeTodo(todoItem);
        };

        // Text des Todo-Items hinzufügen
        todoItem.appendChild(checkbox);
        todoItem.appendChild(document.createTextNode(todoField.value));

        montag.appendChild(todoItem);

        date.value = "";
        todoField.value = "";

        saveTodos();
    }
    else if (date.value.trim() === "Dienstag") {
        const todoItem = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // Wenn die Checkbox abgehakt wird, lösche das Todo
        checkbox.onclick = function () {
            removeTodo(todoItem);
        };

        // Text des Todo-Items hinzufügen
        todoItem.appendChild(checkbox);
        todoItem.appendChild(document.createTextNode(todoField.value));

        dienstag.appendChild(todoItem);

        date.value = "";
        todoField.value = "";

        saveTodos();
    }
    else if (date.value.trim() === "Mittwoch") {
        const todoItem = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // Wenn die Checkbox abgehakt wird, lösche das Todo
        checkbox.onclick = function () {
            removeTodo(todoItem);
        };

        // Text des Todo-Items hinzufügen
        todoItem.appendChild(checkbox);
        todoItem.appendChild(document.createTextNode(todoField.value));

        mittwoch.appendChild(todoItem);

        date.value = "";
        todoField.value = "";

        saveTodos();}
    else if (date.value.trim() === "Donnerstag") {
            const todoItem = document.createElement("li");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";

            // Wenn die Checkbox abgehakt wird, lösche das Todo
            checkbox.onclick = function () {
                removeTodo(todoItem);
            };

            // Text des Todo-Items hinzufügen
            todoItem.appendChild(checkbox);
            todoItem.appendChild(document.createTextNode(todoField.value));

            donnerstag.appendChild(todoItem);

            date.value = "";
            todoField.value = "";

            saveTodos();
        }
else if (date.value.trim() === "Freitag") {
    const todoItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Wenn die Checkbox abgehakt wird, lösche das Todo
    checkbox.onclick = function () {
        removeTodo(todoItem);
    };

    // Text des Todo-Items hinzufügen
    todoItem.appendChild(checkbox);
    todoItem.appendChild(document.createTextNode(todoField.value));

    freitag.appendChild(todoItem);

    date.value = "";
    todoField.value = "";

    saveTodos();
}
else if (date.value.trim() === "Samstag") {
    const todoItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Wenn die Checkbox abgehakt wird, lösche das Todo
    checkbox.onclick = function () {
        removeTodo(todoItem);
    };

    // Text des Todo-Items hinzufügen
    todoItem.appendChild(checkbox);
    todoItem.appendChild(document.createTextNode(todoField.value));

    samstag.appendChild(todoItem);

    date.value = "";
    todoField.value = "";

    saveTodos();
}
else if (date.value.trim() === "Sonntag") {
    const todoItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Wenn die Checkbox abgehakt wird, lösche das Todo
    checkbox.onclick = function () {
        removeTodo(todoItem);
    };

    // Text des Todo-Items hinzufügen
    todoItem.appendChild(checkbox);
    todoItem.appendChild(document.createTextNode(todoField.value));

    sonntag.appendChild(todoItem);

    date.value = "";
    todoField.value = "";

    saveTodos();
}


    }

function saveTodos() {
    const todoList = document.getElementById("montag");  // Liste 'montag' holen
    const todos = todoList.innerHTML;
    localStorage.setItem("todos", todos);  // Todos im localStorage speichern
}

function loadTodos() {
    const todoList = document.getElementById("montag");
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos && savedTodos.trim() !== "") {
        todoList.innerHTML = savedTodos;  // Lade die gespeicherten Todos

        // Event-Listener für Checkboxen hinzufügen
        todoList.querySelectorAll("input[type=checkbox]").forEach(checkbox => {
            checkbox.onclick = function () {
                const todoItem = checkbox.parentElement;
                removeTodo(todoItem);
            };
        });
    }
}

function removeTodo(todoItem) {
    todoItem.remove();  // Entferne das Todo
    saveTodos();  // Todos im localStorage speichern
}

// Beim Laden der Seite gespeicherte Todos laden
window.onload = loadTodos;

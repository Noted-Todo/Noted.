let count2 = 0

const checkSound = new Audio("public/124900__greencouch__beeps-18.wav");
const addSound = new Audio("public/654251__strechy__item-pickup-sound.ogg");
const playSound = new Audio("public/443449__citrus_audio__trumpets2.wav");

function addDate() {
    const dayMap = {
        "Montag": montag,
        "Dienstag": dienstag,
        "Mittwoch": mittwoch,
        "Donnerstag": donnerstag,
        "Freitag": freitag,
        "Samstag": samstag,
        "Sonntag": sonntag
    };

    const day = date.value.trim();
    if (dayMap[day]) {
        const todoItem = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const prioritySelect = document.createElement("select");
        prioritySelect.classList.add("select");

        prioritySelect.innerHTML = `
            <option value="keine">❌ Keine</option>
            <option value="low">🟢 Niedrig</option>
            <option value="medium">🟡 Mittel</option>
            <option value="high">🔴 Hoch</option>
        `;

        function updatePriorityClass() {
            todoItem.classList.remove("prio-keine", "prio-low", "prio-medium", "prio-high");
            const selectedValue = prioritySelect.value;
            if (selectedValue === "low") {
                todoItem.classList.add("prio-low");
            } else if (selectedValue === "medium") {
                todoItem.classList.add("prio-medium");
            } else if (selectedValue === "high") {
                todoItem.classList.add("prio-high");
            } else {
                todoItem.classList.add("prio-keine");
            }
        }

        prioritySelect.addEventListener("change", updatePriorityClass);
        updatePriorityClass();

        checkbox.onclick = function () {
            checkSound.play().catch(error => console.log("Audio-Fehler:", error));
            removeTodo(checkbox.parentElement);

            // Priorität aus dem select-Element des todoItem auslesen
            const prioritySelect = checkbox.parentElement.querySelector("select");
            const priority = prioritySelect ? prioritySelect.value : "keine"; // Fallback, falls select nicht gefunden wird
            counterincrease(prioritySelect.value);
        };

        todoItem.appendChild(checkbox);
        todoItem.appendChild(document.createTextNode(todoField.value + " | Priorität: "));
        todoItem.appendChild(prioritySelect);
        dayMap[day].appendChild(todoItem);

        addSound.play().catch(error => console.log("Audio-Fehler:", error));
        todoField.value = "";

        saveTodos();
    }
}

function saveTodos() {
    const todoList = document.getElementById("montag");
    localStorage.setItem("todos", todoList.innerHTML);
    localStorage.setItem("counter-all", count2);

}

function loadTodos() {
    const todoList = document.getElementById("montag");
    const savedTodos = localStorage.getItem("todos");
    const savedCounter2 = localStorage.getItem("counter-all");

    if (savedTodos) {
        todoList.innerHTML = savedTodos;
        todoList.querySelectorAll("input[type=checkbox]").forEach(checkbox => {
            checkbox.onclick = function () {
                checkSound.play().catch(error => console.log("Audio-Fehler:", error));
                removeTodo(checkbox.parentElement);

                // Priorität aus dem select-Element des todoItem auslesen
                const prioritySelect = checkbox.parentElement.querySelector("select");
                const priority = prioritySelect ? prioritySelect.value : "keine"; // Fallback, falls select nicht gefunden wird
                counterincrease(priority);
            };
        });
    }

    // count2 korrekt initialisieren
    if (savedCounter2 !== null) {
        count2 = parseInt(savedCounter2, 10);
    } else {
        count2 = 0;
    }

    // count2 im UI anzeigen
    document.getElementById("counter-all").textContent = count2;
}

function removeTodo(todoItem) {
    setTimeout(() => {
        todoItem.remove();
        saveTodos();
    }, 800)
}

function counterincrease(priority) {
    count2++;
    document.getElementById("counter-all").textContent = count2;
    localStorage.setItem("counter-all", count2);

    // saveTodos(); // Entfernen, da es bereits in removeTodo aufgerufen wird

    if (count2 === 5) {
        alert("Glückwunsch! 5 Aufgaben erledigt 🎉");
        confetti({ particleCount: 1000, spread: 200, origin: { y: 0.6 } });
        playSound.play().catch(error => console.log("Audio-Fehler:", error));
    } else if (count2 === 10) {
        alert("Du bist aber Motiviert! 💪");
        confetti({ particleCount: 1000, spread: 200, origin: { y: 0.6 } });
        playSound.play().catch(error => console.log("Audio-Fehler:", error));
    } else if (count2 === 20) {
        alert("20 Aufgaben! Bleib dran");
        confetti({ particleCount: 1000, spread: 200, origin: { y: 0.6 } });
        playSound.play().catch(error => console.log("Audio-Fehler:", error));
    } else if (count2 === 50) {
        alert("Der ToDo-Prinz! 👑");
        confetti({ particleCount: 10000, spread: 200, origin: { y: 0.6 } });
        playSound.play().catch(error => console.log("Audio-Fehler:", error));
    } else if (count2 === 100) {
        alert("Was ist denn jetz los? Ein neuer ToDo König! 👑👑");
        confetti({ particleCount: 10000, spread: 200, origin: { y: 0.6 } });
        playSound.play().catch(error => console.log("Audio-Fehler:", error));
    } else if (count2 === 1000) {
        alert("Du bist nicht mehr zu stoppen!! 💯💯🔥🔥🔥");
        confetti({ particleCount: 10000, spread: 300, origin: { y: 0.6 } });
        playSound.play().catch(error => console.log("Audio-Fehler:", error));
    }
}


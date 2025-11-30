document.addEventListener('DOMContentLoaded', function() {

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks array from localStorage OR use empty array
    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

    // Save tasks array back to localStorage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Add a new task to the DOM (+ optionally save into localStorage)
    function addTask(taskText = null, save = true) {
        // If no text was passed (normal user input), read from input
        const text = taskText !== null ? taskText : taskInput.value.trim();

        if (text === "") {
            if (taskText === null) {
                alert("Please enter a task.");
            }
            return;
        }

        // Create the <li>
        const listItem = document.createElement('li');

        // Create span for task text
        const textSpan = document.createElement('span');
        textSpan.textContent = text;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Remove task on click
        removeBtn.onclick = function() {
            taskList.removeChild(listItem);

            // Remove from tasks array
            const index = tasks.indexOf(text);
            if (index > -1) {
                tasks.splice(index, 1);
                saveTasks();
            }
        };

        // Append text + button to li
        listItem.appendChild(textSpan);
        listItem.appendChild(removeBtn);

        // Append li to list
        taskList.appendChild(listItem);

        // Save to localStorage (only if save=true)
        if (save) {
            tasks.push(text);
            saveTasks();
        }

        // Clear input only when user actually typed
        if (taskText === null) {
            taskInput.value = "";
        }
    }

    // Load saved tasks from localStorage on page load
    function loadTasks() {
        taskList.innerHTML = "";
        tasks.forEach(function(task) {
            addTask(task, false);  // false prevents duplicating in storage
        });
    }

    // Event listeners
    addButton.addEventListener('click', function() {
        addTask();
    });

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load previous tasks
    loadTasks();
});

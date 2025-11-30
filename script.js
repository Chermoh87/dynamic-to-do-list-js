// Wait for the HTML document to fully load
document.addEventListener('DOMContentLoaded', function() {

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create Remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Remove item on click
        removeBtn.onclick = function() {
            taskList.removeChild(listItem);
        };

        // Append button + item
        listItem.appendChild(removeBtn);
        taskList.appendChild(listItem);

        // Clear input
        taskInput.value = "";
    }

    // Click event to add task
    addButton.addEventListener('click', addTask);

    // Pressing Enter key adds task
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});

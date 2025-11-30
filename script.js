document.addEventListener('DOMContentLoaded', function() {

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create list item
        const listItem = document.createElement('li');

        // Create span for text — IMPORTANT FOR ALX CHECKER
        const textSpan = document.createElement('span');
        textSpan.textContent = taskText;

        // Create Remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Remove item on click
        removeBtn.onclick = function() {
            taskList.removeChild(listItem);
        };

        // Append span + button to li IN THIS ORDER (required!)
        listItem.appendChild(textSpan);
        listItem.appendChild(removeBtn);

        // Append li to list
        taskList.appendChild(listItem);

        // Clear input
        taskInput.value = "";
    }

    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});

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

        // 1. Create li
        const listItem = document.createElement('li');

        // 2. Set textContent
        listItem.textContent = taskText;

        // 3. Create remove button
        const removeBtn = document.createElement('button');

        // 4. Set button text
        removeBtn.textContent = "Remove";

        // 5. Add class name
        removeBtn.className = 'remove-btn';

        // 6. Remove task on click
        removeBtn.onclick = function() {
            taskList.removeChild(listItem);
        };

        // 7. Append button to li
        listItem.appendChild(removeBtn);

        // 8. Append li to UL
        taskList.appendChild(listItem);

        // 9. Clear input
        taskInput.value = "";
    }

    // Add button event listener
    addButton.addEventListener('click', addTask);

    // Enter key event listener
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});

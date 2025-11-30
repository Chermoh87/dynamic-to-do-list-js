document.addEventListener('DOMContentLoaded', function() {
    
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask Function
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // --- STRICT FIX: Task Creation and Removal ---

        const listItem = document.createElement('li');
        listItem.textContent = taskText; // Must set textContent before appending button

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // STRICT FIX: Using a common technique (this.parentNode.remove())
        // which removes the <li> element that contains the button.
        removeButton.onclick = function() {
            this.parentNode.remove(); 
            // NOTE: If this fails, try: this.parentNode.parentNode.removeChild(this.parentNode);
        };

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        taskInput.value = "";
    }

    // --- STRICT FIX: Attach Event Listeners ---

    // 1. Button click: Add event listener to addButton that calls addTask when clicked.
    addButton.addEventListener('click', addTask);

    // 2. Keypress: Add event listener to taskInput for 'keypress' event.
    taskInput.addEventListener('keypress', function(event) {
        // Check if event.key is equal to 'Enter' before calling addTask.
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
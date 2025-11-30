document.addEventListener('DOMContentLoaded', function() {
    
    // Select DOM Elements (Assuming these constants are correctly defined)
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define the addTask function
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return; // Stop function execution
        }

        // --- CORRECTED Task Creation and Removal ---
        
        // 1. Create a new <li> element.
        const listItem = document.createElement('li');
        // Set its textContent to taskText.
        listItem.textContent = taskText;

        // 2. Create a new button element for removing the task.
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // 3. Assign an onclick event to the remove button
        removeButton.onclick = function() {
            // Removes the li element (listItem) from taskList (the <ul>)
            taskList.removeChild(listItem);
        };

        // 4. Append the remove button to the <li> element
        listItem.appendChild(removeButton);
        
        // 5. Append the <li> to taskList.
        taskList.appendChild(listItem);

        // 6. Clear the task input field
        taskInput.value = "";
    }

    // --- CORRECTED Attach Event Listeners ---

    // 1. Add an event listener to addButton that calls addTask when clicked.
    addButton.addEventListener('click', addTask);

    // 2. Add an event listener to taskInput for the 'keypress' event (Enter key).
    taskInput.addEventListener('keypress', function(event) {
        // Check if event.key is equal to 'Enter' before calling addTask.
        if (event.key === 'Enter') {
            addTask();
        }
    });
    
    // Ensure all logic is correctly closed by the DOMContentLoaded bracket:
});
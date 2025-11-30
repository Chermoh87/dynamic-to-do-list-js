// Step 1: Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function() {
    
    // Step 2: Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Step 3: Create the addTask Function
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText === "") {
            // If empty, prompt the user
            alert("Please enter a task.");
            return; // Stop function execution
        }

        // Step 4: Task Creation and Removal

        // Create a new <li> element
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a new button element for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Assign an onclick event to the remove button
        removeButton.onclick = function() {
            // The button removes its parent element (the <li>) from the taskList (the <ul>)
            taskList.removeChild(listItem);
        };

        // Append the remove button to the <li> element
        listItem.appendChild(removeButton);
        
        // Append the <li> to the <ul> taskList
        taskList.appendChild(listItem);

        // Clear the task input field
        taskInput.value = "";
    }

    // Step 5: Attach Event Listeners

    // Add event listener to addButton that calls addTask when clicked
    addButton.addEventListener('click', addTask);

    // Add event listener to taskInput for the 'keypress' event (Enter key)
    taskInput.addEventListener('keypress', function(event) {
        // Check if the pressed key is 'Enter'
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
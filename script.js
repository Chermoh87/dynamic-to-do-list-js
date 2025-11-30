
document.addEventListener('DOMContentLoaded', function() {
    
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Helper function to update Local Storage
    function saveTasksToLocalStorage(tasksArray) {
        localStorage.setItem('tasks', JSON.stringify(tasksArray));
    }
    
    // Task Addition Function (Modified)
    
    // Adjusted addTask
    function addTask(taskText, save = true) {
        
        // 1. Input Validation
        if (!taskText || taskText.trim() === "") {
            if (save) { 
                 alert("Please enter a task.");
            }
            return; 
        }

        // Task Creation and Removal Logic 

        // Create the new <li> element
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create the Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // 2. Implement Task Removal with Local Storage Update
        removeButton.onclick = function() {
            // Remove from DOM
            taskList.removeChild(listItem);
            
            // Remove from Local Storage
            removeTaskFromLocalStorage(taskText);
        };

        // Append elements to the DOM
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
        
        // Clear the input field only if task was added manually
        if (save) {
            taskInput.value = "";
        }

        // 3. Update Task Addition Functionality (Save to Local Storage)
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            saveTasksToLocalStorage(storedTasks);
        }
    }
    
    // Task Removal Helper Function
    
    function removeTaskFromLocalStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        
        // Filter out the task that matches the taskText content
        storedTasks = storedTasks.filter(task => task !== taskText);
        
        // Update Local Storage with the new array
        saveTasksToLocalStorage(storedTasks);
    }
    
    // Loading Tasks Function
    
    // Code for Loading Tasks from Local Storage:
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        
        // Loop through stored tasks and add them to the DOM
        storedTasks.forEach(taskText => {
            // 'false' is passed to prevent saving the task back to Local Storage again
            addTask(taskText, false); 
        });
    }

    // Attach Event Listeners 

    // Event listener for the "Add Task" button click
    addButton.addEventListener('click', function() {
        addTask(taskInput.value.trim(), true);
    });

    // Event listener for the 'keypress' event (Enter key)
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask(taskInput.value.trim(), true);
        }
    });

    // Invoke Load Function: Load tasks when the DOM is ready
    loadTasks();
});
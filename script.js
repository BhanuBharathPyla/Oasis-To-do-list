document.addEventListener("DOMContentLoaded", () => {
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
  
    // Function to add a task
    addTaskBtn.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      if (taskText) {
        addTask(taskText);
        taskInput.value = ""; // Clear the input field
      }
    });
  
    // Function to create and add task element
    function addTask(taskText) {
      const li = document.createElement("li");
  
      // Task text span
      const taskSpan = document.createElement("span");
      taskSpan.textContent = taskText;
      taskSpan.addEventListener("click", () => {
        li.classList.toggle("completed");
      });
  
      // Delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.addEventListener("click", () => {
        li.remove();
      });
  
      li.appendChild(taskSpan);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    }
  });
  
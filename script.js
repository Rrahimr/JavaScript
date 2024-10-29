// Select elements
const taskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Add task function
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  // Create list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Add "Complete" button
  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Add "Remove" button
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  li.appendChild(completeButton);
  li.appendChild(removeButton);
  taskList.appendChild(li);

  // Clear input field
  taskInput.value = "";
}

// Add task on button click
addTaskButton.addEventListener("click", addTask);

// Optional: Add task by pressing "Enter"
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

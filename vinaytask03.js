let taskList = document.getElementById("task-list");

function addTask() {
  let newTaskInput = document.getElementById("new-task");
  let newTaskText = newTaskInput.value.trim();

  if (newTaskText !== "") {
    let newTask = document.createElement("li");
    newTask.innerHTML = `
      <input type="checkbox" class="task-check">
      <span class="task-text">${newTaskText}</span>
      <button type="button" onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(newTask);
    newTaskInput.value = "";
  }
}

function deleteTask(deleteButton) {
  let taskItem = deleteButton.parentNode;
  taskList.removeChild(taskItem);
}
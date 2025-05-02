function addTask() {
    var input = document.getElementById("taskInput");
    var taskText = input.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }
  
    var li = document.createElement("li");
    li.textContent = taskText;
  
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function() {
      li.remove();
    };
  
    li.appendChild(deleteBtn);
  
    document.getElementById("taskList").appendChild(li);
  
    input.value = "";
  }
  
  
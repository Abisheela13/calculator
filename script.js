function addTask() {
   
    const inputField = document.getElementById('taskInput');
    const listContainer = document.getElementById('taskList');

    
    const taskText = inputField.value;

    if (taskText === "") {
        alert("Please type something!");
        return;
    }

    
    const newDiv = document.createElement('div');      // The bubble
    const newSpan = document.createElement('span');    // The text
    const delBtn = document.createElement('button');   // The delete button

    
    newDiv.className = "d-flex justify-content-between align-items-center bg-secondary p-2 px-3 rounded-pill mb-2";
    delBtn.className = "btn btn-danger btn-sm rounded-circle";
    

    newSpan.innerText = taskText;
    delBtn.innerText = "X";

    
    delBtn.onclick = function() {
        newDiv.remove(); 
    };

    
    newDiv.appendChild(newSpan); 
    newDiv.appendChild(delBtn);   
    listContainer.appendChild(newDiv);

    
    inputField.value = "";
}
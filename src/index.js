document.addEventListener("DOMContentLoaded", () => {
  // your code here
    const submit = document.querySelector('form');
    submit.addEventListener("submit", (e) => {
      e.preventDefault()
      DoList()
      submit.reset()
    
  });
  
  function DoList(){
    const input = document.getElementById("new-task-description");
    const Task = document.getElement('li');
    const deleteButton = document.createElement('button');
    Task.textContent = `${input,value}`;
    document.getElementById('task').appendChild(Task);
  
  
    deleteButton.textContent= "DONE";
    Task.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => Task.remove())
  }
  
  
  });

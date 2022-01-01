const newTask = document.querySelector('#new-task-input');
const addTaskBtn =  document.querySelector('.add-task-btn');
const removeTask = document.querySelector('.remove-complete-btn');
const taskTemplate = document.querySelector('#task-template');
const taskList = document.querySelector('.task-list');
let id = 1;

newTask.addEventListener('keyup', (e) => {
  if(e.keyCode === 13 && newTask.value){
    addTask()
  }
});

addTaskBtn.addEventListener('click', () => {
  addTask()
});

function addTask(){
  const taskElement = document.importNode(taskTemplate.content, true);
  const checkbox = taskElement.querySelector('input');
  checkbox.id = id;
  const label = taskElement.querySelector('label')
  label.htmlFor = id;
  label.append(newTask.value);
  taskList.appendChild(taskElement);
  newTask.value = '';
  id++;
}

removeTask.addEventListener('click', () => {
  const tasks = document.querySelectorAll('.task');
  tasks.forEach((task) => {
    const checked = task.querySelector('input').checked;
    if(checked){
      task.remove();
    }
  })
})

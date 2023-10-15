
// import { initTodoListHandlers} from './todoList.js';
// import { renderTasks } from './renderer.js';
// document.addEventListener('DOMContentLoaded', () =>{
//   renderTasks();
//   initTodoListHandlers();
// })

// const onStorageChange = e =>{
//     if(e.key === 'tasksList'){
//         renderTasks();
//     }


// };

// window.addEventListener('storage', onStorageChange);

import { renderTasks } from './render';
import { addTask } from './tasks';
import { saveTasksToLocalStorage, loadTasksFromLocalStorage } from './storage';

const createTaskBtn = document.querySelector('.create-task-btn');
const newTaskText = document.querySelector('.task-input');

createTaskBtn.addEventListener('click', () => {
  const taskText = newTaskText.value.trim();
  if (taskText) {
    const newTask = addTask(taskText);
    renderTasks(loadTasksFromLocalStorage());
    saveTasksToLocalStorage(getTasks());
    newTaskText.value = '';
  }
});


renderTasks(loadTasksFromLocalStorage());
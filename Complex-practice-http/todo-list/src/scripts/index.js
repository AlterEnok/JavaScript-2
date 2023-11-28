import { renderTasks } from './render';
import { addTask, updateTask, getTasks } from './tasks';
import { saveTasksToLocalStorage, loadTasksFromLocalStorage } from './storage';
import { getTasksList } from './tasksGateaway.js';

const createTaskBtn = document.querySelector('.create-task-btn');
const newTaskText = document.querySelector('.task-input');

const saveAndUpdateTasks = () => {
    saveTasksToLocalStorage(getTasks());
    renderTasks(getTasks());
};

createTaskBtn.addEventListener('click', () => {
    const taskText = newTaskText.value.trim();
    if (taskText) {
        addTask(taskText);
        saveAndUpdateTasks();
        newTaskText.value = '';
    }
});

// Load tasks from localStorage on page load
renderTasks(loadTasksFromLocalStorage());

// Update tasks in localStorage when checkbox state changes
document.addEventListener('change', (evt) => {
    if (evt.target.classList.contains('list__item-checkbox')) {
        const taskId = +evt.target.dataset.id;
        const isDone = evt.target.checked;
        updateTask(taskId, isDone);
        saveAndUpdateTasks();
    }
});
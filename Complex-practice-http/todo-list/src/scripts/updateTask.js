// import { renderTasks } from './renderer.js';
// import { getItem, setItem } from './storage.js';
// import { updatedTask, getTasksList } from './tasksGateaway.js';

// export const onToggleTask = e => {
//     const isCheckbox = e.target.classList.contains('list__item-checkbox');

//     if (!isCheckbox) {
//         return;
//     }
//     const taskId = e.target.dataset.id;
//     const tasksList = getItem('tasksList');
//     const { text, createDate } = tasksList
//         .find(task => task.id === taskId);
//     const done = e.target.checked;


//     const updatedTask = {
//         text,
//         createDate,
//         done,
//         finishDate: done ?
//             new Date().toISOString() : null

//     };




//     updatedTask(taskId, updatedTask)
//         .then(() => getTasksList())
//         .then(newTasksList => {
//             setItem('tasksList', newTasksList);
//             renderTasks();
//         });

// };

import { renderTasks } from './renderer.js';
import { updateTaskById } from './tasks.js';

export const onToggleTask = e => {
    const isCheckbox = e.target.classList.contains('list__item-checkbox');

    if (!isCheckbox) {
        return;
    }

    const taskId = e.target.dataset.id;
    const done = e.target.checked;

    const updatedTask = {
        done,
        finishDate: done ? new Date().toISOString() : null
    };

    updateTaskById(taskId, updatedTask)
        .then(() => renderTasks())
        .catch(error => console.error('Error updating task:', error));
};
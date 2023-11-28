// const LOCAL_STORAGE_KEY = 'tasksList';


// const loadTasksFromLocalStorage = () => {
//     const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
//     return savedTasks ? JSON.parse(savedTasks) : [];
// };


// const saveTasksToLocalStorage = () => {
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
// };


// const tasks = loadTasksFromLocalStorage();


// const getTasks = () => tasks;


// const addTask = (text) => {
//     const newTask = {
//         id: tasks.length + 1,
//         text,
//         done: false,
//     };
//     tasks.push(newTask);
//     saveTasksToLocalStorage();
//     return newTask;
// };


// const updateTask = (taskId, isDone) => {
//     const task = tasks.find((t) => t.id === taskId);
//     if (task) {
//         task.done = isDone;
//         saveTasksToLocalStorage();
//     }
// };


// export { getTasks, addTask, updateTask };

import { getTasksList, createTask, updateTask, deleteTask } from './tasksGateaway.js';

let tasks = [];

const getTasks = () => tasks;

const fetchTasks = () => {
    return getTasksList().then(data => {
        tasks = data;
    });
};

const addTask = text => {
    const newTask = {
        text,
        done: false
    };
    return createTask(newTask)
        .then(() => fetchTasks())
        .catch(error => console.error('Error adding task:', error));
};

const updateTaskById = (id, updatedTask) => {
    return updateTask(id, updatedTask)
        .then(() => fetchTasks())
        .catch(error => console.error('Error updating task:', error));
};

const deleteTaskById = id => {
    return deleteTask(id)
        .then(() => fetchTasks())
        .catch(error => console.error('Error deleting task:', error));
};

export { getTasks, addTask, updateTaskById, deleteTaskById, fetchTasks };
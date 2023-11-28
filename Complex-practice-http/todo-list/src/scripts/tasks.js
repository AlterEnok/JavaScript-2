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
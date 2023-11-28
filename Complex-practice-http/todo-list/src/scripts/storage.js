// export const setItem = (key, value) =>{
//     localStorage.setItem(key, JSON.stringify(value));

// };

// export const getItem = key => JSON.parse(localStorage.getItem(key));

const LOCAL_STORAGE_KEY = 'tasksList';

const saveTasksToLocalStorage = (tasksList) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasksList));
};

const loadTasksFromLocalStorage = () => {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedTasks ? JSON.parse(savedTasks) : [];
};

export { saveTasksToLocalStorage, loadTasksFromLocalStorage };
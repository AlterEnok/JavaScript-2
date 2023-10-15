const LOCAL_STORAGE_KEY = 'tasksList';

const tasks = loadTasksFromLocalStorage();

const getTasks = () => tasks;

const addTask = (text) => {
  const newTask = {
    id: tasks.length + 1,
    text,
    done: false,
  };
  tasks.push(newTask);
  return newTask;
};

const updateTask = (taskId, isDone) => {
  const task = tasks.find((t) => t.id === taskId);
  if (task) {
    task.done = isDone;
  }
};

export { getTasks, addTask, updateTask };

// Add the following lines at the end of the file

function saveTasksToLocalStorage() {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
  const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
  return savedTasks ? JSON.parse(savedTasks) : [];
}

// Load tasks from localStorage on module load
tasks.length = 0;
tasks.push(...loadTasksFromLocalStorage());
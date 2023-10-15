const LOCAL_STORAGE_KEY = 'tasksList';


const loadTasksFromLocalStorage = () => {
  const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
  return savedTasks ? JSON.parse(savedTasks) : [];
};


const saveTasksToLocalStorage = () => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
};


const tasks = loadTasksFromLocalStorage();


const getTasks = () => tasks;


const addTask = (text) => {
  const newTask = {
    id: tasks.length + 1,
    text,
    done: false,
  };
  tasks.push(newTask);
  saveTasksToLocalStorage(); 
  return newTask;
};


const updateTask = (taskId, isDone) => {
  const task = tasks.find((t) => t.id === taskId);
  if (task) {
    task.done = isDone;
    saveTasksToLocalStorage(); 
  }
};


export { getTasks, addTask, updateTask };
const tasks = [
    { id: 1, text: 'Buy milk', done: false },
    { id: 2, text: 'Pick up Tom from the airport', done: false },
    { id: 3, text: 'Visit a party', done: false },
    { id: 4, text: 'Visit a doctor', done: true },
    { id: 5, text: 'Buy meat', done: true },
  ];
  
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
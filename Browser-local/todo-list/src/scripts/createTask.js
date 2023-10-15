import { renderTasks, updateTasksInStorage } from './renderer';
import { getItem, setItem } from './storage';

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');
  const text = taskTitleInputElem.value;

  if (!text) {
    return;
  }

  taskTitleInputElem.value = '';
  const tasksList = getItem('tasksList') || [];

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString(),
  };

  const newTasksList = [...tasksList, newTask];
  updateTasksInStorage(newTasksList); // Обновление задач в localStorage.

  renderTasks(newTasksList); // Рендер обновленного списка.
};



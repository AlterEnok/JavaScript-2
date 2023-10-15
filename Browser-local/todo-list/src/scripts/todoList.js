import { onCreateTask } from './createTask';
import { renderTasks } from './renderer';

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task');
  createBtnElem.addEventListener('click', onCreateTask);
};
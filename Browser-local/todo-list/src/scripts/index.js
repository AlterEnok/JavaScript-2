
import { initTodoListHandlers} from './todoList';
import { renderTasks } from './renderer';
document.addEventListener('DOMContentLoaded', () =>{
  renderTasks();
  initTodoListHandlers();
})

const onStorageChange = e =>{
    if(e.key === 'tasksList'){
        renderTasks();
    }


};

window.addEventListener('storage', onStorageChange);
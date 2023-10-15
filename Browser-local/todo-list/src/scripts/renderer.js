// import { getItem } from "./storage"




// const createCheckbox = ({ done, id}) =>{
//     const checkboxElem = document.createElement('input');
//     checkboxElem.setAttribute('type', 'checkbox');
//     checkboxElem.setAttribute('data-id', id);
//     checheckboxElem.checked = done;
//     checkboxElem.classList.add('list__item-checkbox');

//     return checkboxElem;
// }

// const createListItem = ({ text, done, id}) =>{
//     const listItemElem = document.createElement('list')
// }



// export const renderTasks = () =>{
//     const tasksList = getItem('tasksList') || [];

//     listEelem.innerHTML = '';
//     const tasksElems = tasksList
//     .sort(compareTasks)
//     .map(createListItem);

//     listEelem.append(...tasksElems);
// };

import { getItem, setItem } from './storage';

const listElem = document.querySelector('.list');

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ id, text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', String(id));
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.innerHTML = ''; // Очистим список перед рендером.
  listElem.append(...tasksElems);
};

const updateTasksInStorage = (newTasksList) => {
  setItem('tasksList', newTasksList);
};

export { renderTasks, updateTasksInStorage };
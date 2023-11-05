import { getItem } from "./storage"
import { getItem} from './storage';

const listElem = document.querySelector('.list');

const createCheckbox = ({ done, id }) => {
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.setAttribute('data-id', id);
  checkboxElem.checked = done;
  checkboxElem.classList.add('list__item-checkbox');
  return checkboxElem;
};

const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');

  const checkboxElem = createCheckbox({ done, id });

  if (done) {
    listItemElem.classList.add('list__item_done');
  }

  listItemElem.append(checkboxElem, text);
  return listItemElem;
};

export const renderTasks = (tasksList) => {
  listElem.innerHTML = ''; // Clear the existing list
  const tasksElems = tasksList.map(createListItem);
  listElem.append(...tasksElems);
};

// const createCheckbox = ({ done, id}) =>{
//     const checkboxElem = document.createElement('input');
//     checkboxElem.setAttribute('type', 'checkbox');
//     checkboxElem.setAttribute('data-id', id);
//     checheckboxElem.checked = done;
//     checkboxElem.classList.add('list__item-checkbox');

//     return checkboxElem;
// }

// const createListItem = ({ text, done, id}) =>{
//     const listItemElem = document.createElement('list');
//     listItemElem.classList.add('list__item');
//     const checkboxElem = createCheckbox({done, id});
//     if(done){
//       listItemElem.classListadd('list__item_done');
//     }

//     listItemElem.append(checkboxElem, text);

//     return listItemElem;
// }



// export const renderTasks = () =>{
//     const tasksList = getItem('tasksList') || [];

//     listEelem.innerHTML = '';
//     const tasksElems = tasksList
//     .sort(compareTasks)
//     .map(createListItem);

//     listEelem.append(...tasksElems);
// };


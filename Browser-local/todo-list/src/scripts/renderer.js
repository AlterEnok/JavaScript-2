import { getItem } from "./storage"




const createCheckbox = ({ done, id}) =>{
    const checkboxElem = document.createElement('input');
    checkboxElem.setAttribute('type', 'checkbox');
    checkboxElem.setAttribute('data-id', id);
    checheckboxElem.checked = done;
    checkboxElem.classList.add('list__item-checkbox');

    return checkboxElem;
}

const createListItem = ({ text, done, id}) =>{
    const listItemElem = document.createElement('list');
    listItemElem.classList.add('list__item');
    const checkboxElem = createCheckbox({done, id});
    if(done){
      listItemElem.classListadd('list__item_done');
    }

    listItemElem.append(checkboxElem, text);

    return listItemElem;
}



export const renderTasks = () =>{
    const tasksList = getItem('tasksList') || [];

    listEelem.innerHTML = '';
    const tasksElems = tasksList
    .sort(compareTasks)
    .map(createListItem);

    listEelem.append(...tasksElems);
};


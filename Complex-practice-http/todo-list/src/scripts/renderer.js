import { getItem } from "./storage"
import { getItem } from './storage';

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

    const textElem = document.createElement('span');
    textElem.classList.add('list__item_text');
    textElem.textContent = text;

    const deleteBtnElem = document.createElement('button');
    deleteBtnElem.classList.add('list-item__delete-btn');



    listItemElem.append(checkboxElem, textElem, deleteBtnElem);
    return listItemElem;
};

export const renderTasks = (tasksList) => {
    listElem.innerHTML = '';
    const tasksElems = tasksList.map(createListItem);
    listElem.append(...tasksElems);
};
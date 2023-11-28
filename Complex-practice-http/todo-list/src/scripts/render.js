import { getTasks, updateTask } from './tasks';

const listElem = document.querySelector('.list');

const renderTasks = (tasksList) => {
    listElem.innerHTML = '';

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

    listElem.append(...tasksElems);
};

listElem.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('list__item-checkbox')) {
        const taskId = +evt.target.dataset.id;
        const isDone = evt.target.checked;
        updateTask(taskId, isDone);
        renderTasks(getTasks());
    }
});

renderTasks(getTasks());

export { renderTasks };
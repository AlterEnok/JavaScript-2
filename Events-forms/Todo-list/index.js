const tasks = [
  { id: 1, text: 'Buy milk', done: false },
  { id: 2, text: 'Pick up Tom from airport', done: false },
  { id: 3, text: 'Visit party', done: false },
  { id: 4, text: 'Visit doctor', done: true },
  { id: 5, text: 'Buy meat', done: true },
];

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

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// put your code here
const createTaskBtn = document.querySelector('.create-task-btn');
const newTaskText = document.querySelector('.task-input');

const clearTasks = () => (listElem.innerHTML = '');

const addTask = (text) => {
  tasks.push({ id: tasks.length + 1, text, done: false });
};

const checkboxChangeHandler = (evt) => {
  const isCheckbox = evt.target.classList.contains('list__item-checkbox');
  if (!isCheckbox) {
    return;
  }

  const taskData = tasks.find((task) => task.id === +evt.target.dataset.id);
  Object.assign(taskData, { done: evt.target.checked });

  clearTasks();
  renderTasks(tasks);
};

const createTaskBtnHandler = () => {
  if (newTaskText.value) {
    addTask(newTaskText.value);
    clearTasks();
    renderTasks(tasks);
    newTaskText.value = '';
  }
};

const checkButton = document.querySelector('.list');
const createButtun = document.querySelector('.create-task-btn');
checkButton.addEventListener('click', checkboxChangeHandler);
createButtun.addEventListener('click', createTaskBtnHandler);

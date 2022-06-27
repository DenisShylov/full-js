const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: true },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const create = document.querySelector('.create-task-btn');
let inputField = document.querySelector('.task-input');

const addTask = () => {
  listItemElem = inputField.value;
};
create.addEventListener('click', addTask);

const listItemElem = document.querySelector('.list');

const onOff = () => {
  console.log(check.value);
};
const check = document.querySelector('.list__item-checkbox');
check.addEventListener('change', onOff);

const renderTask = (taskList) => {
  taskList.done = onOff;
  const tasksElems = taskList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const createListElem = document.createElement('li');
      createListElem.classList.add('list__item');

      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');

      if (inputField.value) {
        listItemElem = inputField.value;
      }
      if (done) {
        createListElem.classList.add('list__item_done');
      }
      createListElem.append(checkbox, text);
      return createListElem;
    });
  listItemElem.append(...tasksElems);
};

renderTask(tasks);

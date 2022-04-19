'use strict';

const tasks = [
  { text: 'Buy milk', done: true },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: false },
];

const renderTasks = (tasksList) => {
  const taskElem = document.querySelector('.list');

  const tasksListElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li');

      listItemElem.classList.add('list__item');

      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      const checkboxElem = document.createElement('input');
      checkboxElem.setAttribute('type', 'checkbox');
      checkboxElem.checked = done;
      checkboxElem.classList.add('list__item-checkbox');
      listItemElem.append(checkboxElem, text);

      return listItemElem;
    });

  taskElem.append(...tasksListElems);
};

console.log(renderTasks(tasks));

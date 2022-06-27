const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: true },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');

      const checkbox = document.createElement('input');
      checkbox.checked = done;
      checkbox.setAttribute('type', 'checkbox');

      checkbox.classList.add('list__item-checkbox');
      done ? listItemElem.classList.add('list__item_done') : undefined;
      // addTask
      const createElem = document.querySelector('.create-task-btn');
      const inputField = document.querySelector('.task-input');

      const addTask = () => {
        return (tasksElems.innerHTML = `<li class="list__item"><input class= "list__item-checkbox" type= "checkbox">${inputField.value}</li>`);
      };
      createElem.addEventListener('click', addTask);
      //

      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// put your code here

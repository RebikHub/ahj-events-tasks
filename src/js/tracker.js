import Memory from './memory';

export default class Tracker {
  constructor(task, memory) {
    this.task = task;
    this.memory = memory;
  }

  init(input) {
    input.addEventListener('input', this.task.inputValue);
    input.addEventListener('keyup', this.task.inputEnter);
  }

  listCheckboxes(checkboxes) {
    if (checkboxes) {
      for (const i of checkboxes) {
        i.addEventListener('click', () => {
          this.replaceTasks(i);
        });
      }
    }
  }

  replaceTasks(element) {
    const memTasks = this.memory.loadTask();
    const allTasks = document.querySelector('.all-tasks');
    const pinned = document.querySelector('.pinned');
    const elem = element.closest('li');

    if (element.checked === true) {
      element.closest('li').remove();
      document.querySelector('.pinned-text').style = 'display: none';
      pinned.appendChild(elem);
    } else {
      if (pinned.children.length === 2) {
        document.querySelector('.pinned-text').style = null;
      }
      element.closest('li').remove();
      allTasks.appendChild(elem);
    }

    const textTask = elem.textContent;
    memTasks.forEach((item, i) => {
      if (textTask === item.task) {
        memTasks[i].pinned = element.checked;
      }
    });
    this.memory.clearStorage();
    Memory.saveTask(memTasks);
  }

  renderDom(text) {
    const memTasks = this.memory.loadTask();
    const allTasks = document.querySelector('.all-tasks');
    const pinned = document.querySelector('.pinned');

    if (memTasks && memTasks.length !== 0) {
      memTasks.forEach((elem) => {
        if (elem.pinned === true) {
          const li = document.createElement('li');
          const checkbox = document.createElement('input');
          checkbox.setAttribute('type', 'checkbox');
          li.textContent = elem.task;
          checkbox.checked = elem.pinned;
          document.querySelector('.pinned-text').style = 'display: none';
          pinned.appendChild(li);
          li.appendChild(checkbox);
        } else {
          const li = document.createElement('li');
          const checkbox = document.createElement('input');
          checkbox.setAttribute('type', 'checkbox');
          li.textContent = elem.task;
          checkbox.checked = elem.pinned;
          allTasks.appendChild(li);
          li.appendChild(checkbox);
        }
      });
    } else {
      const li = document.createElement('li');
      const checkbox = document.createElement('input');
      const input = document.querySelector('.input-text');
      checkbox.setAttribute('type', 'checkbox');
      li.textContent = text;
      if (text) {
        allTasks.appendChild(li);
        li.appendChild(checkbox);
        input.value = null;
        Memory.saveTask({ task: text, pinned: checkbox.checked });
      }
      this.listCheckboxes(document.querySelectorAll('li > input'));
    }
  }
}

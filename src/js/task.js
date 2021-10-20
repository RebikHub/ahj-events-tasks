import Memory from './memory';
import Tracker from './tracker';

export default class Task {
  constructor() {
    this.newTask = '';
  }

  // renderTask(text) {
  //   const allTasks = document.querySelector('.all-tasks');
  //   const li = document.createElement('li');
  //   const checkbox = document.createElement('input');
  //   const input = document.querySelector('.input-text');
  //   checkbox.setAttribute('type', 'checkbox');
  //   li.textContent = text;
  //   if (this.newTask !== '') {
  //     allTasks.appendChild(li);
  //     li.appendChild(checkbox);
  //     input.value = null;
  //     Memory.saveTask({ task: text, pinned: checkbox.checked });
  //   }
  //   Tracker.listCheckboxes(document.querySelectorAll('li > input'));
  // }

  inputValue(e) {
    this.newTask = e.target.value;
  }

  inputEnter(e) {
    if (e.key === 'Enter' && this.newTask !== '') {
      Tracker.renderDom(this.newTask);
    }
  }
}

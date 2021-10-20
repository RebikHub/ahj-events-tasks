import Task from './task';
import Memory from './memory';
import Tracker from './tracker';

console.log('app started');

const memory = new Memory();
const task = new Task();
const tracker = new Tracker(task, memory);

tracker.renderDom();

tracker.init(document.querySelector('.input-text'));

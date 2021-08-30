const Task = require("./task");

class Tasks {
  _list = {};

  get listArr() {
    const list = [];
    Object.keys(this._list).forEach((key) => {
      const task = this._list[key];
      list.push(task);
    });
    return list;
  }

  constructor() {
    this._list = {};
  }

  createTask( desc = ' ') {
    const task = new Task(desc);
    this._list[task.id] = task;
  }
}

module.exports = Tasks;

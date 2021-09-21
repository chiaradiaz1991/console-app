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

  deleteTask( id = '' ) {

    if ( this._list[id] ) {
        delete this._list[id];
    }

}

  tasksfromArr(tasks = []) {
    try {
      tasks.forEach((task) => {
        this._list[task.id] = task;
      });
    } catch(err) { 
      console.log(err)}
      
    
  }

  createTask(desc = " ") {
    const task = new Task(desc);
    this._list[task.id] = task;
  }

  taskslist() {
    console.log();


    this.listArr.forEach((task, index) => {
      const id = `${index + 1}`.green;

      const { desc, completedTask } = task;

      const isCompleted = completedTask ? "Completed".green : "Pending".red;

      console.log(`${id} ${desc} :: ${isCompleted}`);
    });
  }

  listPendingCompleted(completed = true) {
    console.log();
    let counter = 0;
    this.listArr.forEach((task) => {
      const { desc, completedTask } = task;
      const state = completedTask ? "Completed".green : "Pending".red;
      if (completed) {
        // mostrar completadas
        if (completedTask) {
          counter += 1;
          console.log(
            `${(counter + ".").green} ${desc} :: ${completedTask.green}`
          );
        }
      } else {
        // mostrar pendientes
        if (!completedTask) {
          counter += 1;
          console.log(`${(counter + ".").green} ${desc} :: ${state}`);
        }
      }
    });
  }

  toggleCompleted(ids = []) {
    ids.forEach((id) => {
      const task = this._list[id];
      if (!task.completedTask) {
        task.completedTask = new Date().toISOString();
      }
    });

    this.listArr.forEach((task) => {
      if (!ids.includes(task.id)) {
        this._list[task.id].completedTask = null;
      }
    });
  }
}

module.exports = Tasks;

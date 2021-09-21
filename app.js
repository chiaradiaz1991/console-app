require("colors");
const {
  inquirerMenu,
  pause,
  readInput,
  confirm,
  listTaskDelete,
  showListChecklist,
} = require("./helpers/inquirer");
const Task = require("./models/task");
const Tasks = require("./models/tasks");
const { saveDB, readDB } = require("./helpers/archive");

const main = async () => {
  let opt = "";
  const tasks = new Tasks();
  const tasksDB = readDB();

  if (tasksDB) {
    tasks.tasksfromArr(tasksDB);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await readInput("description:");
        tasks.createTask(desc);
        break;
      case "2":
        tasks.taskslist();
        break;
      case "3":
        tasks.listPendingCompleted(true);
        break;
      case "4":
        tasks.listPendingCompleted(false);
        break;
      case "5":
        const ids = await showListChecklist(tasks.listArr);
        tasks.toggleCompleted(ids);
        break;
      case "6":
        const id = await listTaskDelete(tasks.listArr);
        if (id !== "0") {
          const ok = await confirm("Are you sure?");
          if (ok) {
            tasks.deleteTask(id);
            console.log("Task deleted");
          }
        }
        break;
    }
    saveDB(tasks.listArr);
    await pause();
  } while (opt !== "0");
};

main();

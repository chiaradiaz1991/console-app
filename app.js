require("colors");
const { inquirerMenu, pause, readInput } = require("./helpers/inquirer");
const Task = require("./models/task");
const Tasks = require("./models/tasks");

const main = async () => {
  let opt = "";
  const tasks = new Tasks();

  do {
    opt = await inquirerMenu();

    // const task = new Task('Hello');
    // console.log(task)

    // tasks._list[task.id] = task;

    // console.log(tasks);

    switch (opt) {
      case "1":
        const desc = await readInput("description:");
        tasks.createTask(desc);
        break;
      case "2":
        console.log({tasks})
        console.log(tasks.listArr);
        break;
    }

    await pause();
  } while (opt !== "0");
};

main();

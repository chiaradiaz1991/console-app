require("colors");

const menu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("===========================".green);
    console.log("please select and option".green);
    console.log("===========================\n".green);

    console.log(`${"1.".green} create a task`);
    console.log(`${"2.".green} tasks list`);
    console.log(`${"3.".green} check completed tasks`);
    console.log(`${"4.".green} pending tasks`);
    console.log(`${"5.".green} complete task`);
    console.log(`${"6.".green} delete task`);
    console.log(`${"0.".green} exit\n`);

    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    // read the user answer
    readLine.question("select an option: ", (opt) => {
      readLine.close();
      resolve(opt);
    });
  });
};

const pause = () => {
  return new Promise((resolve) => {
    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    // read the user answer
    readLine.question(`\nPress ${"ENTER".blue} to continue\n`, () => {
      readLine.close();
      resolve();
    });
  });
};

module.exports = {
  menu,
  pause,
};

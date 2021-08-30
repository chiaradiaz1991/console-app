require("colors");
const { inquirerMenu, pause } = require('./helpers/inquirer');

const main = async () => {
  console.clear();
  console.log("hello world");

  let opt = "";

  do {
    opt = await inquirerMenu();
    console.log({ opt });

    await pause();
  } while (opt !== "0");
};

main();

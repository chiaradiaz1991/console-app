require("colors");
const { pause } = require("./helpers/messages");
const { inquirerMenu } = require('./helpers/inquirer');

const main = async () => {
  console.clear();
  console.log("hello world");

  let opt = "";

  do {
    opt = await inquirerMenu();
    console.log({ opt });

    if (opt !== "0") await pause();
  } while (opt !== "0");
};

main();

const inquirer = require("inquirer");
require("colors");

const menuOpts = [
  {
    type: "list",
    name: "option",
    message: "What do you want to do?",
    choices: [
      {
        value: "1",
        name: "1. create task",
      },
      {
        value: "2",
        name: "2. tasks",
      },
      {
        value: "3",
        name: "3. completed tasks",
      },
      {
        value: "4",
        name: "4. pending tasks",
      },
      {
        value: "5",
        name: "5. complete task",
      },
      {
        value: "6",
        name: "6. delete task",
      },
      {
        value: "0",
        name: "0. exit",
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("===========================".green);
  console.log("please select and option".green);
  console.log("===========================\n".green);

  const { option } = await inquirer.prompt(menuOpts);
  return option;
};


const pause = async ()=> {
  const question = [
    {
      type : 'input',
      name: 'enter',
      message: `Press ${'enter'.green} to continue`,

    }
  ]
  console.log("\n");
  await inquirer.prompt(question)
}
module.exports = {
  inquirerMenu,
  pause
};

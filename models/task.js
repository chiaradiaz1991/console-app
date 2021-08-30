const { v4: uuiv4 } = require("uuid");

class Task {
  id = "";
  desc = "";
  completedTask = null;

  constructor(desc) {
    this.id = uuiv4();
    this.desc = desc;
    this.completedTask = null;
  }
}

module.exports = Task;

const fs = require("fs");

const archive = './database/data.json';

const saveDB = ( data ) => {
  fs.writeFileSync(archive, JSON.stringify(data));
};

const readDB = () => {
  if (!fs.existsSync(archive)) {
    return null;
  }

  const info = fs.readFileSync(archive, { encoding: 'utf-8'});
  const data = JSON.parse(info);

  return data;
}

module.exports = {
  saveDB,
  readDB
}
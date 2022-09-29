const fs = require("fs");

const file = "./db/data.json";

const writeDB = (data) => {
  fs.writeFileSync(file, JSON.stringify(data));
};

const readDB = () => {
  if (fs.existsSync(file)) {
    const info = fs.readFileSync(file, { encoding: 'utf-8' });
    if(info) {
      const data = JSON.parse( info );
      return data;
    }
  } else return null;
};

module.exports = { readDB, writeDB };

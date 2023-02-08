const { readFileSync } = require("fs");
const path = "frontend/src/assets/userInfo.json";

function readFromFile() {
  try {
    const jsonString = readFileSync(path);
    const userData = JSON.parse(jsonString);
    console.log(userData);
    return userData;
  } catch (err) {
    console.error(err);
  }
};
module.exports = readFromFile;

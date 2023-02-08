import { writeFile } from 'fs-web';
// const readFromFile = require("./readFromFile");
const path = "frontend/src/assets/userInfo.json";
writeFile(userInfo.json, path).then(function() {
  // All done! File has been saved.
});

// function writeToFile(name, password) {
//   const userData = {
//     name: `${name}`,
//     password: `${password}`,
//   };

//   try {
//     writeFileSync(path, JSON.stringify(userData, null, 2), "utf8");
//     console.log("Data successfully saved");
//   } catch (error) {
//     console.log("An error has occurred ", error);
//   }
// };
// module.exports = writeToFile;

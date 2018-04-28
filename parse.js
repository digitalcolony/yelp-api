// parse yelp.json file (for offline testing)
const fs = require("fs");

fs.readFile("yelp.json", (err, data) => {
  if (err) {
    console.log("Error trying to open file.");
    return;
  }
  obj = JSON.parse(data);
  console.log(obj.alias);
});

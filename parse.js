// parse yelp.json file (for offline testing)
const fs = require("fs");

fs.readFile("match.json", (err, data) => {
  if (err) {
    console.log("Error trying to open file.");
    return;
  }
  obj = JSON.parse(data);
  console.log(obj.businesses[0].id);
});

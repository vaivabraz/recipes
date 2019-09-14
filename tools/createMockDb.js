/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const { profile } = require("./mockData/profile");
const { recipes } = require("./mockData/recipes");

const data = JSON.stringify({ profile, recipes });

const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function(err) {
  err ? console.log(err) : console.log("Mock DB created.");
});

const addDays = require("date-fns/addDays");
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  const date = new Date();
  const afterAddDays = addDays(date, 100);
  response.send(
    `${afterAddDays.getDate()}/${
      afterAddDays.getMonth() + 1
    }/${afterAddDays.getFullYear()}`
  );
});
module.exports = app;

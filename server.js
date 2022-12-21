const express = require("express");
const logger = require("morgan");


const app = express();
const path = require("path");
const port = 8000;

app.use(logger("dev"));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.use(express.static(path.join(__dirname, "dist")));

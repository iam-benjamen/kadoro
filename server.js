const express = require("express");
const logger = require("morgan");
const path = require("path");

const app = express();
const port = 8000;

app.use(logger("dev"));


app.get("/", (req, res) => {
  res.redirect("/auth")
})

app.use(express.static("auth/dist"));
app.use(express.static("public/dist"));


app.get("/auth", (req, res) => {
  res.sendFile(__dirname + "/auth/dist/auth.html");
});

app.get("/kadoro", (req, res) => {
  res.sendFile(__dirname + "/public/dist/index.html");
});

app.use((req, res) => {
  res.sendStatus(404);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


const express = require("express"); //require for importing from express folder
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express(); // obj of the function
dotenv.config();
//get brings data from backend to frontend and serves it

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("server started on PORT", { PORT }));
//listen helps to listen over particular port

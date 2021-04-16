const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/userDb.js");
const Cors = require("cors");

// App Config
const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(Cors());

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

// API endpoints
app.get("/", (req, res) => res.status(200).send("Hello World!"));

app.post("/cards", (req, res) => {
  const dbCard = req.body;

  User.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/cards", (req, res) => {
  User.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// Listener

app.listen(PORT, () => console.log(`listening on localhost: ${PORT}`));

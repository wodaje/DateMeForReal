import express from "express";
import mongoose from "mongoose";
import Users from "./models/userDb.js";
import Cors from "cors";


// App Config
const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(Cors());


// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/userdb",
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

// API endpoints
app.get("/", (req, res) => res.status(200).send("Hello World!"));

app.post("/cards", (req, res) => {
    const dbCard = req.body;

    Users.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});

app.get("/cards", (req, res) => {
    Users.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});

// Listener

app.listen(PORT, () => console.log(`listening on localhost: ${PORT}`));
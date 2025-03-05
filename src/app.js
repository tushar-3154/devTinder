const express = require("express");

const app = express();

app.use("/hello/2", (req, res) => {
    res.send('hello 2')
});

app.use("/hello", (req, res) => {
    res.send('hello')
});

app.use("/test", (req, res) => {
    res.send("test")
});
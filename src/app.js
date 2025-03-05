const express = require("express");

const app = express();

app.get("/user", (req, res) => {
    res.send({ first_name: "tushar", last_name: "solanki" });
})

app.post("/user", (req, res) => {
    res.send("Data successfully saved to the database");
})

app.delete("/user", (req, res) => {
    res.send("Deleted successfully !")
})





//this will match all the HTTP method API calls to /test
app.use("/hello/2", (req, res) => {
    res.send('hello 2')
});

app.use("/hello", (req, res) => {
    res.send('hello')
});

app.use("/test", (req, res) => {
    res.send("test")
});

app.use("/", (req, res) => {
    res.send("namaste tushar")
})

app.listen(4444, () => {
    console.log('Server is successfully listening on port 7777');
});


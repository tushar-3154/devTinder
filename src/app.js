const express = require("express");
require('./config/database')
const app = express();
const db = require('./config/database')
const User = require('./models/user')

app.use(express.json());

app.post('/signup', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        res.send(user);
    }
    catch (err) {
        res.status(400).send("Error saving the user", err.message);
    }

});


app.get("/user", async (req, res) => {
    const userEmail = req.body.emailId;

    try {
        const user = await User.findOne({ emailId: userEmail });

        if (user.length === 0) {
            res.status(404).send("User not found");
        }
        else {
            res.send(user);
        }

    } catch (error) {
        res.status(400).send("Somthing went wrong");
    }

});

app.get("/feed", async (req, res) => {

    try {
        const user = await User.find({})
        res.send(user);
    } catch (error) {
        res.status(400).send("Something went wrong");
    }

})

db().then(() => {
    console.log("Database connection established");
    app.listen(4441, () => {
        console.log('Server is successfully listening on port 7777');
    });
}).catch((err) => {
    console.error("Database cannot connect")
})



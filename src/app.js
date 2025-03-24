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

db().then(() => {
    console.log("Database connection established");
    app.listen(4441, () => {
        console.log('Server is successfully listening on port 7777');
    });
}).catch((err) => {
    console.error("Database cannot connect")
})



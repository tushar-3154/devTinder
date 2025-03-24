const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://tusharsolanki:2RUuttck3ev2lt9Z@tusharnode.gf21j.mongodb.net/devTinder");
};

module.exports = connectDB;

connectDB().then(() => {
    console.log("Database Connected Successfully");
})
    .catch((err) => {
        console.error("Database not connected ")
    })


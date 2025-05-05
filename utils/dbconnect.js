const mongoose = require("mongoose"); // ✅ fixed typo

const connectdb = async () => {
    try {
        const connect = await mongoose.connect("mongodb://localhost:27017/mycontacts");
        console.log("Congratulations! Your DB is connected.");
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectdb; // Don't forget to export if needed

const express = require("express");
const connectdb = require("./utils/dbconnect")
const app = express(); // ✅ Corrected

connectdb();
app.use(express.json());


app.use("/api/user", require("./routers/userroutes"));
app.use("/api/contacts", require("./routers/contactsroutes"));

app.listen(1000, () => {
    console.log("The server started running on port 1000");
});

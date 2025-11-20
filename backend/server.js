require("dotenv/config");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");


// db connection
const { connectDB } = require("./config/db.js");
const detailroutes = require("./routes/detailroutes");

const app = express();
const PORT = process.env.PORT || 5000;

//middlewares
app.use(bodyParser.json());
app.use(cors())

// connect db
connectDB();

// root route
app.get("/", (req, res) => {
    res.send("details server running");
});

app.use("/api/details", detailroutes)

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
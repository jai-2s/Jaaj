const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("Server is running with SNI support"));
app.listen(10000, () => console.log("Listening on port 10000"));

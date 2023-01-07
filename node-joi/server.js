const express = require("express");
const validateBody = require("./validator")
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express()

app.use(bodyparser.json());

const port = 6969

const sendResponse = (req, res)=>{
    res.send({
        "message":"Working"
    })
}

app.get("/", (req, res) => (res.send({
    "status":"Working"
})))

app.post("/", validateBody, sendResponse);

app.listen(port, () => {
    console.log("server is listening on port....", port);
})


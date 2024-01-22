const express = require("express");
const mainRouter = require('./routes/index');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');


app.use("/api/v1", mainRouter);

app.use(cors());
app.use(bodyParser.json()); 

app.listen(3000, () => {
    console.log("listening on port 3000");
});

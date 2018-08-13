const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const contactroutes = require("./routes/contact-routes.js");

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost:27017/people", { useNewUrlParser: true })
.then(() => console.log("Connected to Mongo"))
.catch((err) => console.log(err))

const app = express();

app.use(bodyParser.json());

app.use("/contact", contactroutes);


const port = 5000 || process.env.PORT;

app.listen(port, () => console.log(`Listen to the port of ${port}`))
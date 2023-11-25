const express = require("express")
const app = express()
const bodyParser = require('body-parser');
const urlRouters = require("./routes/urlRouter")
const { connectToMongoDB } = require("./dbConnection");
const URL = require("./models/url");
const { redirectRoute } = require("./controllers/redirectController");


connectToMongoDB("mongodb://localhost:27017/short-url").
then(()=>{
    console.log("MongoDB connection is done")
})

app.use(bodyParser.json());
app.use("/url", urlRouters)
app.use("/:shortId",redirectRoute)


app.listen(8000, ()=>{
    console.log("server is running")
})
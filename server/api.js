var express = require("express");
var mongoClient = require("mongodb").MongoClient;
var cors = require("cors");

var app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var constring = "mongodb://127.0.0.1:27017";

app.get("/users", (req, res) => {
    mongoClient.connect(constring).then(clientObject => {
        var database = clientObject.db("todo");
        database.collection("users").find({}).toArray().then(documents => {
            res.send(documents);
        });
    });
});

app.post("/registeruser", (req, res) => {
    var user = {
        "UserId": req.body.UserId,
        "UserName": req.body.UserName,
        "Password": req.body.Password,
        "Mobile": req.body.Mobile
    };
    mongoClient.connect(constring).then(clientObject => {
        var database = clientObject.db("todo");
        database.collection("users").insertOne(user).then(() => {
            res.send("User registered");
        });
    });
});

app.listen(4040, () => {
    console.log(`Server started: http://127.0.0.1:4040`);
});

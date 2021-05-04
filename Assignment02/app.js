const express = require("express");

let app = express();
    app.use(express.urlencoded({extended: true}));
    app.use(express.static("public"));
    app.set("view engine", "ejs");


app.get("/", (req, res)=> res.render("pages/index"));

app.get("/myForm", (req, res) => res.render("pages/myForm"));

app.post("-something-", (req, res) => {
    // Add your implementation here 
});

app.get("-something-", (req, res) => {
    // Add your implementation here
});

app.get("-something-", (req, res) => {
    // Add your implementation here
});

app.listen(3000);
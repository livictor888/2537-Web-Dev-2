const express = require("express");

let app = express();
    app.use(express.urlencoded({extended: true}));
    app.use(express.static("public"));
    app.set("view engine", "ejs");


app.get("/", (req, res)=> res.render("pages/index"));

app.get("/myForm", (req, res) => res.render("pages/myForm"));

app.post("/myForm", (req, res) => {
    if (req.body.items) {
        let items = req.body.items.split(",");  // items is an array of user inputs separated by commas
        res.render("pages/result", {items: items});  // render the page "pages/result" with the json "items"
    } else {
        res.send("No items found.");
    }
});

app.get("/myListQueryString", (req, res) => {
    let items = [req.query["item1"], req.query["item2"]];  // look for "item1" and "item2" in the URL
    res.render("pages/result", {items: items}); // render the page "pages/result" with the json "items"
});


app.get("/myList/:item1/:item2", (req, res) => {
    let items = [req.params.item1, req.params.item2]; // look for "item1" and "item2" as a param in the URL
    res.render("pages/result", {items: items}); // render the page "pages/result" with the json "items"
});

app.listen(3000);
const express = require("express");
const Item = require("./models/itemsModel");


let mongoose = require('mongoose');
mongoose.connect('mongodb+srv://victor:bcit@cluster0.aaqg9.mongodb.net/test');

let db = mongoose.connection;
db.once('open', function() {
    console.log('Connected successfully');
})


let app = express();
    app.use(express.urlencoded({extended: true}));
    app.use(express.static("public"));
    app.set("view engine", "ejs");


// Show the main page and list of items
app.get("/", (req, res)=> {
    Item.find()
         .then(function (result) {
             res.render("pages/index", {items: result})
         })
         .catch((error) => res.send(error));
});


// Go to the myForm page
app.get("/myForm", (req, res) => res.render("pages/myForm"));


// Write items to the database
app.post("/myForm", (req, res) => {
    //console.log(req.body.items);
    if (req.body.items) {  // if the form was filled in
        req.body.items.forEach(element => {
            let item = new Item({name: element});
            item
                .save()
                .then((result) => {
                    console.log("database received some items");
                    res.send("ok");
                })
                .catch((error) => console.log(error));
        });
    }
});


// Delete an item
app.put("/delete", (req, res) => {
    //console.log(req.body.item);
    Item.deleteOne({ name: req.body.item })
        .then((result) => {
            console.log("deleted an item");
            res.send("ok");
        })
        .catch((error) => console.log(error));

});


// Update an item
app.put("/update", (req, res) => {
    Item.updateOne({ name: req.body.itemToReplace }, { name: req.body.itemToReplaceWith})
        .then((result) => {
            console.log("updated an item");
            res.send("ok");
        })
        .catch((error) => console.log(error));
});


app.listen(3000);
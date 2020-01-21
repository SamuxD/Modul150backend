const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8015");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

db.defaults({
    products: [
        {
            "id": 1,
            "name": "Airbus A320NEO",
            "price": 111,
            "image": "https://res.cloudinary.com/dza5jiplu/image/upload/v1579548936/modul150/a320neo.jpg",
            "category": "Short haul"
        },
        {
            "id": 2,
            "name": "Airbus A330NEO",
            "price": 300,
            "image": "https://res.cloudinary.com/dza5jiplu/image/upload/v1579550784/a330neo.jpg",
            "category": "Long haul"
        },      
        {       
            "id": 3,
            "name": "Airbus A350",
            "price": 320,
            "image": "https://res.cloudinary.com/dza5jiplu/image/upload/v1579550715/a359.jpg",
            "category": "Long haul"
        },      
        {       
            "id": 4,
            "name": "Airbus A380",
            "price": 450,
            "image": "https://res.cloudinary.com/dza5jiplu/image/upload/v1579549287/a380.jpg",
            "category": "Long haul"
        },
        {
            "id": 5,
            "name": "Boeing 737",
            "price": 120,
            "image": "https://res.cloudinary.com/dza5jiplu/image/upload/v1579549214/modul150/b737.jpg",
            "category": "Short haul"
        },      
        {       
            "id": 6,
            "name": "Boeing 777",
            "price": 440,
            "image": "https://res.cloudinary.com/dza5jiplu/image/upload/v1579549106/modul150/b777.jpg",
            "category": "Long haul"
        },
        {
            "id": 7,
            "name": "Boeing 747-8I",
            "price": 415,
            "image": "https://res.cloudinary.com/dza5jiplu/image/upload/v1579550570/b748.jpg",
            "category": "Long haul"
        },
        {
            "id": 8,
            "name": "Boeing 747F",
            "price": 420,
            "image": "https://res.cloudinary.com/dza5jiplu/image/upload/v1579550632/b748f.jpg",
            "category": "Freight"
        }
    ]
}).write();


app.get('/getAllProducts', function (request, response) {
    response.status(200).json(db.get("products").value());
});


app.listen(8080, function () {
    console.log('app listening on port 8080!');
});
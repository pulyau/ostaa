/**
 * Author: Abrorjon Asralov, Pulat Uralov
 * Class: CSC337
 * Purpose: This JS file is to hold the server side of the website
 * and it uses express, promises, mongoose to create the server side
 * and DB side using MongoDB
 */
// Initializing required modules: mongoose, express, body-express,
// and also initializing the port 80
const mongoose = require('mongoose');
const bp = require('body-parser')
const express = require("express");
const app = express();
const port = 80;

// Seeting up the databse using mongoose and mongoDB
const db  = mongoose.connection;
const mongoDBURL = 'mongodb://127.0.0.1/ostaaItems';
mongoose.connect(mongoDBURL, { useNewUrlParser: true });
db.on('error', () => { console.log('MongoDB connection error:') });

// Load public_html using express
app.use(express.static('public_html'));

// -----------------Schema Section-----------------
var Schema = mongoose.Schema;

// Creating a new schema for users
var userSchema = new Schema({
  username: String,
  password: String,
  listings: Array,
  purchases: Array,
});
var User = mongoose.model('User', userSchema );   

// Creating a new schema for items
var itemSchema = new Schema({
  title: String,
  description: String,
  image: String,
  price: Number,
  stat: String
});
var Item = mongoose.model('Item', itemSchema);

// Using json 
app.use(bp.json());
// ----------------------------REQUEST SECTION----------------------------
// POST method. Adds a new user with username and password and adds to the database
app.post('/add/user', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let p = User.find({username: username}).exec()
  p.then((result) => {
    // Checks if the user already exists
    if (result.length != 0) {
      res.end("USER ALREADY EXISTS");
    } else {
      let user = new User({username: username, password: password, listings: [], purchases: []});
      user.save();
      res.end('USER SUCCESSFULLY SAVED');
    }
  }).catch((err) => {
    res.end("DATABASE SAVE ERROR");
  })
  
});

// POST method. Adds a new item to the databse
// INCOMPLETE
app.post('/add/item', (req, res) => {
  res.end('Got the name');
});

// GET method. Returns the json file containing all the users
app.get('/get/users', function (req, res) {
  let p = User.find({}).exec();
  p.then((documents) => {
    res.end(JSON.stringify(documents));
  });
});

// Listening to port 80
app.listen(port, ()=>{console.log(`Success!!!`)});
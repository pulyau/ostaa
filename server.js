/**
 * Author: Abrorjon Asralov, Pulat Uralov
 * Class: CSC337
 * Purpose: This JS file is to hold the server side of the website
 * and it uses express, promises, mongoose to create the server side
 * and DB side using MongoDB
 */
const mongoose = require('mongoose');
const bp = require('body-parser')
const express = require("express");
const app = express();
const port = 80;

//DB stuff
const db  = mongoose.connection;
const mongoDBURL = 'mongodb://127.0.0.1/ostaaItems';
mongoose.connect(mongoDBURL, { useNewUrlParser: true });
db.on('error', () => { console.log('MongoDB connection error:') });

app.use(express.static('public_html'));

var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
  password: String,
});

var User = mongoose.model('User', userSchema );   

app.use(bp.json());

app.post('/add/user', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let user = new User({username: username, password: password});
  user.save();
  res.end('Got the name');
});


app.listen(port, ()=>{console.log(`Success!!!`)});
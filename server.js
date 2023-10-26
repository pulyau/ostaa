/**
 * Author: Abrorjon Asralov, Pulat Uralov
 * Class: CSC337
 * Purpose: This JS file is to hold the server side of the website
 * and it uses express, promises, mongoose to create the server side
 * and DB side using MongoDB
 */

const express = require("express");
const app = express();
const port = 80;

app.use(express.static('public_html'));

app.listen(port, ()=>{console.log(`Success!!!`)});
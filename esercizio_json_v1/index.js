const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

let port = 5000;

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/login', function(req, res) {
  res.sendFile(path.join(__dirname + '/views/login.html'));
});

app.get('/version', function(req, res) {
  res.sendFile(path.join(__dirname + '/views/version.html'));
});

app.get('/form', function(req, res) {
  res.sendFile(path.join(__dirname + '/views/input_form1.html'));
});

app.get('/chat', function(req, res) {
  res.sendFile(path.join(__dirname + '/views/chat.html'));
});

let jsonData = require('./data/chat.json');
// Parsing JSON e print message
for (let x in jsonData) {
	console.log("ID: " + jsonData[x].id + " - Nome: " + jsonData[x].nickname + " - Messaggio: " + jsonData[x].message);
}

app.listen(port, function(req, res) {
  console.log('Server listening on Port ' + port);
});

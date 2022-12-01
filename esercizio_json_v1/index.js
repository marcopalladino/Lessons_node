const express=require('express')
const app=express()
const fs=require('fs')
let path=require('path')
let bodyParser=require('body-parser')
let jsonData=require('./data/chat.json')

let Port =5000

app.use(bodyParser.urlencoded({extended:false}))
app.get('/',function(req,res){

  res.sendFile(__dirname+"/index.html")
  
})
app.get('/version', function(req,res){

  res.send(" version 0.1 ")
})
app.get('/login', function(req,res){

  res.send(" version 0.1 ")
})

app.get('/chat', function(req,res){
  for (let x in jsonData) {
  	res.write("ID: " + jsonData[x].id + " - Nome: " + jsonData[x].nickname + " - Messaggio: " + jsonData[x].message + "\n");
  }
  res.end();
})

app.listen(Port, function(req,res){
 console.log("server listening on "+Port)
 
})

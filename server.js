// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.
function myFunction1() {
document.getElementById("demo").innerHTML = "JESUS IS KING!!!!";
}
// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/sample", function(request, response) {
  response.sendFile(__dirname + "/views/sample.html");
});

app.get("/aboutme", function(request, response) {
  response.sendFile(__dirname + "/views/aboutme.html");
});

app.get("/index", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/jesus", function(request, response) {
  response.sendFile(__dirname + "/views/jesus.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

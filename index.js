var express = require('express');
var server = express();
var jj = {
  "full-name": "Jose Julio Figueiredo Junior",
  "description": "He THE guy!",
  "pets": [
    {
      "name": "Arya",
      "color": "white",
      "kind": "dog"
    }
  ],
  "favorites": {
    "color": "blue",
    "number": 25,
    "sport": "soccer",
    "hobbie": "MTB",
    "video": "https://www.youtube.com/watch?v=buGVXyYyqXw"
  }
};


server.get('/', function (request, response) {
  response.send("Go to /jj to find out more about me");
});

server.get('/jj', function (request, response) {
  response.json(jj);
});


server.get('*', function (request, response) {
  response.status(400);
  response.send("ERROR!!");
});

server.listen(8899);

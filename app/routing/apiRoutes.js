//this file allows our server to get/post  api information from/to the JSON object saved in friends.js
var friendArray = require("../data/friends");
var path = require('path');

//exporting these routes to be read in our server.js
module.exports = function(app) {
// GET function that will parse the JSON data from the exported friendArray
  app.get("/api/friends", function(req, res) {
    res.json(friendArray);
  });
// POST function that adds a new user to friends and the logic to determine the best match for a friend 
  app.post("/api/friends", function(req, res) {

    var friend = req.body
    for(var i = 0; i < friend.scores.length; i++) {
        friend.scores[i] = parseInt(friend.scores[i]);
      }
    friendArray.push(friend)
  });
}
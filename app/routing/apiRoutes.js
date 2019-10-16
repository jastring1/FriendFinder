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
    // changing the asnwers from the survey into integers to be able to calculate friend scores
    for(var i = 0; i < friend.scores.length; i++) {
        friend.scores[i] = parseInt(friend.scores[i]);
      }
    //setting up variables to determines the best match
    var lowestDifference = 100
    var matchIndex = 0
      //nested loop that calculates the total difference from the user to each user saved in the database
    for (var i=0;i<friendArray.length;i++){
        var totalDifference = 0
        for (var j=0;j<10;j++){
            totalDifference += Math.abs(friend.scores[j] - friendArray[i].scores[j])
        }//conditional to determine the index of the best match to the user
        if(totalDifference < lowestDifference){
            matchIndex = i
            lowestDifference = totalDifference
        }
    }
    //adding a new user to the friendArray after determining the match, this happens so that the user doesnt match with themselves
    friendArray.push(friend)
    //returning the best match
    res.json(friendArray[matchIndex])
  });
}

var express = require("express");
var friends = require("../data/friends");
var router = express.Router();


router.get("/api/friends", function(req, res) {
    return res.json(friends);
 
});



router.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newfriend = req.body; 
    var newUserScores = newfriend.scores
    
    for(var i=0; i<newUserScores.length; i++) {

        newUserScores[i] = parseInt(newUserScores[i]);

     } 
    
        
     

    var NewMatchName = "";
    var NewMatchImage = "";
    var totalDifference = 100;
     
    for (var i = 0; i < friends.length; i++) {
            

        var diff = 0;
        for (var k = 0; k < newUserScores.length; k++) {

            // if (friends[i].scores[k] !== newUserScores[k]) {

            diff += Math.abs(friends[i].scores[k] - newUserScores[k]);

            // console.log(diff)
        }

        // }


        if (diff < totalDifference) {

            totalDifference = diff;
            NewMatchName = friends[i].name;
            NewMatchImage = friends[i].photo;

            // console.log(`ClosestNewMatch found = ` + diff);
            // console.log(`Friend name = ` + friends[i].name);
            // console.log(`Friend image = ` + friends[i].photo);


        }

    
    }
    // console.log(`ClosestNewMatch found = ` + totalDifference)

    friends.push(newfriend);
 
    res.json({name:NewMatchName, photo:NewMatchImage})


});


  module.exports = router 
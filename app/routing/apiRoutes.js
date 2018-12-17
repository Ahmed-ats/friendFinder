
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
     
//    console.log(newfriend.scores);
    var newUserScores = newfriend.scores
   
    friends.push(newfriend);


  for(var i = 0 ; i < friends.length; i++){

        
       for(var k = 0 ; k < newUserScores.length; k++){
     
        if ( friends[i].scores[k] !== newUserScores[k] ){
        
       var diff = Math.abs(friends[i].scores[k] - newUserScores[k]);
        console.log(diff)
        }

    }
  }


  
    

    
    res.json(friends);
  });


  module.exports = router 
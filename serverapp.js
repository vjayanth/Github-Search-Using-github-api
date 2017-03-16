var express = require('express');

var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
var http=require('http');
var GitHubApi = require("github");
app.use('/public', express.static(path.join(__dirname + '/public')));
var github = new GitHubApi();

// Authenticating the user using Github Token

github.authenticate({
    type: "oauth",
    token:"6daf23a63b8e87ac9feedf047b8f9cd80d6a224d"   // Github Token should be paste here for authentication to follow and unfollow the user
});



app.get('/', function (req, res) {
	console.log(__dirname);
res.sendFile(path.join(__dirname, '/index.html'));
})
app.post('/followUser',function(req,res){
	

  github.users.followUser({"username":req.body.username},function(error,response){
  	console.log(response);
    res.send("success");
  });
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
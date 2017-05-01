// Imports the express Node module.
var express = require('express');
// Creates an Express server.
var app = express();
//var bodyParser = require('body-parser');
var database = require('./database.js');
var writeDocument = database.writeDocument;
var addDocument = database.addDocument;
var readDocument = database.readDocument;

app.use(express.static('../client/build'));

// Reset database.
app.post('/resetdb', function(req, res) {
  console.log("Resetting database...");
  // This is a debug route, so don't do any validation.
  database.resetDatabase();
  // res.send() sends an empty response with status code 200
  res.send();
});

//app.use(bodyParser.text());
//app.use(bodyParser.json());

//NON VERB FUNCTIONS

/**
 * Get the user ID from a token. Returns -1 (an invalid ID)
 * if it fails.
 */
function getUserIdFromToken(authorizationLine) {
  try {
    // Cut off "Bearer " from the header value.
    var token = authorizationLine.slice(7);
    // Convert the base64 string to a UTF-8 string.
    var regularString = new Buffer(token, 'base64').toString('utf8');
    // Convert the UTF-8 string into a JavaScript object.
    var tokenObj = JSON.parse(regularString);
    var id = tokenObj['id'];
    // Check that id is a number.
    if (typeof id === 'number') {
      return id;
    } else {
      // Not a number. Return -1, an invalid ID.
      return -1;
    }
  } catch (e) {
    // Return an invalid ID.
    return -1;
  }
}

 function getInboxData(inbox_id){
  var inboxData = readDocument('inbox', inbox_id);
  return inboxData;
}

function getMessageData(message_id){
  var messageData = readDocument('messages', message_id);
  return messageData;
}

function getChatData(chat_id){
  var chatData = readDocument('chats', chat_id);
  return chatData;
}

function getChatListItems(user_id) {
    var userData = readDocument('users', user_id);
    var inboxData = readDocument('inbox', userData.inboxId);

    var chatList = [];
    for(var i = 0; i < inboxData.chats.length; i ++ ) {
      chatList.push(readDocument('chats', inboxData.chats[i]));
    }

    return chatList;
}

function getMessageListItems(user_id, chat_id){
  var chatDataList = getChatListItems(user_id);
  for(var i =0; i< chatDataList.length; i++){
    if(chatDataList[i]._id == chat_id){
      var chatData = chatDataList[i];
    }
  }
  var messageList = [];
  for(var j=0; j< chatData.messages.length; j++){
    messageList.push(readDocument('messages', chatData.messages[j]));
  }

  return messageList;


}



function getProjectData(project_id){
  var projectData = readDocument('projects', project_id);
  return projectData;
}


function getopen_positionData(pid){
  var positions = readDocument('positions', 'positions');
  var open = [];
  for(var i=0; i< positions.length; i++){
    if( positions[i].project_id == pid && positions[i].status == 'open'){
      open.push(positions[i]);
    }
  }
  return open;
}

function getfilled_positionData(pid){
  var positions = readDocument('positions', 'positions');
  var filled = [];
  for(var i=0; i< positions.length; i++){
    if( positions[i].project_id == pid && positions[i].status == 'filled'){
      filled.push( positions[i]);
    }
  }
  return filled;

}

function getProjectUpdates(id){
  var notifications = readDocument('notificationItems', id)
  return notifications;
}

function getProfileData(id) {
    var profileData = readDocument('users', id);
    return profileData;
}

//createProject
function createProject(projectId, project){
  var newProject = addDocument("projects", project);
  return newProject;
}




//SIDEBAR
function getProjectPillData(userid) {
  // Get the User object with the id "user".
  var userData = readDocument('users', userid);
  // Get the Feed object for the user.

  var projectList = [];
  for(var i = 0; i < userData.projects.length; i ++ ) {
    projectList.push(readDocument('projects', userData.projects[i]));
  }
  return projectList;

}

//MAIN FEED
function getNotificationFeedData(user) {
  // Get the User object with the id "user".
  var userData = readDocument('users', user);
  // Get the Feed object for the user.
  var feedData = readDocument('feeds', userData.feed);

  //This is a list... Should I change the way I save this????
  var notificationList = [];

  for(var i = 0; i < feedData.notificationItems.length; i ++ ) {
    notificationList.push(readDocument('notificationItems', feedData.notificationItems[i]));
  }
  return notificationList;
}

//MAIN FEED
function getJobFeedData(user) {
  // Get the User object with the id "user".
  var userData = readDocument('users', user);
  // Get the Feed object for the user.
  var feedData = readDocument('feeds', userData.feed);

  //This is a list... Should I change the way I save this????
  var jobList = [];
  for(var i = 0; i < feedData.jobItems.length; i ++ ) {
    jobList.push(readDocument('jobItems', feedData.jobItems[i]));
  }
  return jobList;

}

//Job Board
function getAllJobs(user) {
  // Get the User object with the id "user".
  var userData = readDocument('users', user);
  //get the array of Job Data
  var allJobData = readDocument('allJobItems', userData.allJobItems);
  var jobList = [];

  for(var i = 0; i < allJobData.jobItems.length; i ++ ) {
    jobList.push(readDocument('jobItems', allJobData.jobItems[i]));
  }
  return jobList;
}

//END NON VERB FUNCTIONS



//MongoClient.connect(url, function(err, db) {
  // Put everything that uses `app` into this callback function.
  // from app.use(bodyParser.text());
  // all the way to
  // app.listen(3000, ...
  // Also put all of the helper functions that use mock database
  // methods like readDocument, writeDocument, ...

  //VERB FUNCTIONS


  app.get('/user/:userid/inbox/:inboxid', function(req,res){
    var inboxid = req.params.inboxid;

    res.send(getInboxData(inboxid));
  });

  //GET ALL CHATS FOR user
  app.get('/user/:userid/chats', function(req, res) {
   var userid = req.params.userid;
   res.send(getChatListItems(userid));
  });

  app.get('/user/:userid/messages/:chatid', function(req, res){
    var userid = req.params.userid;
    var chatid = req.params.chatid;
    res.send(getMessageListItems(userid, chatid));
  });

  app.get('/user/:userid/message/:messageid', function(req,res){
    var messageid = req.params.messageid;

    res.send(getMessageData(messageid));
  });

  app.get('/user/:userid/chats/:chatid', function(req,res){
    var chatid = req.params.chatid;

    res.send(getChatData(chatid));
  });

  // Get Profile DATA

  app.get('/user/:userid', function (req, res) {
      var userId = req.params.userid;

      res.send(getProfileData(userId));
  });
  //GET PROJECT DATA
  app.get('/user/:userid/project/:projectid', function(req,res){
    var projectid = req.params.projectid;

    res.send(getProjectData(projectid));
  });
  //GET OPEN POSITIONS
  app.get('/user/:userid/open/pos_id/:pos_id', function(req,res){
    var pos_id = req.params.pos_id;

    res.send(getopen_positionData(pos_id));
  });
  //GET FILLED POSITIONS
  app.get('/user/:userid/filled/pos_id/:pos_id', function(req,res){
    var pos_id = req.params.pos_id;

    res.send(getfilled_positionData(pos_id));
  });
  //GET PROJECT UPDATES
  app.get('/user/:userid/projectid/:projectid', function(req,res){
    var projectid = req.params.pos_id;

    res.send(getProjectUpdates(projectid));
  });

  //GET SIDEBAR PROJECTS
  app.get('/users/:userid/sidebar-projects', function(req, res) {
    var userid = req.params.userid;
    res.send(getProjectPillData(userid));
  });

  //GET NOTIFICATION ITEMS
  app.get('/feed/:userid/notificationitems', function(req, res) {
    var userid = req.params.userid;
    res.send(getNotificationFeedData(userid));
  });

  //GET JOB ITEMS
  app.get('/feed/:userid/jobitems', function(req, res) {
     var userid = req.params.userid;
    res.send(getJobFeedData(userid));
  });

  app.post('/user/:userid/project/:project_id', function (req, res){
    var userid = req.params.userid;
    var projectid = req.params.project_id;
    console.log(req.body);
    res.send(createProject(projectid, req.body));
  })


  //GET ALL CHATS FOR user
  app.get('/users/:userid/chats', function(req, res) {
    var userid = req.params.userid;
    res.send(getChatListItems(userid));
  });

  //GET ALL JOB ITEMS
  app.get('/job-board/:userid/jobitems', function(req, res) {
    var userid = req.params.userid;
    res.send(getAllJobs(userid));
  });

  //END VERB FUNCTIONS

  // Starts the server on port 3000!
  app.listen(3000, function () {
    console.log('Listening on port 3000!');
  });
/*  var MongoDB = require('mongodb');
  var MongoClient = MongoDB.MongoClient;
  var ObjectID = MongoDB.ObjectID;
  var url = 'mongodb://localhost:27017/facebook';
*/
// The file ends here. Nothing should be after this.

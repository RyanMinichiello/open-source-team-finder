// Imports the express Node module.
var express = require('express');
var MongoDB = require('mongodb');
var MongoClient = MongoDB.MongoClient;
var ObjectID = MongoDB.ObjectID;
var url = 'mongodb://localhost:27017/OSTF';

MongoClient.connect(url, function(err,db){
    // Creates an Express server.
    var app = express();
    //var bodyParser = require('body-parser');
    var database = require('./resetdatabase.js');
    var writeDocument = database.writeDocument;
    var readDocument = database.readDocument;
    var addDocument = database.addDocument;
    var ProjectSchema = require('./schemas/projects.json');
    var NewMessageSchema = require('./schemas/newmessage.json');
    var validate = require('express-jsonschema').validate;
    var mongo_express = require('mongo-express/lib/middleware');
    var mongo_express_config = require('mongo-express/config.default.js');
    var ResetDatabase = require('./resetdatabase');

    app.use(express.static('../client/build'));
    app.use('/mongo_express', mongo_express(mongo_express_config));
    // Reset database.
    app.post('/resetdb', function(req, res) {
      console.log("Resetting database...");
      // This is a debug route, so don't do any validation.
      ResetDatabase(db, function(){
        res.send();
      });
      // res.send() sends an empty response with status code 200

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
        if (typeof id === 'string') {
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

     function getInboxData(inbox_id, callback){

        // var inboxData = readDocument('inbox', inbox_id);
        // return inboxData;
      db.collection('inbox').findOne({
        _id: inbox_id
      }, function(err,inb){
        if(err){
          return callback(err);
        }else if(inb === null){
          return callback(null, null);
        }
        callback(null,inb);
      });
    }



    function getMessageData(message_id, callback){
      // var messageData = readDocument('messages', message_id);
      // return messageData;

      db.collection('messages').findOne({
        _id: message_id
      }, function(err,inb){
        if(err){
          return callback(err);
        }else if(inb === null){
          return callback(null, null);
        }
        callback(null,inb);
      });
    }

    function sendNewMessages(chatId, contents) {

      console.log("sendnnewmessages from serverside");
      var chatData = readDocument('chats', chatId);
      console.log("chatdata");
      console.log(chatData);
      var newMessage = {
          "author" : 1,
          "contents" : contents,
          "side" : "right"
      }

    newMessage = addDocument('messages', newMessage);
    console.log("newMess");
    console.log(newMessage);
    chatData.messages.shift(newMessage._id);
    writeDocument('chats',chatData);
    writeDocument('messages', newMessage);

    return newMessage;
    }

    function getChatData(chat_id,callback){
      // var chatData = readDocument('chats', chat_id);
      // return chatData;
      db.collection('chats').findOne({
        _id: chat_id
      }, function(err,inb){
        if(err){
          return callback(err);
        }else if(inb === null){
          return callback(null, null);
        }
        callback(null,inb);
      });
    }

    function getChatListItems(user_id) {
        var userData = readDocument('users', user_id);
        var inboxData = readDocument('inbox', userData.inboxId);

        var chatList = [];
        for(var i = 0; i < inboxData.chats.length; i ++ ) {
          chatList.push(readDocument('chats', inboxData.chats[i]));

        // db.collection('users').findOne({
        //   _id: user_id
        // }, function(err, userData){
        //   if(err) {
        //     return callback(err);
        //   }
        //   else if(userData === null){
        //     return callback(null,null);
        //   }
        //
        //   db.collection('inbox').findOne({
        //     _id: userData.inbox
        //   }, function(err, inboxData){
        //     if(err) {
        //       return callback(err);
        //     }else if(inboxData === null){
        //       return callback(null,null);
        //     }
        //
        //     var chatList = [];
        //
        //     function processNextChatItem(i) {
        //       getChatData(inboxData.conten)
        //     }
        //   })
        // })

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

    function getProjectData(project_id, callback){
      // var projectData = readDocument('projects', project_id);
      // return projectData;

      db.collection('projects').findOne({
        id: project_id
      }, function(err,inb){
        if(err){
          return callback(err);
        }else if(inb === null){
          return callback(null, null);
        }
        callback(null,inb);
      });
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

    function getProfileData(id, callback) {
        // var profileData = readDocument('users', id);
        // return profileData;

        db.collection('users').findOne({
          _id: id
        }, function(err,inb){
          if(err){
            return callback(err);
          }else if(inb === null){
            return callback(null, null);
          }
          callback(null,inb);
        });
    }

    function getUserInfo(id, callback) {
        // var profileData = readDocument('users', id);
        // return profileData;

        db.collection('users').findOne({
          _id: id
        }, function(err,inb){
          if(err){
            return callback(err);
          }else if(inb === null){
            return callback(null, null);
          }
          callback(null,inb);
        });
    }

    //createProject
    function createProject(userId, identifier, description, tags, skillz, startDate, endDate,
      inProgress, projId, notificationItems, msgs, positions) {
      console.log("MADE IT TO SERVER");
      console.log(identifier);
      //Add project to associated user
      var userData = readDocument('users', userId);
      userData.projects.push(projId);

      var newProject = {
        "userId" : userId,
        "identifier" : identifier,
        "id"         : projId,
        "notificationItems": notificationItems,
        "msgs"       : msgs,
        "positions"  : positions,
        "description": description,
        "skillz": skillz,
        "startDate" : startDate,
        "endDate" : endDate,
        "inProgress" : inProgress,
        "tags" : tags

      }
      writeDocument('projects', newProject);
      return newProject;
    }




    //SIDEBAR
    function getProjectPillData(userid, callback) {

      db.collection('users').findOne({
        _id: userid
      }, function(err, userData){
        if(err) {
          return callback(err);
        }
        else if(userData === null){
          return callback(null,null);
        }
        //callback(null, userData.projects);
        var projectList = [];

        function processNextProjectItem(i){
          getProjectData(userData.projects[i], function(err, projItem){
            if(err){
              callback(err);
            }else{
              projectList.push(projItem);
              if(projectList.length === userData.projects.length){
                callback(null, projectList);
              }else{
                processNextProjectItem(i + 1);
              }
            }
          });
        }
        if(userData.projects.length === 0){
          callback(null, userData);
        }else{
          processNextProjectItem(0);
        }
        // for(var i=0; i<userData.projects.length; i++){
        //   console.log("i is: " + i);
        //   db.collection('projects').findOne({
        //     id: userData.projects[i]
        //   }, function(err, projData){
        //     console.log("what is projData???????");
        //     console.log(projData);
        //     if(err){
        //       return callback(err);
        //     }else if(projData === null){
        //       return callback(null,null);
        //     }
        //     projectList.push(projData);
        //   })
        // }
        // console.log("SO NOW THE ARRAY IS");
        // console.log(projectList);
        //
        // callback(null, projectList);
      });


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
    function getAllJobs(userid, callback) {
      //db.collection('allJobItems')
      // Container for jobItems
      var jobItemList = [];
      // Get the entire collection of jobItems
      var jobItemCollection = db.collection('jobItems').find();
      // For every item in the collection
      jobItemCollection.each(function(err, jobItem) {
        if(err) {
          callback(err);
        } else if(jobItem !== null) {
          // add them to the array container
          console.log(jobItem);
          jobItemList.push(jobItem._id);
          console.log(jobItemList);
        }
      });
      // all items in the array should be added. check in the console.
      // will appear in terminal window.
      console.log(jobItemList);
      console.log("THis should be after the logs of the jobItems.")
      callback(null, jobItemList);
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



      app.get('/users/:userid/inbox/:inboxid', function(req,res){
        var inboxid = req.params.inboxid;
        var userid = req.params.userid;
        var fromUser = getUserIdFromToken(req.get('Authorization'));
        if(fromUser === userid){
          getInboxData(new ObjectID(inboxid), function(err, inb){
            if(err){
              res.status(500).send("Database error: " + err);
            }else if(inb === null){
              res.status(400).send("Could not look up inbox for user " + userid);
            }else{
              res.send(inb);
            }
          });
        }else{
          res.status(403).end();
        }
      //res.send(getInboxData(inboxid));
      });

      //GET ALL CHATS FOR user
      app.get('/users/:userid/chats', function(req, res) {
       var userid = req.params.userid;
       res.send(getChatListItems(userid));
      });

      app.get('/users/:userid/messages/:chatid', function(req, res){
        var userid = req.params.userid;
        var chatid = req.params.chatid;
        res.send(getMessageListItems(userid, chatid));
      });

      app.get('/users/:userid/message/:messageid', function(req,res){
        var messageid = req.params.messageid;
        var userid = req.params.userid;
        var fromUser = getUserIdFromToken(req.get('Authorization'));
        if(fromUser === userid){
          getMessageData(new ObjectID(messageid), function(err, inb){
            if(err){
              res.status(500).send("Database error: " + err);
            }else if(inb === null){
              res.status(400).send("Could not look up inbox for user " + userid);
            }else{
              res.send(inb);
            }
          });
        }else{
          res.status(403).end();
        }
        //res.send(getMessageData(messageid));
      });

      app.get('/users/:userid/chats/:chatid', function(req,res){
        var chatid = req.params.chatid;
        var userid = req.params.userid;
        var fromUser = getUserIdFromToken(req.get('Authorization'));
        if(fromUser === userid){
          getChatData(new ObjectID(chatid), function(err, inb){
            if(err){
              res.status(500).send("Database error: " + err);
            }else if(inb === null){
              res.status(400).send("Could not look up inbox for user " + userid);
            }else{
              res.send(inb);
            }
          });
        }else{
          res.status(403).end();
        }
        //res.send(getChatData(chatid));
      });

      // Get Profile DATA

      app.get('/profile/:userid', function (req, res) {
          var userid = req.params.userid;
          var fromUser = getUserIdFromToken(req.get('Authorization'));
          if(fromUser === userid){
            getProfileData(new ObjectID(userid), function(err, inb){
              if(err){
                res.status(500).send("Database error: " + err);
              }else if(inb === null){
                res.status(400).send("Could not look up inbox for user " + userid);
              }else{
                res.send(inb);
              }
            });
          }else{
            res.status(403).end();
          }
        //  res.send(getUserInfo(userId));
      });

      app.get('/users/:userid', function (req, res) {
          var userid = req.params.userid;
          var fromUser = getUserIdFromToken(req.get('Authorization'));
          if(fromUser === userid){
            getUserInfo(new ObjectID(userid), function(err, inb){
              if(err){
                res.status(500).send("Database error: " + err);
              }else if(inb === null){
                res.status(400).send("Could not look up inbox for user " + userid);
              }else{
                res.send(inb);
              }
            });
          }else{
            res.status(403).end();
          }
        //  res.send(getUserInfo(userId));
      });

      //GET PROJECT DATA
      app.get('/user/:userid/project/:projectid', function(req,res){
        // var projectid = req.params.projectid;
        //
        // res.send(getProjectData(projectid));

        var projectid = req.params.projectid;
        var userid = req.params.userid;
        var fromUser = getUserIdFromToken(req.get('Authorization'));
        if(fromUser === userid){
          getProjectData(new ObjectID(projectid), function(err, inb){
            if(err){
              res.status(500).send("Database error: " + err);
            }else if(inb === null){
              res.status(400).send("Could not look up inbox for user " + userid);
            }else{
              res.send(inb);
            }
          });
        }else{
          res.status(403).end();
        }
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
        // var userid = req.params.userid;
        // res.send(getProjectPillData(userid));
        var userid = req.params.userid;
        var fromUser = getUserIdFromToken(req.get('Authorization'));
        if(fromUser === userid){
          getProjectPillData(new ObjectID(userid), function(err, inb){
            if(err){
              res.status(500).send("Database error: " + err);
            }else if(inb === null){
              res.status(400).send("Could not look up inbox for user " + userid);
            }else{
              res.send(inb);
            }
          });
        }else{
          res.status(403).end();
        }
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

      app.post('/newmessages',validate({body: NewMessageSchema}), function(req,res){
        console.log("POSTING");
        var body = req.body;
        console.log(body);
        var fromUser = getUserIdFromToken(req.get('Authorization'));
        if(fromUser === body.author){
          var newMessage = sendNewMessages(1, body.contents);
          res.status(201);
          res.send(newMessage);
        }else{
          res.status(401).end();
        }
    });

      //CreateNewProject
      app.post('/project', validate({body:ProjectSchema}), function (req, res) {
        var project = req.body;
        var fromUser = getUserIdFromToken(req.get('Authorization'));
        console.log(req.body);
        if(fromUser == project.userId) {
          console.log("MADE IT TO APP.POST");
          console.log(req.body.userId);
          var newProject = createProject(project.userId, project.identifier, project.description, project.tags, project.skillz,
             project.startDate, project.endDate, project.inProgress, project._id,
              project.notificationItems, project.msgs, project.positions);
          res.status(201);
          console.log();
          res.send(newProject);
        } else {
           // 401: Unauthorized.
             res.status(401).end();
         }
      });


      //GET ALL CHATS FOR user
      app.get('/users/:userid/chats', function(req, res) {
        var userid = req.params.userid;
        res.send(getChatListItems(userid));
      });

      //GET ALL JOB ITEMS
      app.get('/job-board/:userid/jobitems', function(req, res) {
        //var userid = req.params.userid;
        //res.send(getAllJobs(userid));

        var userid = req.params.userid;
        var fromUser = getUserIdFromToken(req.get('Authorization'));
        if(fromUser === userid) {
          getAllJobs(new ObjectID(userid), function(err, inb){
            if(err) {
              res.status(500).send("Database error: " + err);
            } else if (inb === null) {
              res.status(400).send("Could not get all the jobs for user " + userid);
            } else {
              res.send(inb);
            }
          });
        } else {
          res.status(403).end();
        }
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
});

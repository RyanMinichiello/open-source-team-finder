var ObjectID = require('mongodb').ObjectID;

var databaseName = "OSTF";

var initialData = {
      // The 'user' collection; contains all the users in our system
      "users": {
        // This user has id "1" and it is Jane
        "1" : {
          "_id" : new ObjectID("000000000000000000000001"),
          "name" : "Jane Doe",
          "image" : "img/jane.png",
          "banner" : "img/new_banner.jpg",
          // ID of Jane's feed
          "feed" : new ObjectID("000000000000000000000001"),
          // ID of Jane's Inbox
          "inboxId" : new ObjectID("000000000000000000000001"),
          "skills" : ["Scala", "Node.js", "Agile Methodology"],
          "interests" : ["Finance", "Clean Energy", "Drones", "Apples"],
          "bio" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "contact" : "myemail@email.com",

          "projects" : [new ObjectID("000000000000000000000001"), new ObjectID("000000000000000000000002")],

          "allJobItems" : new ObjectID("000000000000000000000001")

        },

        "2" : {
          "_id" : new ObjectID("000000000000000000000002"),
          "name" : "Joe Doe",
          "image" : "",
          "banner" : "",
          "feed" : new ObjectID("000000000000000000000002"),
          "inboxId" : new ObjectID("000000000000000000000002"),
          "skills" : ["Java", "Numerical Graphing", "Agile Methodology", "Management"],
          "interests" : ["Drones", "Robotics", "Sports"],
          "bio" : "Joe, a deer, a female deer, Ray, a drop of golden sun, Me, a name, etc.",
          "contact" : "JoesCarEmporiumComeOnDown@email.com",
          "projects" : [new ObjectID("000000000000000000000002"), new ObjectID("000000000000000000000003")],
          "allJobItems" : new ObjectID("000000000000000000000001")

        },

        "3" : {
          "_id" : new ObjectID("000000000000000000000003"),
          "name" : "Anna Hall",
          "image" : "",
          "banner" : "",
          "feed" : new ObjectID("000000000000000000000003"),
          "inboxId" : new ObjectID("000000000000000000000003"),
          "skills" : ["Java", "Management"],
          "interests" : ["Drones", "Robotics", "Music"],
          "bio" : "Hi, I'm Anna",
          "contact" : "annahall@email.com",
          "projects" : [new ObjectID("000000000000000000000001"), new ObjectID("000000000000000000000003")],
          "allJobItems" : new ObjectID("000000000000000000000001")
        }
      },

      "projects" : {
        "1":{
          "identifier" : "Okra",
          "id"         : new ObjectID("000000000000000000000001"),
          "notificationItems"    : new ObjectID("000000000000000000000001"),
          "msgs"       : new ObjectID("000000000000000000000001"),
          "positions"  : [new ObjectID("000000000000000000000001")],
          "description": "Welcome to the show",
          "skillz"     :["Java", "Social", "Sick Card Tricks"],
          "startDate" : "2019-11-01",
          "endDate" : "2020-01-01",
          "inProgress" : 0,
          "tags" : ["Java", "Front-end"]

        },
        "2" : {
          "identifier" : "Apple",
          "id"         : new ObjectID("000000000000000000000002"),
          "updates"    : new ObjectID("000000000000000000000002"),
          "msgs"       : new ObjectID("000000000000000000000002"),
          "positions"  : [new ObjectID("000000000000000000000002")],
          "description": "Nothing too fancy to do here.",
          "skillz"     :["Java", "Social", "Extreme Apple Picking", "High Level Design"],
          "startDate" : "2019-11-01",
          "endDate" : "2020-01-01",
          "inProgress" : 0,
          "tags" : ["C", "Low Level"]
        },
        "3" : {
          "identifier" : "Peach",
          "id"         : new ObjectID("000000000000000000000003"),
          "updates"    : new ObjectID("000000000000000000000003"),
          "msgs"       : new ObjectID("000000000000000000000003"),
          "positions"  : [new ObjectID("000000000000000000000001"),new ObjectID("000000000000000000000002")],
          "description": "We're looking for our friend James. We believe he is in the ocean and we need to develop good drones to find him.",
          "skillz"     :["Drones", "Artificial Intelligence", "Node.js", "Mongo"],
          "startDate" : "2019-11-01",
          "endDate" : "2020-01-01",
          "inProgress" : 0,
          "tags" : ["Databases", "Back-end", "Team"]
        },
        "4" : {
          "identifier" : "Garbanzo Bean",
          "id"         : new ObjectID("000000000000000000000004"),
          "updates"    : new ObjectID("000000000000000000000004"),
          "msgs"       : new ObjectID("000000000000000000000004"),
          "positions"        : [new ObjectID("000000000000000000000004")],
          "description": "Our goal is too develop an onlign spell cheker that finds any errands you type.",
          "skillz"     :["Natural Language Processing", "Excel", "Java", "Regex"],
          "startDate" : "2019-11-01",
          "endDate" : "2020-01-01",
          "inProgress" : 0,
          "tags" : []
        }
      },

      "inbox" : {
        "1" : {
          "chats": [new ObjectID("000000000000000000000001")],
          "name": "Jane Doe"
        }
      },

      "chats" : {
        "1": {
          "_id":new ObjectID("000000000000000000000001"),
          "messages" : [new ObjectID("000000000000000000000001"),new ObjectID("000000000000000000000002")],
          "associated-users" : [new ObjectID("000000000000000000000001"),new ObjectID("000000000000000000000002"),new ObjectID("000000000000000000000003")],
          "curr": "message-current panel panel-default",
          "name": "Okra Team",
          "color": "read"
        }/*,
        "2": {
          "_id":2,
          "messages" : [3,4],
          "associated-users" : [1,2],
          "curr": "message-preview panel panel-default",
          "name": "Joe Doe",
          "color": "unread"
        },
        "3": {
          "_id":3,
          "messages" : [5,6],
          "associated-users" : [1,3],
          "curr": "message-preview panel panel-default",
          "name": "Anna Hall",
          "color": "read"
        }*/
      },

      "messages" : {
        "1" : {
          "id": new ObjectID("000000000000000000000001"),
          "author": new ObjectID("000000000000000000000002"),
          "contents" : "Hey guys, what should our main page feed look like?",
          "side":"left"
        },
        "2" : {
          "id": new ObjectID("000000000000000000000002"),
          "author": new ObjectID("000000000000000000000001"),
          "contents" : "idk any ideas?",
          "side":"right"
        },
        "3" : {
          "id": new ObjectID("000000000000000000000003"),
          "author": new ObjectID("000000000000000000000002"),
          "contents" : "Hello",
          "side":"left"
        },
        "4" : {
          "id": new ObjectID("000000000000000000000004"),
          "author": new ObjectID("000000000000000000000001"),
          "contents" : "Hi",
          "side":"right"
        },
        "5" : {
          "id": new ObjectID("000000000000000000000005"),
          "author":new ObjectID("000000000000000000000003"),
          "contents" : "Wanna join my project?",
          "side":"left"
        },
        "6" : {
          "id": new ObjectID("000000000000000000000006"),
          "author":new ObjectID("000000000000000000000001"),
          "contents" : "Can you tell me more about it?",
          "side":"right"
        }
      },

      "positions" : {

        "positions" :[

          {
            "id"         : new ObjectID("000000000000000000000001"),
            "status" : "filled",
            "user_Name": "Nomar Garciaparra",
            "userId" : new ObjectID("000000000000000000000001"),
            "project_id" : new ObjectID("000000000000000000000001"),
            "title"      : "Developer",
            "description": "develop things",
            "skillz"     : ["Java"]
          },

          {
            "id"         : new ObjectID("000000000000000000000001"),
            "status" : "open",
            "user_Name"  : null,
            "userId" : null,
            "project_id" : new ObjectID("000000000000000000000001"),
            "title"      : "developer",
            "description": "develop things",
            "skillz"     : ["Java"]
          }
        ]

      },

      "feeds" :{
        //Each feed has their own set of feed items
        "1" : {
          "id": new ObjectID("000000000000000000000001"),
          "notificationItems": [new ObjectID("000000000000000000000001"),new ObjectID("000000000000000000000002")],
          "jobItems":[new ObjectID("000000000000000000000001"),new ObjectID("000000000000000000000002"),new ObjectID("000000000000000000000004")]
        },
        "2" : {
          "id": new ObjectID("000000000000000000000002"),
          "notificationItems": [new ObjectID("000000000000000000000001")],
          "jobItems": [new ObjectID("000000000000000000000001"),new ObjectID("000000000000000000000002")]

        }
      },

      "jobItems": {
        "1" : {
          "_id" : new ObjectID("000000000000000000000001"),
          "title" : "Software Engineering Position at Snapdragon Team",
          "description" : "apply within!!!!",
          "tags" : ["Drones", "Finance"],
          "rankingType": "gold-button"

        },

        "2" : {
          "_id" : new ObjectID("000000000000000000000002"),
          "title" : "Quality Assurance Position at Wombat Team",
          "description" : "Please taste our apples we are too afraid.",
          "tags" : ["Apples", "Sports"],
          "rankingType": "bronze-button"
        },
        "3" : {
          "_id" : new ObjectID("000000000000000000000003"),
          "title" : "Quality Assurance Position on Caligula's Team",
          "description" : "Just me, myself, and I.",
          "tags" : ["Stuff", "Fun"],
          "rankingType": "bronze-button"
        },
        "4" : {
          "_id" : new ObjectID("000000000000000000000004"),
          "title" : "Lab Rat at Maze Team",
          "description" : "Don't get lost in the maze.",
          "tags" : ["Walking", "Games"],
          "rankingType": "silver-button"
        }

      },


      "notificationItems" : {
        "1" : {
          "_id" : new ObjectID("000000000000000000000001"),
          "title" : "Update on Okra Team",
          "description" : "We are running out of money and may be closing down in July :/."
        } ,

        "2" : {
            "_id" : new ObjectID("000000000000000000000002"),
            "title" : "Update on Apple Team",
            "description" : "Things couldn't be any better, but could we get more VC support?"
          }
      },

      "allJobItems" : {
        "1" : {
          "_id" : new ObjectID("000000000000000000000001"),
          "jobItems" : [new ObjectID("000000000000000000000001"),new ObjectID("000000000000000000000002"),new ObjectID("000000000000000000000003"),new ObjectID("000000000000000000000004")]
        }
      }

};

/**
 * Resets a collection.
 */
function resetCollection(db, name, cb) {
  // Drop / delete the entire object collection.
  db.collection(name).drop(function() {
    // Get all of the mock objects for this object collection.
    var collection = initialData[name];
    var objects = Object.keys(collection).map(function(key) {
      return collection[key];
    });
    // Insert objects into the object collection.
    db.collection(name).insertMany(objects, cb);
  });
}

/**
 * Reset the MongoDB database.
 * @param db The database connection.
 */
function resetDatabase(db, cb) {
  // The code below is a bit complex, but it basically emulates a
  // "for" loop over asynchronous operations.
  var collections = Object.keys(initialData);
  var i = 0;

  // Processes the next collection in the collections array.
  // If we have finished processing all of the collections,
  // it triggers the callback.
  function processNextCollection() {
    if (i < collections.length) {
      var collection = collections[i];
      i++;
      // Use myself as a callback.
      resetCollection(db, collection, processNextCollection);
    } else {
      addIndexes(db, cb);
    }
  }

  // Start processing the first collection!
  processNextCollection();
}

// Check if called directly via 'node', or required() as a module.
// http://stackoverflow.com/a/6398335
if(require.main === module) {
  // Called directly, via 'node src/resetdatabase.js'.
  // Connect to the database, and reset it!
  var MongoClient = require('mongodb').MongoClient;
  var url = 'mongodb://localhost:27017/' + databaseName;
  MongoClient.connect(url, function(err, db) {
    if (err) {
      throw new Error("Could not connect to database: " + err);
    } else {
      console.log("Resetting database...");
      resetDatabase(db, function() {
        console.log("Database reset!");
        // Close the database connection so NodeJS closes.
        db.close();
      });
    }
  });
} else {
  // require()'d.  Export the function.
  module.exports = resetDatabase;
}


/**
  * Adds any desired indexes to the database.
  */
function addIndexes(db, cb) {
   db.collection('feedItems').createIndex({ "contents.contents": "text" }, null, cb);
 }

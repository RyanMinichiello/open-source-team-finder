import React from 'react';
import ReactDOM from 'react-dom';

// Modify with your startup's name!
var startupName = "Okra Team";

// Put your mock objects here, as in Workshop 4
var initialData = {
      // The 'user' collection; contains all the users in our system
      "users": {
        // This user has id "1" and it is Jane
        "1" : {
          "_id" : 1,
          "name" : "Jane Doe",
          "image" : "img/jane.png",
          "banner" : "img/new_banner.jpg",
          // ID of Jane's feed
          "feed" : 1,
          // ID of Jane's Inbox
          "inboxId" : 1,
          "skills" : ["Scala", "Node.js", "Agile Methodology"],
          "interests" : ["Finance", "Clean Energy"],
          "bio" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "contact" : "myemail@email.com",

          "projects" : [1, 2],

          "dummyproj" : ["Okra Team", "Don't Talk About Okra Team"]

        },

        "2" : {
          "_id" : 2,
          "name" : "Joe Doe",
          "image" : "",
          "banner" : "",
          "feed" : 2,
          "inboxId" : 2,
          "skills" : ["Java", "Numerical Graphing", "Agile Methodology", "Management"],
          "interests" : ["Drones", "Robotics", "Sports"],
          "bio" : "Joe, a deer, a female deer, Ray, a drop of golden sun, Me, a name, etc.",
          "contact" : "JoesCarEmporiumComeOnDown@email.com",
          "projects" : [2, 3]

        },

        "3" : {
          "_id" : 3,
          "name" : "Anna Hall",
          "image" : "",
          "banner" : "",
          "feed" : 3,
          "inboxId" : 3,
          "skills" : ["Java", "Management"],
          "interests" : ["Drones", "Robotics", "Music"],
          "bio" : "Hi, I'm Anna",
          "contact" : "annahall@email.com",
          "projects" : [1, 3]
        }
      },

      "project" : {
        "1":{
          "identifier" : "Okra",
          "_id"         : 1,
          "notificationItems"    : 1,
          "msgs"       : 1,
          "positions"  : [1],
          "description": "Welcome to the show",
          "skillz"     :["Java", "Social", "Sick Card Tricks"]

        },
        "2" : {
          "identifier" : "Apple",
          "_id"         : 2,
          "updates"    : 2,
          "msgs"       : 2,
          "positions"  : [2],
          "description": "Nothing too fancy to do here.",
          "skillz"     :["Java", "Social", "Extreme Apple Picking", "High Level Design"]
        },
        "3" : {
          "identifier" : "Peach",
          "_id"         : 3,
          "updates"    : 3,
          "msgs"       : 3,
          "positions"  : [1,2],
          "description": "We're looking for our friend James. We believe he is in the ocean and we need to develop good drones to find him.",
          "skillz"     :["Drones", "Artificial Intelligence", "Node.js", "Mongo"]
        },
        "4" : {
          "identifier" : "Garbanzo Bean",
          "_id"         : 4,
          "updates"    : 4,
          "msgs"       : 4,
          "positions"        : 4,
          "description": "Our goal is too develop an onlign spell cheker that finds any errands you type.",
          "skillz"     :["Natural Language Processing", "Excel", "Java", "Regex"]
        }
      },

      "inbox" : {
        "1" : {
          "chats": [1,2,3],
          "dummyproj" : ["Okra Team", "Don't Talk About Okra Team"],
          "name": "Jane Doe"
        }
      },

      "chats" : {
        "1": {
            "_id" : 1,
          "messages" : [1,2],
          "associated-users" : [1,2,3],
          "curr": "message-current panel panel-default",
          "name": "Okra Team",
          "color": "read"
        },
        "2": {
            "_id" : 2,
          "messages" : [3,4],
          "associated-users" : [1,2],
          "curr": "message-preview panel panel-default",
          "name": "Joe Doe",
          "color": "unread"
        },
        "3": {
            "_id" : 3,
          "messages" : [5,6],
          "associated-users" : [1,3],
          "curr": "message-preview panel panel-default",
          "name": "Anna Hall",
          "color": "read"
        }
      },

      "messages" : {
        "1" : {
          "_id":1,
          "author": 2,
          "contents" : "Hey guys, what should our main page feed look like?",
          "side":"left"
        },
        "2" : {
          "_id":2,

          "author": 1,
          "contents" : "idk any ideas?",
          "side":"right"
        },
        "3" : {
          "_id":3,

          "author": 2,
          "contents" : "Hello",
          "side":"left"
        },
        "4" : {
          "_id":4,

          "author": 1,
          "contents" : "Hi",
          "side":"right"
        },
        "5" : {
          "_id":5,

          "author":3,
          "contents" : "Wanna join my project?",
          "side":"left"
        },
        "6" : {
          "_id":6,

          "author":1,
          "contents" : "Can you tell me more about it?",
          "side":"right"
        }
      },

      "positions" : {

        "positions" :[

          {
            "_id"         : 1,
            "status" : "filled",
            "user_Name": "Nomar Garciaparra",
            "userId" : 1,
            "project_id" : 1,
            "title"      : "Developer",
            "description": "develop things",
            "skillz"     : ["Java"]
          },

          {
            "_id"         : 1,
            "status" : "open",
            "user_Name"  : null,
            "userId" : null,
            "project_id" : 1,
            "title"      : "developer",
            "description": "develop things",
            "skillz"     : ["Java"]
          }
        ]

      },

      "feeds" :{
        //Each feed has their own set of feed items
        "1" : {

          "id": 1,
          "notificationItems": [1,2],
          "jobItems":[1,2]
        },
        "2" : {
          "_id": 2,
          "notificationItems": [1],
          "jobItems": [1,2]

        }
      },

      "jobItems": {
        "1" : {
          "_id" : 1,
          "title" : "Software Engineering Position at Okra Team",
          "description" : "apply within!!!!",
          "tags" : ["Drones", "Finance"]
        },

        "2" : {
          "_id" : 2,
          "title" : "Quality Assurance Position at Apple Team",
          "description" : "Please taste our apples we are too afraid.",
          "tags" : ["Apples", "Sports"]
        }

      },


      "notificationItems" : {
        "1" : {
          "_id" : 1,
          "title" : "Update on Garbanzo Bean Team",
          "description" : "We are running out of bean steam and may be closing down in July :/."
        } ,

        "2" : {
            "_id" : 2,
            "title" : "Update on Apple Team",
            "description" : "Things couldn't be any better, but could we get more VC support?"
          }
      }

};

var data = JSON.parse(localStorage.getItem(startupName));
if (data === null) {
  data = JSONClone(initialData);
}

/**
 * A dumb cloning routing. Serializes a JSON object as a string, then
 * deserializes it.
 */
function JSONClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Emulates reading a "document" from a NoSQL database.
 * Doesn't do any tricky document joins, as we will cover that in the latter
 * half of the course. :)
 */
export function readDocument(collection, id) {
  // Clone the data. We do this to model a database, where you receive a
  // *copy* of an object and not the object itself.
  return JSONClone(data[collection][id]);
}

/**
 * Emulates writing a "document" to a NoSQL database.
 */
export function writeDocument(collection, changedDocument) {
  var id = changedDocument._id;
  // Store a copy of the object into the database. Models a database's behavior.
  data[collection][id] = JSONClone(changedDocument);
  // Update our 'database'.
  localStorage.setItem(startupName, JSON.stringify(data));
}

/**
 * Adds a new document to the NoSQL database.
 */
export function addDocument(collectionName, newDoc) {
  var collection = data[collectionName];
  var nextId = Object.keys(collection).length;
  while (collection[nextId]) {
    nextId++;
  }
  newDoc._id = nextId;
  writeDocument(collectionName, newDoc);
  return newDoc;
}

/**
 * Reset our browser-local database.
 */
export function resetDatabase() {
  localStorage.setItem(startupName, JSON.stringify(initialData));
  data = JSONClone(initialData);
}

/**
 * Reset database button.
 */
class ResetDatabase extends React.Component {
  render() {
    return (
      <button className="btn btn-default" type="button" onClick={() => {
        resetDatabase();
        window.alert("Database reset! Refreshing the page now...");
        document.location.reload(false);
      }}>Reset Mock DB</button>
    );
  }
}

ReactDOM.render(
  <ResetDatabase />,
  document.getElementById('db-reset')
);

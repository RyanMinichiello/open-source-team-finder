import React from 'react';
import ReactDOM from 'react-dom';

var initialData = {
    // The 'user' collection; contains all the users in our system
    "users": {
        // This user has id "1" and it is Jane
        "1" : {
            "_id" : 1,
            "fullName" : "Jane Doe",
            // ID of Jane's feed
            "feed" : 1,
            // ID of Jane's Inbox
            "inbox" : 1,
            "skills" : ["Scala", "Node.js", "Agile Methodology"],
            "interests" : ["Finance", "Clean Energy"],
            "bio" : "Hi my name is Jane",
            "contact" : "myemail@email.com"
        }
    },
    "project" : {
        //null
    },
    "inbox" : {
        //null
    },
    "message" : {

    },
    "positions" : {

    },
    "updates" : {

    },
    "feeds" :{

    },
    "feed-item" : {

    }
};

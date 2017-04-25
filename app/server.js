import {readDocument, writeDocument, addDocument} from './database.js';

/**
 * Emulates how a REST call is *asynchronous* -- it calls your function back
 * some time in the future with data.
 */
function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 4);
}

/**
 * Adds a new status update to the database.
 */

 export function sendMessage(chatId, contents, cb) {
     var chatData = readDocument('chats', chatId);

     var newMessage = {
         "author" : 1,
         "contents" : contents,
         "side" : "right"
     }

     newMessage = addDocument('messages', newMessage);


     chatData["messages"].push(newMessage._id);
     console.log(chatData["messages"]); // IT IS ADDING THE NEW MESSAGE! in console though, not database

     writeDocument('chats', chatData);
     console.log(chatData["messages"]);
     emulateServerReturn(chatData, cb);
 }

export function sendNewMessages(user, contents,cb) {
  // If we were implementing this for real on an actual server, we would check
  // that the user ID is correct & matches the authenticated user. But since
  // we're mocking it, we can be less strict.

  // Get the current UNIX time.
  var time = new Date().getTime();
  // The new status update. The database will assign the ID for us.
  var newMessages = {

      "author": user,
      "contents": contents,
      "side":"right"

  };

  // Add the status update to the database.
  // Returns the status update w/ an ID assigned.
  newMessages = addDocument('messages', newMessages);

  // Add the status update reference to the front of the current user's feed.
  var userData = readDocument('users', user);
  var inboxData = readDocument('inbox', userData.inboxId);
  var chatData = readDocument('chats', inboxData.chats);
  var messageData = readDocument('messages', chatData.messages);
  messageData.contents.unshift(newMessages._id);

  // Update the feed object.
  writeDocument('messages', messageData);

  // Return the newly-posted object.
  emulateServerReturn(newMessages, cb);
}

export function getInboxData(inbox_id, cb){
  var inboxData = readDocument('inbox', inbox_id);
  emulateServerReturn(inboxData, cb);
}

export function getMessageData(message_id, cb){
  var messageData = readDocument('messages', message_id);
  emulateServerReturn(messageData, cb);
}

export function getChatData(chat_id, cb){
  var chatData = readDocument('chats', chat_id);
  emulateServerReturn(chatData, cb);
}


export function getProjectData(project_id, cb){

  var projectData = readDocument('project', project_id);
  emulateServerReturn(projectData, cb);

}


export function getUserInfo(user_id, cb) {
  var userData = readDocument('users', user_id);
  emulateServerReturn(userData, cb);
}


export function getMainFeedJobItemData(user, cb) {
  // Get the User object with the id "user".
  var userData = readDocument('users', user);
  // Get the Feed object for the user.
  var feedData = readDocument('feeds', userData.feed);
  // Map the Feed's FeedItem references to actual FeedItem objects.
  // Note: While map takes a callback function as an argument, it is
  // synchronous, not asynchronous. It calls the callback immediately.
  feedData.contents = feedData.contents.map(getMainFeedItemSync);
  // Return FeedData with resolved references.
  // emulateServerReturn will emulate an asynchronous server operation, which
  // invokes (calls) the "cb" function some time in the future.
  emulateServerReturn(feedData, cb);
}

function getMainFeedItemSync(feedItemId) {
  var feedItem = readDocument('feedItems', feedItemId);
  // Resolve 'like' counter.
  feedItem.likeCounter =
    feedItem.likeCounter.map((id) => readDocument('users', id));
  // Assuming a StatusUpdate. If we had other types of
  // FeedItems in the DB, we would
  // need to check the type and have logic for each type.
  feedItem.contents.author =
    readDocument('users', feedItem.contents.author);
  // Resolve comment author.
  feedItem.comments.forEach((comment) => {
    comment.author = readDocument('users', comment.author);
  });
  return feedItem;
}

export function getopen_positionData(pid, cb){
  var positions = readDocument('positions', 'positions');
  var open = [];
  for(var i=0; i< positions.length; i++){
    if( positions[i].project_id == pid && positions[i].status == 'open'){
      open.push(positions[i]);
    }
  }
  emulateServerReturn(open, cb);
}

export function getfilled_positionData(pid, cb){
  var positions = readDocument('positions', 'positions');
  var filled = [];
  for(var i=0; i< positions.length; i++){
    if( positions[i].project_id == pid && positions[i].status == 'filled'){
      filled.push( positions[i]);
    }
  }
  emulateServerReturn(filled, cb);

}

export function getProfileData(id, cb){

  var profileData = readDocument('users', id);
  emulateServerReturn(profileData, cb);

}

export function getNotificationFeedData(user, cb) {
  // Get the User object with the id "user".
  var userData = readDocument('users', user);
  // Get the Feed object for the user.
  var feedData = readDocument('feeds', userData.feed);

  //This is a list... Should I change the way I save this????
  var notificationList = [];

  for(var i = 0; i < feedData.notificationItems.length; i ++ ) {
    notificationList.push(readDocument('notificationItems', feedData.notificationItems[i]));
  }
  emulateServerReturn(notificationList, cb)

}

export function getJobFeedData(user, cb) {
  // Get the User object with the id "user".
  var userData = readDocument('users', user);
  // Get the Feed object for the user.
  var feedData = readDocument('feeds', userData.feed);

  //This is a list... Should I change the way I save this????
  var jobList = [];

  for(var i = 0; i < feedData.jobItems.length; i ++ ) {
    jobList.push(readDocument('jobItems', feedData.jobItems[i]));
  }
  emulateServerReturn(jobList, cb)

}

export function getProjectUpdates(id, cb){
  var notifications = readDocument('notificationItems', id)
  emulateServerReturn(notifications, cb);
}

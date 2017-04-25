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
export function sendNewMessages(user, contents,cb) {
  // If we were implementing this for real on an actual server, we would check
  // that the user ID is correct & matches the authenticated user. But since
  // we're mocking it, we can be less strict.

  // Get the current UNIX time.
  //var time = new Date().getTime();
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

export function getAllJobs(user, cb) {
  // Get the User object with the id "user".
  var userData = readDocument('users', user);
  //get the array of Job Data
  var allJobData = readDocument('allJobItems', userData.allJobItems);
  var jobList = [];

  for(var i = 0; i < allJobData.jobItems.length; i ++ ) {
    jobList.push(readDocument('jobItems', allJobData.jobItems[i]));
  }
  emulateServerReturn(jobList, cb);
}

export function getProjectUpdates(id, cb){
  var notifications = readDocument('notificationItems', id)
  emulateServerReturn(notifications, cb);
}

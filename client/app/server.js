//import {readDocument, writeDocument, addDocument} from './database.js';

/**
 * Emulates how a REST call is *asynchronous* -- it calls your function back
 * some time in the future with data.
 */
/*function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 4);
}*/

/**
 * Adds a new status update to the database.
 */

 /*export function sendMessage(chatId, contents, cb) {
     var chatData = readDocument('chats', chatId);

     var newMessage = {
         "author" : 1,
         "contents" : contents,
         "side" : "left"
     }

     newMessage = addDocument('messages', newMessage);


     chatData["messages"].push(newMessage._id);
     //console.log(chatData["messages"]); // IT IS ADDING THE NEW MESSAGE! in console though, not database

     writeDocument('chats', chatData);
     //console.log(chatData["messages"]);
     writeDocument('messages', newMessage);
     emulateServerReturn(chatData, cb);
 }*/




export function createProject(userId, identifier, description, tags, skillz, startDate, endDate,
  inProgress, projId, updates, msgs, positions, cb) {
  console.log("MADE IT TO EXPORT FUNCT");
  console.log(identifier);

  sendXHR('POST', '/project', {
    userId: userId,
    identifier : identifier,
    id : projId,
    notificationItems : updates,
    msgs : msgs,
    positions : positions,
    description : description,
    skillz : skillz,
    startDate : startDate,
    endDate : endDate,
    inProgress : inProgress,
    tags : tags
  }, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}


export function getChatListItems(user_id, cb) {
  sendXHR('GET', '/users/' + user_id + '/chats', undefined, (xhr) => {
   cb(JSON.parse(xhr.responseText));
  });
}

export function getMessageListItems(user_id, chat_id, cb){
  sendXHR('GET', 'users/' + user_id + '/messages/' + chat_id, undefined, (xhr) =>{
    cb(JSON.parse(xhr.responseText));
  })
}

export function getInboxData(inbox_id, cb){
  sendXHR('GET', 'users/000000000000000000000001/inbox/'+inbox_id, undefined, (xhr) =>{
    cb(JSON.parse(xhr.responseText));
  });
}

export function getMessageData(message_id, cb){
  sendXHR('GET', 'users/0000000000000000000000011/message/'+message_id, undefined, (xhr) =>{
    cb(JSON.parse(xhr.responseText));
  });
}

export function getChatData(chat_id, cb){
  sendXHR('GET', 'users/000000000000000000000001/chats/'+chat_id, undefined, (xhr) =>{
    cb(JSON.parse(xhr.responseText));
  });
}

export function postNewProject(project_id, cb){
  sendXHR('POST', '/user/000000000000000000000001/project'+project_id, undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}


export function getProfileData(id, cb){

    sendXHR('GET', '/profile/000000000000000000000001', undefined, (xhr) => {
        cb(JSON.parse(xhr.responseText));
    });
  /*var profileData = readDocument('users', id);
  emulateServerReturn(profileData, cb);*/

}

export function getUserInfo(id, cb){

    sendXHR('GET', '/users/' + id, undefined, (xhr) => {
        cb(JSON.parse(xhr.responseText));
    });
}

//SIDEBAR Pills
export function getProjectPillData(userid, cb) {
  sendXHR('GET', '/users/'+ userid + '/sidebar-projects', undefined, (xhr) => {
   cb(JSON.parse(xhr.responseText));
  });
}

//Job Board
export function getAllJobs(userid, cb) {
  sendXHR('GET', '/job-board/'+ userid + '/jobitems', undefined, (xhr) => {
   cb(JSON.parse(xhr.responseText));
  });
}




export function getProjectData(project_id, cb){


  sendXHR('GET', '/user/000000000000000000000001/project/'+project_id, undefined, (xhr) => {
   cb(JSON.parse(xhr.responseText));
 });

}


export function getopen_positionData(pid, cb){
  sendXHR('GET', '/user/1/open/pos_id/'+pid, undefined, (xhr) => {
   cb(JSON.parse(xhr.responseText));
 });
}

export function getfilled_positionData(pid, cb){
  sendXHR('GET', '/user/1/filled/pos_id/'+pid, undefined, (xhr) => {
   cb(JSON.parse(xhr.responseText));
 });
}




//MAIN FEED
export function getJobFeedData(userid, cb) {
   sendXHR('GET', '/feed/' + userid + '/jobitems', undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
   });
 }

 //MAIN FEED
export function getNotificationFeedData(userid, cb) {
  sendXHR('GET', '/feed/' + userid + '/notificationitems', undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}


export function getProjectUpdates(id, cb){
  sendXHR('GET', '/user/1/project/'+id, undefined, (xhr) => {
   cb(JSON.parse(xhr.responseText));
 });
}

//XHR HELPER FUNCTION
var token = 'eyJpZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMSJ9'; // <-- Put your base64'd JSON token here
/**
 * Properly configure+send an XMLHttpRequest with error handling,
 * authorization token, and other needed properties.
 */
function sendXHR(verb, resource, body, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open(verb, resource);
  xhr.setRequestHeader('Authorization', 'Bearer ' + token);

  // The below comment tells ESLint that FacebookError is a global.
  // Otherwise, ESLint would complain about it! (See what happens in Atom if
  // you remove the comment...)
  /* global SiteError */

  // Response received from server. It could be a failure, though!
  xhr.addEventListener('load', function() {
    var statusCode = xhr.status;
    var statusText = xhr.statusText;
    if (statusCode >= 200 && statusCode < 300) {
      // Success: Status code is in the [200, 300) range.
      // Call the callback with the final XHR object.
      cb(xhr);
    } else {
      // Client or server error.
      // The server may have included some response text with details concerning
      // the error.
      var responseText = xhr.responseText;
      SiteError('Could not ' + verb + " " + resource + ": Received " +  statusCode + " " + statusText + ": " + responseText);
    }
  });

  // Time out the request if it takes longer than 10,000
  // milliseconds (10 seconds)
  xhr.timeout = 10000;

  // Network failure: Could not connect to server.
  xhr.addEventListener('error', function() {
    SiteError('Could not ' + verb + " " + resource + ": Could not connect to the server.");
  });

  // Network failure: request took too long to complete.
  xhr.addEventListener('timeout', function() {
    SiteError('Could not ' + verb + " " + resource + ": Request timed out.");
  });

  switch (typeof(body)) {
    case 'undefined':
      // No body to send.
      xhr.send();
      break;
    case 'string':
      // Tell the server we are sending text.
      xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      xhr.send(body);
      break;
    case 'object':
      // Tell the server we are sending JSON.
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      // Convert body into a JSON string.
      xhr.send(JSON.stringify(body));
      break;
    default:
      throw new Error('Unknown body type: ' + typeof(body));
  }
}

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

export function getProjectData(project_id, cb){

  var projectData = readDocument('project', project_id);
  emulateServerReturn(projectData, cb);

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
  var open_positions = readDocument('positions', 'open_positions');
  var open = [];
  for(var i=0; i<open_positions.length; i++){
    if(open_positions[i].project_id == pid){
      open.push(open_positions[i]);
    }
  }
  emulateServerReturn(open, cb);
}

export function getfilled_positionData(pid, cb){
  var filled_positions = readDocument('positions', 'filled_positions');
  var filled = [];
  for(var i=0; i<filled_positions.length; i++){
    if(filled_positions[i].project_id == pid){
      filled.push(filled_positions[i]);
    }
  }
  emulateServerReturn(filled, cb);

}

export function getProfileData(id, cb){

  var profileData = readDocument('users', id);
  emulateServerReturn(profileData, cb);

}

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

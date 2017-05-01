

export function calculateRecommendation(user_interests, user_skills, job_tags) {
  var user_tags = user_interests.concat(user_skills);
  var shared_item_count = 0;
  for(var i = 0; i < job_tags.length; i++) {
    if(user_tags.indexOf(job_tags[i]) !== -1) {
      shared_item_count++;
    }
  }
  var similarityPercentage = shared_item_count / job_tags.length;
  var ret = "";
  if (similarityPercentage >= 0.66){
    ret =  "gold-button";
  } else if (similarityPercentage >= 0.33) {
    ret =  "silver-button";
  } else {
    ret =  "bronze-button";
  }
  return ret;
}

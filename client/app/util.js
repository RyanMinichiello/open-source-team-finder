export function calculateRecommendation(user_interests, user_skills, job_tags) {
  var user_tags = user_interests.concat(user_skills);
  var shared_item_count = 0;
  console.log(user_tags);
/*  for(var i = 0; i < user_tags.length; i++) {
    if(job_tags.indexOf(user_tags[i]) !== -1) {

    }
  }
*/
  var similarityPercentage = 0.75;
  if (similarityPercentage >= 0.66){
    return "gold-button";
  } else if (similarityPercentage >= 0.33) {
    return "silver-button";
  } else {
    return "bronze-button";
  }
}

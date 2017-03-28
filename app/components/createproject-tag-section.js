import React from 'react';
import TagItem from './createproject-tag-item.js'


export default class CreateProjectTagSection extends React.Component {
  render() {
    return (


      <div>

        <div className= "attribute-box">
         <div className= "attribute">Areas of Interest (5 Max):</div>
         <input placeholder="Add Tags" />
           <button type="button" id="add-more-tags-btn" className="btn btn-default">
           Add Tag
           </button>
           <TagItem />
        </div>

</div>
);
}
}

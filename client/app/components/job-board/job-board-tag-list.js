import React from 'react';
import JobBoardTagItem from './job-board-tag-item.js';

export default class JobBoardTagList extends React.Component {

  generateTags() {
    if(this.props.tags) {
      return this.props.tags.map(this.createTagItem);
    }
  }

  createTagItem(item) {
    return <JobBoardTagItem tag={item} />;
  }


  render() {
    return (
      <div className="col-md-6">
        <button type="button" className="btn btn-default tag_title">
          <span className="glyphicon glyphicon-tag"> Tags:</span>
        </button>
        {this.generateTags()}
      </div>
    )
  }
}

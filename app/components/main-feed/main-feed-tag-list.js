import React from 'react';
import MainFeedTagItem from './main-feed-tag-item.js';

export default class MainFeedTagList extends React.Component {


  genererateTags() {
    if(this.props.tags) {
      return this.props.tags.map(this.createTagItem);
    }
  }

  createTagItem(item) {
    return <MainFeedTagItem tag={item} />;
  }


  render() {
    return (
      <div className="col-md-6">
        <div>
          <button type="button" className="btn btn-default tag_title">
            <span className="glyphicon glyphicon-tag"> Tags:</span>
          </button>
            {this.genererateTags()}
        </div>

      </div>
    )
  }
}

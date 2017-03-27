import React from 'react';

export default class MainFeedTagList extends React.Component {
  render() {
    return (
      <div className="col-md-6">
        <button type="button" className="btn btn-default tag_title">
          <span className="glyphicon glyphicon-tag"> Tags:</span>
        </button>
        {React.Children.map(this.props.children, function(child) {
          return (
            <button type="button" className="btn btn-default tag_list">
              {child}
            </button>
          )
        })}
        <button type="button" className="btn btn-default tag_list">
          <MainFeedTagItem />
        </button>
      </div>
    )
  }
}

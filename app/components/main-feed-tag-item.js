import React from 'react';

export default class MainFeedTagItem extends React.Component {
  render() {
    return (
      <div>
        <a href="#">{this.props.tag}</a>
      </div>
    );
  }
}

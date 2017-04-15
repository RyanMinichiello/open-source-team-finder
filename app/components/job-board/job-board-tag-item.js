import React from 'react';

export default class JobBoardTagItem extends React.Component {
  render() {
    return (
      <div>
        <div className="tag">
        <a href="#">{this.props.tag}</a>
        </div>
      </div>
    );
  }
}

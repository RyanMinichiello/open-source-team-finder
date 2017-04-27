import React from 'react';

export default class CreateProjectTagItem extends React.Component {
  render() {
    return (
      <div>
        <div className="tag">
        <div href="#">{this.props.tag}</div>
        </div>
      </div>
    );
  }
}

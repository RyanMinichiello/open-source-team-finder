import React from 'react';
//import JobBoardPost from './job-board-post.js'

export default class JobBoardMainFeed extends React.Component {
  render() {
    return (
        <ul className="job-list">
          <br />
          {React.Children.map(this.props.children, function(child) {
            return (
              <li className="media">
                {child}
              </li>
            )
          })}
        </ul>
    );
  }
}

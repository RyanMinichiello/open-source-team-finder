import React from 'react';

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

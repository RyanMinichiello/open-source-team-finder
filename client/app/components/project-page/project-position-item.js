import React from 'react';

export default class PositionItem extends React.Component {
  render(){
    return(
      <div>
        <div className="position-item">{this.props.position.title} : {this.props.position.description}</div>
      </div>
    )
  }
}

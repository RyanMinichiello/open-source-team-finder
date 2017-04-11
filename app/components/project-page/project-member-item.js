import React from 'react';

export default class MemberItem extends React.Component {


  render(){
    return(
      <div>
        <div className="project-member">{this.props.position.name} : {this.props.position.title}</div>
      </div>

    )
  }

}

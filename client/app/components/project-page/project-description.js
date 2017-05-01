import React from 'react';
import MemberItem from './project-member-item.js';
import SkillItem from './project-skill-item.js';
import {getfilled_positionData} from '../../server.js';

export default class ProjectDescription extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
        contents : [],
        pid      : this.props.positionID
      };
   }


  generateSkills(list){
    if (list) {
      return list.map(this.createSkill);
    }
  }

  createSkill(item){
    return <SkillItem key={item} skill={item}/>
  }


  getListings(){
    if(this.state.listings){
      if(this.state.listings.length != 0){
        return this.state.listings.map(this.createPosition);
      }else{
        return (<p>Sorry there are no open positions at this time</p>);
      }
    }
  }

  createPosition(item){
    return <MemberItem key={item.id} position={item} />
  }

  refresh() {
    this.setState({pid : this.props.positionID});
    getfilled_positionData("000000000000000000000001", (listings) => {
     this.setState({listings : listings});
   });
  }


  componentDidMount() {
    this.refresh();
  }


  render(){
    return(
      <div className="project-description col-md-4">

        <h3>Description</h3>
        <div>{this.props.projectDescription}</div>
        <h3>Skills Needed</h3>
          {this.generateSkills(this.props.projectSkillz)}
        <br/><br/>
        <h3>Team</h3>
          {this.getListings(this.props.projectSkillz)}

      </div>

    )
  }
}

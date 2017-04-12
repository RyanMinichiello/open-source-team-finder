import React from 'react';
import ProfileSkillItem from './profile_skill_item.js'

export default class Profile_Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contents : [],
            pid      : 1
        };
    }

    generateSkills(list) {
        if(list) {
            return list.map(this.createSkill);
        }
    }

    createSkill(item) {
        return <ProfileSkillItem key={item} skill = {item}/>
    }

    refresh() {
        this.setState({pid: this.props.profileID});
    }


    render() {
        return (
            <div>
            <div className="profile-skills col-md-4 mid-col">
              <h3>
                  {this.props.name}
              </h3>
              <h3>Skills</h3>
                {this.generateSkills(this.props.skills)}
                <br/><br/>
              /*<div className="btn-group">
                  <button type="button" className="btn btn-skill-interest" >
                  {this.props.first_skill}
                  </button>
                  <button type="button" className="btn btn-skill-interest  " >
                  {this.props.second_skill}
                  </button>
                  <button type="button" className="btn btn-skill-interest  " >
                  {this.props.third_skill}
                  </button>
                  <button type="button" className="btn btn-skill-interest  " >
                  {this.props.fourth_skill}
                  </button>
              </div>*/
              <h3>Interests</h3>
              <div className="btn-group">
                  <button type="button" className="btn btn-skill-interest  " >
                  {this.props.first_interest}
                  </button>
                  <button type="button" className="btn btn-skill-interest  " >
                  {this.props.second_interest}
                  </button>
              </div>
            </div>
        </div>
        )
    }
}

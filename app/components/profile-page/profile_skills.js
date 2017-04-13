import React from 'react';
import ProfileButton from './profile_button.js'

export default class Profile_Skills extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                contents : [],
                pid : 1
            };
        }

        generateButtonGroup(list) {
            if(list) {
                return list.map(this.createButton);
            }
        }

        createButton(item) {
            return <ProfileButton key={item} skill = {item}/>
        }
        refresh() {
            /*TODO*/
        }

        coponentDidMount() {
            this.refresh();
        }

       render() {
        return (
            <div>
            <div className="profile-skills col-md-4 mid-col">
              <h3>
                  {this.props.name}
              </h3>
              <h3>Skills</h3>
              <div className="btn-group">
                  {this.generateButtonGroup(this.props.skills)}
                  /*<button type="button" className="btn btn-skill-interest" >
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
                  </button>*/
              </div>
              <h3>Interests</h3>
              <div className="btn-group">
                  {this.generateButtonGroup(this.props.interests)}
                  /*<button type="button" className="btn btn-skill-interest  " >
                  {this.props.first_interest}
                  </button>
                  <button type="button" className="btn btn-skill-interest  " >
                  {this.props.second_interest}
                  </button>*/
              </div>
            </div>
        </div>
        )
    }
}

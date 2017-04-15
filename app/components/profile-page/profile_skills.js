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
              </div>
              <h3>Interests</h3>
              <div className="btn-group">
                  {this.generateButtonGroup(this.props.interests)}
              </div>
            </div>
        </div>
        )
    }
}

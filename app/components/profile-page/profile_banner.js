import React from 'react';

export default class Profile_Banner extends React.Component {
    render() {
        return (
            <div>
            <div className="profile-banner row">
                <img className = "banner-img" src={this.props.user_banner}/>
            </div>
            <div className="profile-image">
                <img className = "user-img" src={this.props.user_img}/>
            </div>
        </div>
        )
    }
}

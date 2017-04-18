import React from 'react';

export default class Profile_About extends React.Component {
    render() {
        return (
            <div>
            <div className="profile-about col-md-4">
              <h3>Bio</h3>
              <div>{this.props.about}</div>
              <h3>Contact</h3>
              <div className="skill-item">{this.props.email}
              </div>
              <div className="skill-item">{this.props.contact}
              </div>
              <div>

                      <button type="button" className="btn btn-info btn-lg"  id= "chat-pop" data-toggle="modal" data-target="#myModal">Message</button>

                  <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">

                      <div className="modal-content">
                        <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal">&times;</button>
                          <h4 className="modal-title">Message</h4>
                        </div>
                        <div className="modal-body">
                          <p>Hi Lynda, I'm Jane working with the Okra Project.  We are very impressed by your skillset and are hoping you'll join our team!</p>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-default" data-dismiss="modal">Send</button>
                        </div>
                      </div>

                    </div>
                  </div>
              

                    </div>
                </div>
            </div>
        )
    }
}

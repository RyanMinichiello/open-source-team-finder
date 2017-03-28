import React from 'react';

export default class Profile_Banner extends React.Component {
    render() {
        return (
            <div>
            <div className="project-header row">
                <img className = "banner-img" src={this.props.user_banner}/>
              <div className="header-buttons">
                <div className="container pull-right">
                    <button type="button" className="btn btn-info btn-lg pull-right"  id= "chat-pop" data-toggle="modal" data-target="#myModal">Message</button>

                    <div className="modal fade" id="myModal" role="dialog">
                      <div className="modal-dialog">

                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Message</h4>
                          </div>
                          <div className="modal-body">
                            <p>{this.props.direct_message}</p>
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
            <div className="project-banner">
                <img className = "user-img" src={this.props.user_img}/>
            </div>
        </div>
        )
    }
}

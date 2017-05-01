import React from 'react';
import {sendMessage} from '../../server.js';
import {getChatData} from '../../server.js';


export default class Profile_About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            chatData : []
        };
    }

    handleMessage(e) {
        e.preventDefault();
        var messageText = this.state.value.trim();
        if(messageText !== "") {
            sendMessage("000000000000000000000001", messageText, () => {
                this.refresh();
            });
            this.setState({value: ""});
        }
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({value: e.target.value});
    }

    refresh() {
        getChatData("000000000000000000000001", (chatData) => {
            this.setState(chatData);
        });
    }

    render() {
        return (
            <div>
            <div className="profile-about col-md-4">
              <h3>Bio</h3>
              <div>{this.props.about}</div>
              <h3>Contact</h3>
              <div className="contact-item">{this.props.email}
              </div>
              <div className="contact-item">{this.props.contact}
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
                            <div className="col-sm-12"><textarea className="form-control" id="inputBody" rows="6" value={this.state.value} onChange={(e) => this.handleChange(e)}></textarea></div>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-default" data-dismiss="modal" onClick={(e) => this.handleMessage(e)}>Send</button>
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

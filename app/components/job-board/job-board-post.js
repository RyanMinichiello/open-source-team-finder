import React from 'react';

export default class JobBoardPost extends React.Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body job-post">
          <div className="job-title">
            <h3>{this.props.project} - {this.props.position_title}</h3>
          </div>
          <div className="job-desc">
            <p>
              {this.props.position_description}
            </p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-default tag-title">
                <span className="glyphicon glyphicon-tag"> Tags:</span>
              </button>
              <button type="button" className="btn btn-default tag-list">
                <a href="#">Tag1</a>
              </button>
              <button type="button" className="btn btn-default tag-list">
                <a href="#">Tag2</a>
              </button>
            </div>
            <div className="col-md-6">
              <div className="pull-right"> Ranking:
                <button type="button" className="btn btn-default gold-button">
                  <span><img src="img/favicon.ico" className="reco-icon"/></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

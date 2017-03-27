import React from 'react';

export default class JobBoardPost extends React.Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body job-post">
          <div className="job-title">
            <h3>PROJECT1 - POSITION TITLE</h3>
          </div>
          <div className="job-desc">
            <p>
              Description: Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nam eleifend tristique nunc fermentum
              malesuada. Praesent congue, elit ac tempus laoreet, dolor
              augue vehicula massa, vitae eleifend sem nunc sit amet
              diam. Maecenas dignissim suscipit purus id luctus.
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

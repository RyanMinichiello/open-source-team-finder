import React from 'react';
import JobBoardTagList from './job-board-tag-list.js'

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
            <JobBoardTagList />
            <div className="col-md-6">
              <div className="pull-right">
                Ranking: <button type="button" className={this.props.rankingType} >
                <span><img src="img/favicon.ico" className="best-fit-ico"/></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

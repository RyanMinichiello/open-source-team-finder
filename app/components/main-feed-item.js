import React from 'react';
import MainFeedTagList from './main-feed-tag-list.js'

export default class MainFeedItem extends React.Component {
  render() {
    return (
        <div className="panel-body job-post">
          <div className="job-title">
            <h3>
              <span className="glyphicon {this.props.glyph}"></span>
              <a href='#'> {this.props.feedItemName}</a>
            </h3>
          </div>
          <div className="job-desc">
            <p>
               {this.props.postData}
            </p>
          </div>
          <div className="row">
            <MainFeedTagList/>
            <div className="col-md-6">
              <div className="pull-right">
                Ranking: <button type="button" className="btn btn-default gold-button">
                <span><img src="img/favicon.ico" className="best-fit-ico"/></span>
                </button>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

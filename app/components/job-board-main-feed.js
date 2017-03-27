import React from 'react';
import ReactDOM from 'react-dom';

class JobBoardMainFeed extends React.Component {
  render() {
    return (
      <div className="col-md-10 job-feed">
        <div className="container filter-bar">
          <h4> <span className="pull-left filter-title">FILTERS: </span>
            <div className="navbar-header">
              <form className="navbar-form navbar-left" role="search">
                <div className="input-group">
                  <input type="text fb-search" className="form-control" placeholder="Add Interest or Skill" />
                    <span className="input-group-btn">
                      <button type="submit" className="btn btn-default hack-fix">
                        <span className="glyphicon glyphicon-plus-sign"></span>
                      </button>
                    </span>
                  </div>
                </form>
            </div>
            <div className="filter-tags">
              <button type="button" className="btn btn-default tag-list">
                <a href="#">Tag1</a>
              </button>
              <button type="button" className="btn btn-default tag-list">
                <a href="#">Tag2</a>
              </button>
            </div>
          </h4>
        </div>
        <div className="job-list">
          <div className="panel panel-default first-panel">
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
          <div className="panel panel-default">
            <div className="panel-body job-post">
              <div className="job-title">
                <h3>PROJECT2 - POSITION TITLE</h3>
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
                    <button type="button" className="btn btn-default silver-button">
                      <span><img src="img/favicon.ico" className="reco-icon"/></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-body job-post">
              <div className="job-title">
                <h3>PROJECT3 - POSITION TITLE</h3>
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
                    <button type="button" className="btn btn-default silver-button">
                      <span><img src="img/favicon.ico" className="reco-icon"/></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-body job-post">
              <div className="job-title">
                <h3>PROJECT4 - POSITION TITLE</h3>
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
                    <button type="button" className="btn btn-default bronze-button">
                      <span><img src="img/favicon.ico" className="reco-icon"/></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <JobBoardMainFeed />,
  document.getElementById('job-board-main-feed')
);

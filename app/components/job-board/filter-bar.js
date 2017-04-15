import React from 'react';
import JobBoardTagList from './job-board-tag-list.js'

export default class FilterBar extends React.Component {
  render() {
    return (
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
              <JobBoardTagList />
          </h4>
        </div>
    );
  }
}

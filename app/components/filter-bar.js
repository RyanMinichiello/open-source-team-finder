import React from 'react';

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
    );
  }
}

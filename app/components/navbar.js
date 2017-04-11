import React from 'react';

export default class Navbar extends React.Component{
  
  render() {
    return (
      <div>
        <nav className="navbar navbar-fixed-top navbar-default" id="nav-color">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="main-feed.html">
                <span><img src="img/logo_notext.png" className="logo pull-left"/></span>
              </a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <form className="navbar-form navbar-left" role="search">
                <div className="input-group">
                  <input type="text fb-search" className="form-control" placeholder="Search OSTF"/>
                  <span className="input-group-btn">

                    <button type="submit" className="btn btn-default">
                      <span className="glyphicon glyphicon-search"></span>
                    </button>
                  </span>
                </div>
              </form>
              <div className="nav navbar-nav navbar-right">
                <div className="btn-toolbar pull-right" role="toolbar">
                  <div className="btn-group" role="group">
                    <a href="profile.html" >
                      <button type="button" className="btn btn-default navbar-btn">
                        <span className="glyphicon glyphicon-user"></span>
                        {this.props.self_name}
                      </button>
                    </a>
                  </div>
                  <div className="btn-group" role="group">
                    <a href="inbox.html">
                      <button type="button" className="btn btn-default navbar-btn">

                        <span className="glyphicon glyphicon-envelope"></span>
                      </button>
                    </a>
                  </div>
                  <div className="btn-group" role="group">
                    <a href="createproj.html">
                      <button type="button" className="btn btn-create navbar-btn">
                        +Create Project
                      </button>
                    </a>
                  </div>
                  <div className="btn-group" role="group">
                    <div className="btn-group" role="group">
                      <button type="button" className="btn btn-default navbar-btn">
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

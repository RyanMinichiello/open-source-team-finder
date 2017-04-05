import React from 'react';

export default class Sidebar extends React.Component {
    render() {
        return (
            <div>
            <div className="text-center col-md-2 side-bar">
               <ul className="nav nav-pills nav-stacked">
                  <li role="presentation">PROJECTS</li>
                  <li role="presentation"><a href="#"> {this.props.first_active} </a> </li>
                  <li role="presentation"><a href="#"> {this.props.second_active} </a> </li>
                  <li role="presentation"><a href="#"> {this.props.third_active} </a> </li>
                  <li role="presentation"><a href="#"> {this.props.fourth_active}</a> </li>
                  <li role="presentation"><a href="#"><span className="glyphicon glyphicon-stats"></span>
                     Job Board</a>
                  </li>
               </ul>
           </div>
       </div>
        )
    }
}

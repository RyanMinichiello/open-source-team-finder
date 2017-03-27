import React from 'react';

export default class Profile_Sidebar extends React.Component {
    render() {
        return (
            <div>
            <div className="col-md-2 side-bar">
               <ul className="nav nav-pills nav-stacked">
                  <li role="presentation">PROJECTS</li>
                  <li role="presentation"><a href="#"> Project 1 </a> </li>
                  <li role="presentation"><a href="#"> Project 2 </a> </li>
                  <li role="presentation"><a href="#"> Project 3 </a> </li>
                  <li role="presentation"><a href="#"> Project 4 </a> </li>
                  <li role="presentation"><a href="#"><span className="glyphicon glyphicon-stats"></span>
                     Job Board</a>
                  </li>
               </ul>
           </div>
       </div>
        )
    }
}

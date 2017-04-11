import React from 'react';
import PositionItem from "./project-position-item";
import {getopen_positionData} from '../../server';

export default class ProjectPositions extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
        contents : []
      };
   }

   getListings(){
     if(this.state.listings){
       if(this.state.listings.length != 0){
         return this.state.listings.map(this.createPosition);
       }else{
         return (<p>Sorry there are no open positions at this time</p>);
       }
     }
   }

   createPosition(item){
     return <PositionItem key={item.id} position={item} />
   }

   refresh() {
     this.setState({pid : this.props.positionID});
     getopen_positionData(1, (listings) => {
      this.setState({listings : listings});
    });
   }


   componentDidMount() {
     this.refresh();
   }
  render(){
    return(
      <div className="project-positions col-md-4">
        <h3>Positions</h3>
        <p>Hello these are the open posiitions for the team as of right now:</p>
          {this.getListings(this.props.projectSkillz)}
      </div>
    )
  }
}

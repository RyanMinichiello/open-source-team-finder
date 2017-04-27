import React from 'react';


import CreateProjectSinglePosition from './createproject-single-position.js'
var inputs= [];
var positions = 1;
export default class CreateProjectPositionSection extends React.Component {

  constructor(props) {

        super(props);
        this.state = { inputs: [<CreateProjectSinglePosition />, <CreateProjectSinglePosition />, <CreateProjectSinglePosition />] };
    }

    addNewButton(){
      if (positions < 6){
      var newInput = <CreateProjectSinglePosition />
      inputs.push(newInput);
      this.setState({inputs})
      positions++;
    }
    }

getPositions(){
  return inputs;
}


  render() {

    return (


      <div>

        <div className = "attribute-box" id="positions">
        <div className = "attribute">Positions:</div>
        <div>
          <CreateProjectSinglePosition />
          {inputs}
        </div>
      </div>
        <button type="button" id="add-more-btn" className="btn btn-default" onClick={ () => this.addNewButton() }>
        Add More...
        </button>

</div>
);
}
}

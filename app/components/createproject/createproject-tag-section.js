import React from 'react';
import CreateProjectTagItem from './createproject-tag-item.js';


var inputs= [];
var numTags = 1;
export default class CreateProjectTagSection extends React.Component {
  constructor(props) {

        super(props);
        this.state = { inputs };

    }

getInputs(){
  return inputs;
}

    addNewButton(value){
      if (value != "" && numTags < 6){
      var newInput =  <div className = "singleTag"><CreateProjectTagItem tag={value} /></div>
      inputs.push(newInput);
      this.setState({inputs})
      this.numTags++;
    }


    }

  render() {
    return (


      <div>

        <div className= "attribute-box">
         <div className= "attribute">Areas of Interest (5 Max):</div>
         <input placeholder="Add Tags" ref={node => {
                 this.input = node;
               }} />
             <button type="button" id="add-more-tags-btn" className="btn btn-default" onClick={ () => this.addNewButton(this.input.value) }>
           Add Tag
           </button>
          <div>
              {inputs}
          </div>
        </div>


</div>
);
}
}

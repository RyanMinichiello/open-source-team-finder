import React from 'react';
import CreateProjectTagItem from './createproject-tag-item.js';


var inputs= [];
export default class CreateProjectTagSection extends React.Component {
  constructor(props) {

        super(props);
        this.state = { inputs };

    }



    addNewButton(value){
      var newInput =  <CreateProjectTagItem tag={value} />
      inputs.push(newInput);
      this.setState({inputs})
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

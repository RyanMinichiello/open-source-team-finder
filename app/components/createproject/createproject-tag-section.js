import React from 'react';
import TagItem from './createproject-tag-item.js'

var inputs= [];
export default class CreateProjectTagSection extends React.Component {
  constructor(props) {

        super(props);
        this.state = { inputs };
    }

    addNewButton(){
      var newInput = <createproject-tag-item />
      inputs.push(newInput);
      this.setState({inputs})
    }

  render() {
    return (


      <div>

        <div className= "attribute-box">
         <div className= "attribute">Areas of Interest (5 Max):</div>
         <input placeholder="Add Tags" />
           <button type="button" id="add-more-tags-btn" className="btn btn-default" onClick={ () => this.addNewButton() }>
           Add Tag
           </button>
           <TagItem />
        </div>

</div>
);
}
}

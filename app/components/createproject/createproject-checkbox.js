import React from 'react';
import { PropTypes } from 'react';

export default class Checkbox extends React.Component  {
  constructor(props){

    super(props);
  this.state = {
    isChecked: false
  }
}



  toggleCheckboxChange() {
    const { handleCheckboxChange } = this.props;

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked
      }
    ));

   handleCheckboxChange();
  }

  render() {

    const { isChecked } = this.state;

    return (
      <div className="checkbox">
        <label>
          <input type="checkbox" checked={isChecked} onChange={this.toggleCheckboxChange} />

        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {

  handleCheckboxChange: PropTypes.func.isRequired
};
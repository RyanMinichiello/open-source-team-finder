import React from 'react';
/*import { PropTypes } from 'react';*/

export default class Checkbox extends React.Component  {

    constructor() {
      super()
      this.handleCheckBox = this.handleCheckBox.bind(this)
      this.state = {
        checked: false
      }
    }

    handleCheckBox(e) {
      this.setState({
        checked: e.target.checked
      })
    }

    render(){
      return <input type="checkbox" onChange={this.handleCheckBox} checked={this.state.checked} />
    }
  }

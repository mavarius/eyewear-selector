import React, { Component } from 'react'

import './RadioGroup.css'

export const RadioButton = ({ id, label, value, groupName, onClick }) => {
  return(
    <label onClick={onClick} className="radio-label" htmlFor={id}>
      <input type="radio" id={id} name={groupName} value={value} />
      <span className="radio-button"/>
      {label}
    </label>
  )
}

class RadioGroup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedButton: null
    }
  }

  setSelected = selectedValue => {
    this.setState({
      selectedButton: selectedValue
    })
  }

  render() {
    const { selectedButton } = this.state
    const { radioList, groupName, legend } = this.props

    return (
      <div className="radio-group">
      <legend>{legend}</legend>
        {radioList.map((item, i) => <RadioButton id={`radio_button${i}`} groupName={groupName} label={item} value={item} onClick={this.setSelected.bind(this, item)} key={`radio_button${i}`} />)}
      </div>
    )
  }
}

export default RadioGroup

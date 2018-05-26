import React from 'react'

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

export const RadioGroup = ({ radioList, groupName, legend, handleSelect }) => {
  return (
    <div className="radio-group">
    <legend>{legend}</legend>
      {radioList.map((item, i) => <RadioButton id={`radio_button${i}`} groupName={groupName} label={item} value={item} onClick={handleSelect.bind(this, item)} key={`radio_button${i}`} />)}
    </div>
  )
}

export default RadioGroup

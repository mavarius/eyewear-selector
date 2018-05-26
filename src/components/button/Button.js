import React from 'react'

import './Button.css'

export const Button = ({ label, onClick }) => {
  return (
    <button className="reg-button" onClick={onClick}>
      {label}
    </button>
  )
}

export default Button

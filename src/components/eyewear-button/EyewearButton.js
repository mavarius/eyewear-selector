import React from 'react'

import images from '../../assets/images/images'

import './EyewearButton.css'

export const EyewearButton = ({ brand, name, image, onClick }) => {
  return (
    <button className="preview" onClick={onClick}>
      <img src={images[image]} alt={`${brand} ${name} preview`} />
      <p><strong>{brand}</strong></p>
      <p>{name}</p>
    </button>
  )
}

export default EyewearButton

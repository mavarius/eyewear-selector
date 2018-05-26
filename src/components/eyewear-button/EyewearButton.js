import React from 'react'

import images from '../../assets/images/images'

import './EyewearButton.css'

export const EyewearButton = ({ brand, name, image, onClick }) => {
  return (
    <button className="preview" onClick={onClick}>
      <img src={images[image]} alt={`${brand} ${name} preview`} />
      <div className="preview-text">
        <p><strong>{brand}</strong></p>
        <p>{name}</p>
      </div>
    </button>
  )
}

export default EyewearButton

import React from 'react'

import './EyewearButton.css'

export const EyewearButton = ({ brand, name, image, onClick }) => {
  {console.log('EYEWEAR BUTTON')}
  return (
    <button className="preview" onClick={onClick}>
      <img src={require('../../assets/images/cutler-and-gross-1156-front-sm.jpg')} alt={`${brand} ${name} preview`} />
      {/*<img src={require(`../../${image}`)} alt={`${brand} ${name} preview`} />*/}
      <p><strong>{brand}</strong></p>
      <p>{name}</p>
    </button>
  )
}

export default EyewearButton

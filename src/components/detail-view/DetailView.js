import React from 'react'

import images from '../../assets/images/images'

import Button from '../button/Button'
import RadioGroup from '../radio-group/RadioGroup'

import './DetailView.css'

export const DetailView = ({ selectedItem }) => {
  const { images: { frontal, side }, brand, name, sizes, price, description, id } = selectedItem
  
  return (
    <div className="detail-view">
      <div className="image-block">
        <img className="detail-img" src={images[frontal]} alt={`${brand} ${name} frontal view`} />
        <img className="detail-img" src={images[side]} alt={`${brand} ${name} frontal view`} />
      </div>
      <div className="summary-block">
        <h2 className="brand-callout">{brand}</h2>
        <p>{name}</p>
        <strong>${price.replace('.00', '')}</strong>
      </div>
      <div className="details-block">
        <div className="info-block">
          {description.replace(/<(?:.|\n)*?>/gm, '')}
        </div>
        <div className="shopping-cart">
          <RadioGroup radioList={sizes} legend="Select Size" groupName="eyeglass_sizes" />
          <Button label="BUY NOW" onClick={() => console.log('clicked')} />
        </div>
      </div>
    </div>
  )
}

export default DetailView

import React, { Component } from 'react'

import images from '../../assets/images/images'

import Button from '../button/Button'
import RadioGroup from '../radio-group/RadioGroup'

import { postPurchase } from '../../lib/util'

import './DetailView.css'

export class DetailView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedSize: null
    }
  }

  setSelectedSize = selectedValue => {
    this.setState({
      selectedSize: selectedValue
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { selectedItem } = this.props

    const purchaseData = {
      "purchase-sku-id": `${selectedItem['sku-id']}`,
      "purchase-price": parseInt(selectedItem['price'].replace('.', ''), 10),
      "purchase-sku-size": this.state.selectedSize,
      "purchase-datatime": new Date().toISOString()
    }

    postPurchase(purchaseData)
  }

  render() {
    const { images: { frontal, side }, brand, name, sizes, price, description } = this.props.selectedItem
    
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
          <form className="shopping-cart">
            <RadioGroup radioList={sizes} legend="Select Size" groupName="eyeglass_sizes" handleSelect={this.setSelectedSize} />
            <Button label="BUY NOW" onClick={this.handleSubmit} />
          </form>
        </div>
      </div>
    )
  }
}

export default DetailView

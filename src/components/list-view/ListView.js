import React from 'react'

import EyewearButton from '../eyewear-button/EyewearButton'
import './ListView.css'

export const ListView = ({ list, setSelected, selected }) => {
  const availableEyewear = list.map((eyewear, i) => {
    const { brand, name, images, id } = eyewear
    return <EyewearButton brand={brand} name={name} image={images['frontal-sm']} onClick={setSelected.bind(this, id)} key={'eyewear_option_' + id} />
  })

  return (
    <div className="list-view">
      <h2 className={selected ? 'callout-selected' : 'callout'}>Select Your Eyewear</h2>
      <div className="eyewear-list">
        {availableEyewear}
      </div>
    </div>
  )
}

export default ListView

import React, { Fragment } from 'react'

import EyewearButton from '../eyewear-button/EyewearButton'
import './ListView.css'

export const ListView = ({ list, setSelected }) => {
  const availableEyewear = list.map((eyewear, i) => {
    const { brand, name, images, id } = eyewear
    return <EyewearButton brand={brand} name={name} image={`../..${images['frontal-sm']}`} onClick={setSelected.bind(this, id)} key={'eyewear_option_' + id} />
  })

  {console.log('LIST VIEW')}
  return (
    <Fragment>
      <h2 className="callout">Select Your Eyewear</h2>
      <div className="eyewear-list">
        {availableEyewear}
      </div>
    </Fragment>
  )
}

export default ListView

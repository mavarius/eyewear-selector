import axios from 'axios'

export const postPurchase = purchaseData => {
  axios.post('/buy', purchaseData)
    .then(res => {
      console.log('PURCHASED:', res.data)
    })
    .catch(error => {
      console.error('PURCHASE INCOMPLETE:', error)
    })
}
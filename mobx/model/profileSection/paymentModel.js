import { makeAutoObservable } from 'mobx'

export default class PaymentModel {
  constructor() {
    makeAutoObservable(this)
  }
  collapce = false
  index = ''
  loading = false
  id = ''
  pay_on = ''
  user = ''
  user_photo = ''
  offer_title = ''
  offer_photo = ''
  start = ''
  end = ''
  amount = ''
  status = ''
  instalment = ''
  payment_method = ''
  setVals = (data) => {
    try {
      Object.keys(data).map((item, key) => {
        if (this[item] !== undefined) {
          this[item] = data[item]
        } else {
          console.log(item)
        }
      })
    } catch (e) {
      console.log(e)
    }
  }
}

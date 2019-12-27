import React from 'react'
import './Journey.css'
import switchImg from './imgs/switch.svg'

export default function Journey(props) {
  const {
    from,
    to,
    exchangeFromTo,
    showCitySelector
  } = props
  return (
    <div className="journey">
      <div className="journey-station">
        <input
          type="text"
          readOnly
          name="from"
          value={from}
          className="journey-input journey-from"
          onClick={showCitySelector}
        />
      </div>
      <div className="journey-switch" onClick={exchangeFromTo}>
        <img src={switchImg} alt="switch"/>
      </div>
      <div className="journey-station">
        <input
          type="text"
          readOnly
          name="to"
          value={to}
          className="journey-input journey-to"
          onClick={showCitySelector}
        />
      </div>
    </div>
  )
}

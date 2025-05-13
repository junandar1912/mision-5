import React from 'react'
import './Step.css'


const Step = ( { handleRadioChange, checked, nama, perlihatkan,}) => {
  return (
    <div className='step'>
      <label className='step-contan'>
          <p className='p-step'>{nama}</p>
          <input type="radio" onChange={handleRadioChange} checked={checked} className='radio-input-1'/>
          {perlihatkan && <span className='divider1' checked={checked} onChange={handleRadioChange}></span>}
      </label>  
    </div>
  )
}
export default Step

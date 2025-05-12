import React, { useEffect, useState } from 'react'
import Headermetode from '../../components/Header/Headermetode.jsx'
import Carddes from '../../components/Carddesc/Carddes.jsx'
import './Metode.css'
import PaymentMethods from '../../components/Payment/Payment.jsx'

const Metode = () => {


  return (
   <>
    <Headermetode/>
    <div className='body'>
        <main className='metode'>
        <Carddes/>
        <div className='metode-container'>
          <div className='list-bank'>
            <h2 className="title">Metode Pembayaran</h2>
            <div className='main-payment'>
              <PaymentMethods/>
            </div>
            <div></div>
          </div>  
          </div>
        </main>
    </div>
  </>
  )
}

export default Metode

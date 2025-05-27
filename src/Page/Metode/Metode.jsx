import React from 'react'
import Headermetode from '../../components/Header/Headermetode.jsx'
import Carddes from '../../components/Carddesc/Carddes.jsx'
import './Metode.css'
import PaymentMethods from '../../components/Payment/Payment.jsx'
import Ringkasan from '../../components/Ringkasan/Ringkasan.jsx'
import { useNavigate } from 'react-router-dom';


const CarddesData = [{
  Harga: 'RP 250.000',
  Count: 'Diskon 50%',
  terlihat: true,
  gambar: '../src/assets/gambar/photo 1.svg',
  Diskon: 'RP 500K'
}]

const RingkasanData = [{
  judul: 'Video Learning: Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager. ',
  harga: 'Rp 767.500',
  admin:'RP 7.000',
  total:'RP 774.500'
}]

const Metode = () => {


  return (
   <>
    <Headermetode/>
    <div className='body'>
        <main className='metode'>
        {CarddesData.map((item,index)=>(
        <div key={index}>
          <Carddes
          Harga={item.Harga}
          Diskon={item.Diskon}
          terlihat={item.terlihat}
          gambar={item.gambar}
          Count={item.Count}/>
        </div>))}
        <div className='metode-container'>
          <div className='list-bank'>
            <h2 className="title-payment">Metode Pembayaran</h2>
            <div className='main-payment'>
              <PaymentMethods/>
            </div>
          </div>
          {RingkasanData.map((item,index)=>(
            <div className='payment-container2' key={index}>
            <Ringkasan
            judul={item.judul}
            harga={item.harga}
            admin={item.admin}
            total={item.total}
            />
          </div>))}
        </div>
        </main>
    </div>
  </>
  )
}

export default Metode

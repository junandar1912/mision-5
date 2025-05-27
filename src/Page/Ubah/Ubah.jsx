import React, { useEffect, useState } from 'react'
import './Ubah.css'
import Carddes from '../../components/Carddesc/Carddes.jsx'
import Ringkasan from '../../components/Ringkasan/Ringkasan.jsx'
import Cara from '../../components/Cara/Cara.jsx'
import Headerbayar from '../../components/Header/Headerbayar.jsx'
import { useNavigate } from 'react-router-dom';
import { Headermetode } from '../../index.js'

const RingkasanData = [{
  terlihat: false, bank:'Bayar Melalui Virtual Account BCA',
  kode:'11739 081234567890',
  judul:'Video Learning: Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager. ',
  harga:'Rp 767.500',admin:'Rp 7.000',total:'Rp 774.500',
  image:'../src/assets/Bank/BCA (2).svg'
}]

const CarddescData = [{
  terlihat: true, gambar:'./src/assets/gambar/photo 1.svg',
   Harga:'RP 250.000', Diskon:'RP 500K', Count:'Diskon 50%',

}]

const BankData = [{
  Bannk:'BCA'
}]


const Ubah = () => {

  const [DibukaSection, setOpenDibuka] = useState(null);


  const DiBuka = (id)=> {
    setOpenDibuka (prev => (prev === id ? null : id));
  }

  useEffect(()=> {
    const handleClickOutside = (jika) => {
      if (!jika.target.closest('.title-payment') && !jika.target.closest('.d-bayar')) {
        setOpenDibuka(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  },[]);



  return (
    <>
      <Headermetode/>
      <div className='body'>
        <main className='container-bayar'>
          {CarddescData.map((item,index)=>(
          <div className='bayar1' key={index}>
              <Carddes
              terlihat={item.terlihat}
              gambar={item.gambar}
              Harga={item.Harga}
              Diskon={item.Diskon}
              Count={item.Count}/>
          </div>
          ))}
          <div className='bayar2'>
            {RingkasanData.map((item,index)=>(
              <div key={index} className='bayar3'>
                <Ringkasan
                terlihat={item.terlihat}
                image={item.image}
                judul={item.judul}
                kode={item.kode}
                bank={item.bank}
                harga={item.harga}
                admin={item.admin}
                total={item.total}/>
              </div>
            ))}
            {BankData.map((item,index)=>(
              <div key={index}>
                <Cara Bank={item.index}/>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  )
}
export default Ubah

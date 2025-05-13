import React, { useEffect, useState } from 'react'
import './Bayar.css'
import Carddes from '../../components/Carddesc/Carddes.jsx'
import Ringkasan from '../../components/Ringkasan/Ringkasan.jsx'
import Timer from '../../components/Timer/Timer'
import Headermetode from '../../components/Header/Headermetode.jsx'

const RingkasanData = [{
  terlihat: true, bank:'Bayar Melalui Virtual Account BCA',
  kode:'11739 081234567890',
  judul:'',harga:'',admin:'',total:'',
  image:''
}]

const CarddescData = [{
  terlihat: true, gambar:'', Harga:'RP 250.000', Diskon:'RP 500K', Count:'Diskon 50%',

}]


const Bayar = ({Bank}) => {

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
      <Timer/>
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
            <div className='list-bank'>
              <h2 className='title-payment'>Tata Cara Pembayaran</h2>
              <div className='section'>
                <div className='section-header'>
                  <p className={`title-payment  ${DibukaSection === 'section-1' ? 'active' : ''}`} onClick={()=> DiBuka('section-1')}>ATM{ Bank }</p>
                  <span className={`nav-atm ${DibukaSection === 'section-1' ? 'rotate' : ''}`} onClick={()=> DiBuka('section-1')}></span>
                </div>
                {DibukaSection === 'section-1' && (<div className="d-bayar">
                  <p className='p-bayar'>
                    1. Masukkan kartu ATM dan PIN BCA Anda <br />
                    2. Di menu utama, pilih "Transaksi Lainnya". Pilih "Transfer". Pilih "Ke BCA Virtual Account" <br />
                    3. Masukkan nomor Virtual Account <br />
                    4. Pastikan data Virtual Account Anda benar, kemudian masukkan angka yang perlu Anda bayarkan, kemudian pilih "Benar" <br />
                    5. Cek dan perhatikan konfirmasi pembayaran dari layar ATM, jika sudah benar pilih "Ya", atau pilih "Tidak" jika data di layar masih salah <br />
                    6. Transaksi Anda sudah selesai. Pilih "Tidak" untuk tidak melanjutkan transaksi lain</p>
                </div>)}
                <div className='section-header'>
                  <p className={`title-payment  ${DibukaSection === 'section-2' ? 'active' : ''}`} onClick={()=> DiBuka('section-2')}>Mobile Banking { Bank }</p>
                  <span className={`nav-atm ${DibukaSection === 'section-2' ? 'rotate' : ''}`} onClick={()=> DiBuka('section-2')}></span>
                </div>
                {DibukaSection === 'section-2' && (<div className="d-bayar">
                  <p className='p-bayar'>
                    1. Buka Aplikasi BCA Mobile <br />
                    2. Pilih "m-BCA", kemudian pilih "m-Transfer" <br />
                    3. Pilih "BCA Virtual Account" <br />
                    4. Masukkan nomor Virtual Account, lalu pilih "OK" <br />
                    5. Klik tombol "Send" yang berada di sudut kanan atas aplikasi untuk melakukan transfer <br />
                    6. Klik "OK" untuk melanjutkan pembayaran <br />
                    7. Masukkan PIN Anda untuk meng-otorisasi transaksi <br />
                    8. Transaksi Anda telah selesai 
                  </p>
                </div>)}
                <div className='section-header'>
                  <p className={`title-payment  ${DibukaSection === 'section-3' ? 'active' : ''}`} onClick={()=> DiBuka('section-3')}>Internet Banking  { Bank }</p>
                  <span className={`nav-atm ${DibukaSection === 'section-3' ? 'rotate' : ''}`} onClick={()=> DiBuka('section-3')}></span>
                </div>
                {DibukaSection === 'section-3' && (<div className="d-bayar">
                  <p className='p-bayar'>
                    1. Login ke KlikBCA Individual <br />
                    2. Pilih "Transfer", kemudian pilih "Transfer ke BCA Virtual Account" <br />
                    3. Masukkan nomor Virtual Account <br />
                    4. Pilih "Lanjutkan" untuk melanjutkan pembayaran <br />
                    5. Masukkan "RESPON KEYBCA APPLI 1" yang muncul pada Token BCA Anda, lalu klik tombol "Kirim" <br />
                    6. Pembayaran telah selesai <br />
                  </p> 
                </div>)}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
export default Bayar

import React, { useRef } from 'react'
import './Ringkasan.css'

const Ringkasan = ({terlihat, bank, kode, harga, admin, judul, total, image}) => {


  const paragrafRef = useRef(null);

  const handleSalin = () => {
    const teks = paragrafRef.current.textContent;
    navigator.clipboard.writeText(teks)
      .then(() => {
        alert("Teks berhasil disalin!");
      })
      .catch(err => {
        alert("Gagal menyalin teks: " + err);
      });
  };



  return (
      <main className='Ringkasan'>
        <h2 className='title-payment'>Metode Pembayaran</h2>
        {terlihat && <div className='title-ringkasan'>
          <div className='bank-kode'>
            <img src={ image } alt="image bank" />
            <p className='nama-bank'>{ bank }</p>
            <div className='kode-bank'>
              <p className='kode-bang'  ref={paragrafRef}>{ kode }</p> <span onClick={handleSalin}>Salin</span>
            </div>
          </div>
        </div>}
        <h2 className='title-payment'>Ringkasan Pesanan</h2>
        <div className='ringkasan-des'>
            <p className='p-ringkasan'>{judul}</p>
            <p className='h-ringkasan'>{harga}</p>
        </div>
        <div className='ringkasan-des'>
            <p className='p-ringkasan'>Biaya Admin</p>
            <p className='h-ringkasan'>{admin}</p>
        </div>
        <span className='divider'></span>
        <div className='total'>
            <p className='title-payment'>Total Pembayaran</p>
            <p className='price-detail'>{total}</p>
        </div>
        <div className='button-ring'>
          {terlihat && <button className='regis-nav1'>Ganti Metode Pembayaran</button>}
          <button className='masuk'>Beli Sekarang</button>
        </div>
      </main>  
  )
}

export default Ringkasan

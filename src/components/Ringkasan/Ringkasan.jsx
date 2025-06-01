import React, { useRef } from 'react'
import { useNavigate } from 'react-router';
import './Ringkasan.css'

const Ringkasan = ({terlihat, bank, kode, harga, admin, judul, total, image, handleClick}) => {


  const navigate = useNavigate()
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
        <h4 className='title-payment'>Metode Pembayaran</h4>
        {terlihat && <div className='title-ringkasan'>          
            <img src={ image } alt="image bank" />
            <p className='nama-bank'>{ bank }</p>
            <div className='kode-bank'>
              <p className='kode-bang'  ref={paragrafRef}>{ kode }</p> <span onClick={handleSalin}>Salin</span>
            </div>
          </div>
        }
        <h2 className='title-payment'>Ringkasan Pesanan</h2>
        <div className='ringkasan-desc'>
        <div className='ringkasan-des'>
            <p className='p-ringkasan'>{judul}</p>
            <p className='h-ringkasan'>{harga}</p>
        </div>
        <div className='ringkasan-des'>
            <p className='p-ringkasan'>Biaya Admin</p>
            <p className='h-ringkasan'>{admin}</p>
        </div>
        </div>
        <span className='divider'></span>
        <div className='total'>
            <p className='title-payment'>Total Pembayaran</p>
            <p className='price-detail'>{total}</p>
        </div>
        <div className='button-ring'>
          {terlihat && <button className='regis-nav1' onClick={()=> navigate('/Metode')}>Ganti Metode Pembayaran</button>}
          <button className='masuk' 
          onClick={handleClick}>
            Beli Sekarang
          </button>
        </div>
      </main>  
  )
}

export default Ringkasan

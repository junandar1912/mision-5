import React from 'react'
import './Menu.css'

const Menu = () => {
  return (
    <body>
        <div className='head'>
            <div className='paragraf'>
                <h1 className='p1-head'>Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!</h1>
                <p className='p2-head'>Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.</p>
            </div>
            <button type='submit' className='btn-p'>Temukan Video Course untuk Dipelajari!</button>
        </div>
        <main>
          <div className='judul'>
            <h1 className='judul-1'>Koleksi Video Pembelajaran Unggulan</h1>
            <p className='judul-2'>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
          </div>
          <div className='nav'>
            <a href="http://">Semua Kelas</a>
            <a href="http://">Pemasaran</a>
            <a href="http://">Desain</a>
            <a href="http://">Pengembangan Diri</a>
            <a href="http://">Bisnis</a>
          </div>
        </main>
        <footer>
          <div className='fot-con'>
            <div className='judul-fot'>
              <p className='p1-fot'>NEWSLETTER</p>
              <div className='j-ctr'>
                <p className='p1-ctr'>Mau Belajar Lebih Banyak?</p>
                <p className='p2-ctr'>Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id</p>
              </div>
            </div>
            <div className='ctr-serc'>
              <input type="text" placeholder='Masukan Emailmu' className='searching'/>
              <button type='submit' className='ctr-butt'>Subscribe</button>
            </div>
          </div>
        </footer>
    </body>
  )
}

export default Menu

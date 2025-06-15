import React, { useEffect, useState } from 'react';
import Headermenu from '../../components/Header/Headermenu.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Card from '../../components/Card/Card.jsx';
import { useNavigate } from 'react-router';
import { getData } from '../../Api.js';
import './Menu.css';

const Menu = () => {
  const navigate = useNavigate();
  const [cardData, setCardData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // tombol sekarang
  const cardsPerPage = 9; //jumlah kartu dalam satu tombol

  useEffect(() => { // Api
    const fetchData = async () => {
      try {
        const data = await getData();
        setCardData(data);
      } catch (error) {
        console.error('Gagal memuat data', error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastCard = currentPage * cardsPerPage;  //page
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(cardData.length / cardsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <Headermenu />
      <div className='body-menu'>
        <div className='head'>
          <div className='paragraf'>
            <h1 className='p1-head'>
              Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
            </h1>
            <p className='p2-head'>
              Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.
            </p>
          </div>
          <button type='submit' className='btn-p'>
            Temukan Video Course untuk Dipelajari!
          </button>
        </div>
        <div>
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
          <div className='draft'>
            <ul>
              {currentCards.map((item, index) => (
                <li key={index} onClick={() => navigate('/Detail')}>
                  <Card
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    avatar={item.avatar}
                    instructor={item.instructor}
                    rating={item.rating}
                    reviews={item.reviews}
                    price={item.price}
                    job={item.job}
                  />
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                ⬅ Sebelumnya
              </button>
              <p style={{ margin: '0 10px' }}>
                Halaman {currentPage} dari {totalPages}
              </p>
              <button onClick={goToNextPage} disabled={currentPage === totalPages}>
                Selanjutnya ➡
              </button>
            </div>
          </div>
        </div>
        <div className='footer-container12'>
          <div className='fot-con-menu'>
            <div className='judul-fot'>
              <p className='p1-fot'>NEWSLETTER</p>
              <div className='j-ctr'>
                <p className='p1-ctr'>Mau Belajar Lebih Banyak?</p>
                <p className='p2-ctr'>
                  Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id
                </p>
              </div>
            </div>
            <div className='ctr-serc'>
              <input type="text" placeholder='Masukan Emailmu' className='searching' />
              <button type='submit' className='ctr-butt'>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Menu;
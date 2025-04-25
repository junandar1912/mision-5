import React from 'react'
import Headermenu from '../../components/Header/Headermenu.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Card from '../../components/Card/Card.jsx'
import './Menu.css'

const cardData = [
  {
  image:"../src/assets/gambar/photo 1.svg",
  title:"Big 4 Auditor Financial Analyst ",
  description:"Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
  avatar:"../src/assets/gambar/avatar/avatar(1).svg",
  instructor:"Jenna Ortega",
  rating:"3,5",
  reviews:"86",
  price:"RP 300K",
  job:"Senior Accountant"
},
{
  image:"../src/assets/gambar/photo2.svg",
  title:"Big 4 Auditor Financial Analyst ",
  description:"Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
  avatar:"../src/assets/gambar/avatar/avatar(2).svg",
  instructor:"Jenna Ortega",
  rating:"3,5",
  reviews:"86",
  price:"RP 300K",
  job:"Senior Accountant"
},
{
  image:"../src/assets/gambar/photo3.svg",
  title:"Big 4 Auditor Financial Analyst ",
  description:"Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
  avatar:"../src/assets/gambar/avatar/avatar(3).svg",
  instructor:"Jenna Ortega",
  rating:"3,5",
  reviews:"86",
  price:"RP 300K",
  job:"Senior Accountant"
},
{
  image:"../src/assets/gambar/photo4.svg",
  title:"Big 4 Auditor Financial Analyst ",
  description:"Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
  avatar:"../src/assets/gambar/avatar/avatar(4).svg",
  instructor:"Jenna Ortega",
  rating:"3,5",
  reviews:"86",
  price:"RP 300K",
  job:"Senior Accountant"
},
{
  image:"../src/assets/gambar/photo5.svg",
  title:"Big 4 Auditor Financial Analyst ",
  description:"Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
  avatar:"../src/assets/gambar/avatar/avatar(5).svg",
  instructor:"Jenna Ortega",
  rating:"3,5",
  reviews:"86",
  price:"RP 300K",
  job:"Senior Accountant"
},
{
  image:"../src/assets/gambar/photo6.svg",
  title:"Big 4 Auditor Financial Analyst ",
  description:"Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
  avatar:"../src/assets/gambar/avatar/avatar(6).svg",
  instructor:"Jenna Ortega",
  rating:"3,5",
  reviews:"86",
  price:"RP 300K",
  job:"Senior Accountant"
},
{
  image:"../src/assets/gambar/photo7.svg",
  title:"Big 4 Auditor Financial Analyst ",
  description:"Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
  avatar:"../src/assets/gambar/avatar/avatar(7).svg",
  instructor:"Jenna Ortega",
  rating:"3,5",
  reviews:"86",
  price:"RP 300K",
  job:"Senior Accountant"
},
{
  image:"../src/assets/gambar/photo8.svg",
  title:"Big 4 Auditor Financial Analyst ",
  description:"Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
  avatar:"../src/assets/gambar/avatar/avatar(8).svg",
  instructor:"Jenna Ortega",
  rating:"3,5",
  reviews:"86",
  price:"RP 300K",
  job:"Senior Accountant"
},
{
  image:"../src/assets/gambar/photo9.svg",
  title:"Big 4 Auditor Financial Analyst ",
  description:"Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
  avatar:"../src/assets/gambar/avatar/avatar(9).svg",
  instructor:"Jenna Ortega",
  rating:"3,5",
  reviews:"86",
  price:"RP 300K",
  job:"Senior Accountant"
},
];

const Menu = () => {
  return (
    <>
    <Headermenu />
    <div className='body'>
        <div className='head'>
            <div className='paragraf'>
                <h1 className='p1-head'>Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!</h1>
                <p className='p2-head'>Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.</p>
            </div>
            <button type='submit' className='btn-p'>Temukan Video Course untuk Dipelajari!</button>
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
            {cardData.map((item, index) => (
              <li key={index}>
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
          </div>
        </div>
        <div className='footer-container'>
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
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Menu

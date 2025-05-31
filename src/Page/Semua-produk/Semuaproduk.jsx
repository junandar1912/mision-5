import React, { useRef, useState,  } from 'react'
import Headerprofile from '../../components/Header/Headerprofil.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Card from '../../components/Card/Card.jsx'
import Checkbox from '../../components/Checkbox/Checkbox.jsx'
import Radio from '../../components/Radio/Radio.jsx'
import Switch from '../../components/Switch/Switch.jsx'
import { useNavigate } from 'react-router'
import './Semuaproduk.css'

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
}]

const CheckboxData = [
  { name: 'pemasaran', label: 'Pemasaran', defaultChecked: false },
  { name: 'digital', label: 'Digital & Teknologi', defaultChecked: false },
  { name: 'pengembangan', label: 'Pengembangan Diri', defaultChecked: false },
  { name: 'bisnis', label: 'Bisnis Manajemen', defaultChecked: false },
];

const RadioOptions = [
  { value: 'kurang4', label: 'Kurang dari 4 jam' },
  { value: '4-8', label: '4–8 jam' },
  { value: 'lebih8', label: 'Lebih dari 8 jam' },
];



const Semuaproduk = () => {

  const navigate = useNavigate()
// tombol dropdown
  const [open, setopen] = useState(false);

  const DropdownrRef = useRef();
  const TombolRef = useRef();

  window.addEventListener('click', (jika)=>{
    console.log(jika.target === TombolRef.current);
  });


  const [selectedDurasi, setSelectedDurasi] = useState('');
  const handleRadioChange = (e) => {
    setSelectedDurasi(e.target.value);
  };
// nomor page//
  
  const dummyData = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    title: `Video ${i + 1}`,
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const pageItem = cardData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(dummyData.length / itemsPerPage);


  return (
    <>
    <Headerprofile/>
    <div className='body-semua'>
        <div className='judul-detail'>
            <h1 className='j1-detail'>Koleksi Video Pembelajaran Unggulan</h1>
            <p className='j2-detail'>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
        </div>
        <main className='con-detail'>
            <div className='desc-but'>
              <div className='filter-detail'>
                <button className='filter-nav'>Filter</button>
                <button className='Reset-nav'>Reset</button>
              </div>
              <div className='desc-nav'>
                <div>
                  <button className='dropdown-filter' onClick={()=> setopen(!open)} ref={TombolRef}>
                    <img src="../src/assets/gambar/Notebook.svg" alt="" ref={DropdownrRef} className='Logosemua'/>Bidang studi
                  </button>
                {open&&<div>
                    <ul className='pilihan'>
                      {CheckboxData.map((item,index)=>(
                        <li key={index}>
                          <Checkbox
                          label={item.label}
                          name={item.index}
                          defaultChecked={item.defaultChecked}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>}
                </div>
                <div>
                  <button className='dropdown-filter' onClick={()=> setopen(!open)} ref={TombolRef}>
                    <img src="../src/assets/gambar/Shopping_Bag_01.svg" alt="" ref={DropdownrRef} className='Logosemua'/>Harga
                  </button>
                {open&&<div>
                  <ul className='pilihan'>
                      {CheckboxData.map((item,index)=>(
                        <li key={index}>
                          <Checkbox
                          label={item.label}
                          name={item.index}
                          defaultChecked={item.defaultChecked}
                          />
                        </li>
                      ))}
                    </ul>
                    </div>}
                </div>
                <div>
                  <button className='dropdown-filter' onClick={()=> setopen(!open)} ref={TombolRef}>
                    <img src="../src/assets/gambar/Clock.svg" alt="" ref={DropdownrRef} className='Logosemua'/>Durasi
                  </button>
                {open&&<div>
                    <ul className='pilihan'>
                      {RadioOptions.map((item,index)=> (
                      <li key={index}>
                        <Radio
                        value={item.value}
                        nama={item.label}
                        handleRadioChange={handleRadioChange}
                        checked={selectedDurasi === item.value}
                        />
                      </li>))}
                    </ul>
                  </div>}
                </div>
              </div>
            </div>
            <form className='card-section-detail'>
              <div className='cari-detail'>
                <div className='urutan-p'>
                  <select name="Urutkan" id="Urutkan" className='urutan-detail'>
                    <option value="">Urutkan</option>
                    <option value="">Harga Rendah</option>
                    <option value="">Harga Tinggi</option>
                    <option value="">A to Z</option>
                    <option value="">Z to A</option>
                    <option value="">Rating Tertinggi</option>
                    <option value="">Rating Terendah</option>
                  </select>
                </div>
                <div className='fitur-cari-detail'>
                  <input type="text" placeholder='Cari Kelas' className='cari-kelas'/>
                  <img src="../src/assets/gambar/Material icon.svg" alt="" />
                </div>
              </div>
              <div className='card-container'>
                  <ul className='card-page'>
                    {cardData.map((item,index)=>(
                    <li key={index} onClick={()=> navigate('/Detail')}>
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
              <div className="nomor-page">
              <div className="pagination">
                <button
                className="pagination-button"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                >
                  &laquo;
                </button>
                {[...Array(totalPages)].map((_, index) => (
                  <button
                  key={index}
                  className={`pagination-button ${
                    currentPage === index + 1 ? 'active' : ''
                  }`}
                  onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                    </button>
                  ))}
                  <button
                  className="pagination-button"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  >
                    &raquo;
                  </button>
                  </div>
                </div>
            </form>
        </main>
    </div>
    <Footer/>
    </>
  )
}

export default Semuaproduk

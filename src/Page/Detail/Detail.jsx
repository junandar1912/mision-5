import React, {useState, useEffect} from 'react'
import Card from '../../components/Card/Card'
import Headerprofile from '../../components/Header/Headerprofil'
import Footer from '../../components/Footer/Footer'
import './Detail.css'
import Carddes from '../../components/Carddesc/Carddes'
import { useNavigate } from 'react-router-dom';


const Carddesdata = [{
  perlihatkan: true,
  Harga: 'RP 250.000',
  Diskon: 'RP 500K',
  Count: 'Diskon 50%',
  terlihat: true
}]

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
]


const Detail = () => {

  const navigate = useNavigate()
  const [openDropdownId, setOpenDropdownId] = useState(null);
  
  const toggleDropdown = (id) => {
    setOpenDropdownId(prev => (prev === id ? null : id));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.span-drop') && !event.target.closest('.dropdown-content')) {
        setOpenDropdownId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  

  return (
    <>
    <Headerprofile/>
    <main className='body-detail'>
      <div className='Breadcrumb'>
        <a href="" className='link-Detail'>Beranda</a>
        <span className='d-span'>/</span>
        <a href="" className='link-Detail'>Desain</a>
        <span className='d-span'>/</span>
        <a className='link-Detail'>Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.</a>
      </div>
      <div className='titel-produk'>
        <h1 className='p-produk'>Gapai Karier Impianmu sebagai Seorang<br/> UI/UX Designer & Product Manager.</h1>
        <p className='p2-produk'>Belajar bersama tutor profesional di Video Course.<br/> 
        Kapanpun, di manapun.</p>
        <img src="../src/assets/rating.svg" alt="" className='img-produk'/>
      </div>
      <main className='produk-main'>
        {Carddesdata.map((item,index) => (
        <div className='detail-card 'key={index}>
          <Carddes 
          perlihatkan={item.perlihatkan} onClick={()=> navigate('/Bayar')}
          Harga={item.Harga}
          Diskon={item.Diskon}
          Count={item.Count}
          />
        </div>))}
        <div className='desc-produk'>
          <div className='head-desc'>
            <p className='t-p-head'>Deskripsi</p>
            <p className='p-desc-produk'>Foundations of User Experience (UX) Design adalah yang pertama dari rangkaian tujuh kursus yang akan membekali Anda dengan keterampilan yang dibutuhkan untuk melamar pekerjaan tingkat pemula dalam desain pengalaman pengguna. Desainer UX fokus pada interaksi yang dilakukan orang dengan produk seperti situs web, aplikasi seluler, dan objek fisik. Desainer UX membuat interaksi sehari-hari itu dapat digunakan, menyenangkan, dan dapat diakses. Peran seorang desainer UX tingkat pemula mungkin termasuk berempati dengan pengguna, menentukan poin rasa sakit mereka, memunculkan ide untuk solusi desain, membuat wireframe, prototipe, dan maket, dan menguji desain untuk mendapatkan umpan balik.</p>
          </div>
          <div className='desc-profil'>
            <p className='t-p-head'>Belajar bersama Tutor Profesional</p>
            <div className='p1-desc-propil'>
              <div className='profil-1'>
                <div className='flex-row'>
                  <img src="../src/assets/gambar/avatar/Avatar(1).svg" alt="" className='avatar-desc'/>
                  <div>
                    <p className='d-name-profil'>Gregorius Edrik Lawanto</p>
                    <p className='d-job-profil'>Senior Talent Acquisition di Wingsgroup</p>
                  </div>
                </div>
                <p className='p-profil1'>Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.</p>
              </div>
              <div className='profil-1'>
                <div className='flex-row'>
                  <img src="../src/assets/gambar/avatar/Avatar(1).svg" alt="" className='avatar-desc' />
                  <div>
                    <p className='d-name-profil'>Gregorius Edrik Lawanto</p>
                    <p className='d-job-profil'>Senior Talent Acquisition di Wingsgroup</p>
                  </div>
                </div>
                <p className='p-profil1'>Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.</p>
              </div>
            </div>
          </div>
          <div className='head-desc'>
            <p className='t-p-head'>Kamu akan Mempelajari</p>
            <div className='descriiption-button'>
              <div className="but-1" id="dropdown-container">
                <p className={`span-drop ${openDropdownId === 'dropdown-3' ? 'active' : ''}`}onClick={()=>toggleDropdown('dropdown-3')}>Introduction to Course 1: Foundations of User Experience Design</p>
                <span className={`arrow ${openDropdownId === 'dropdown-3' ? 'rotate' : ''}`}></span>
              </div>
              {openDropdownId === 'dropdown-3' && (
                <div className="dropdown-content">
                  <button className='b-around'><p className='b-p'>The basics of user experience design</p>
                  <div className='play'>
                    <div className='video'>
                      <img src="../src/assets/Play_circle.svg" alt="" />
                      <p className='b-p'>Videoin</p> 
                    </div>
                    <div className='play'>
                      <img src="../src/assets/Clock.svg" alt="" />
                      <p className='b-p'> 12 Menit</p> 
                    </div>
                  </div>  
                  </button>
                  <button className='b-around'>
                    <p className='b-p'>Jobs in the field of user experience</p>
                  <div className='play'>
                    <div className='video'>
                      <img src="../src/assets/Play_circle.svg" alt="" />
                      <p className='b-p'>Videoin</p> 
                    </div>
                    <div className='video'>
                      <img src="../src/assets/Clock.svg" alt="" />
                      <p className='b-p'> 12 Menit</p> 
                    </div>
                  </div>
                  </button>
                  <button className='b-around'>
                    <p className='b-p'>The product development life cycle</p>
                    <div className='play'>
                      <div className='video'>
                        <img src="../src/assets/Play_circle.svg" alt="" />
                        <p className='b-p'>Videoin</p> 
                      </div>
                      <div className='video'>
                        <img src="../src/assets/Clock.svg" alt="" />
                        <p className='b-p'> 12 Menit</p> 
                      </div>
                    </div>
                  </button>
                </div>
              )}
              <div className="but-1" id="dropdown-container">
                <p className={`span-drop ${openDropdownId === 'dropdown-2' ? 'active' : ''}`}onClick={()=>toggleDropdown('dropdown-2')}>Universal design, inclusive design, and equity-focused design</p>
                <span className={`arrow ${openDropdownId ? 'rotate' : ''}`}></span>
              </div>
              {openDropdownId === 'dropdown-2' && (
                <div className="dropdown-content">
                  <button className='b-around'><p className='b-p'>The basics of user experience design</p>
                  <div className='play'>
                    <div className='video'>
                      <img src="../src/assets/Play_circle.svg" alt="" />
                      <p className='b-p'>Videoin</p> 
                    </div>
                    <div className='play'>
                      <img src="../src/assets/Clock.svg" alt="" />
                      <p className='b-p'> 12 Menit</p> 
                    </div>
                  </div>  
                  </button>
                  <button className='b-around'>
                    <p className='b-p'>Jobs in the field of user experience</p>
                  <div className='play'>
                    <div className='video'>
                      <img src="../src/assets/Play_circle.svg" alt="" />
                      <p className='b-p'>Videoin</p> 
                    </div>
                    <div className='video'>
                      <img src="../src/assets/Clock.svg" alt="" />
                      <p className='b-p'> 12 Menit</p> 
                    </div>
                  </div>
                  </button>
                  <button className='b-around'>
                    <p className='b-p'>The product development life cycle</p>
                    <div className='play'>
                      <div className='video'>
                        <img src="../src/assets/Play_circle.svg" alt="" />
                        <p className='b-p'>Videoin</p> 
                      </div>
                      <div className='video'>
                        <img src="../src/assets/Clock.svg" alt="" />
                        <p className='b-p'> 12 Menit</p> 
                      </div>
                    </div>
                  </button>
                </div>
              )}
              <div className="but-1" id="dropdown-container">
                <p className={`span-drop ${openDropdownId === 'dropdown-1' ? 'active' : ''}`}onClick={()=> toggleDropdown('dropdown-1')}>Introduction to design sprints</p>
                <span className={`arrow ${openDropdownId === 'dropdown-1' ? 'rotate' : ''}`}></span>
              </div>
              {openDropdownId === 'dropdown-1' && (
                <div className="dropdown-content">
                  <button className='b-around'><p className='b-p'>The basics of user experience design</p>
                  <div className='play'>
                    <div className='video'>
                      <img src="../src/assets/Play_circle.svg" alt="" />
                      <p className='b-p'>Videoin</p> 
                    </div>
                    <div className='play'>
                      <img src="../src/assets/Clock.svg" alt="" />
                      <p className='b-p'> 12 Menit</p> 
                    </div>
                  </div>  
                  </button>
                  <button className='b-around'>
                    <p className='b-p'>Jobs in the field of user experience</p>
                  <div className='play'>
                    <div className='video'>
                      <img src="../src/assets/Play_circle.svg" alt="" />
                      <p className='b-p'>Videoin</p> 
                    </div>
                    <div className='video'>
                      <img src="../src/assets/Clock.svg" alt="" />
                      <p className='b-p'> 12 Menit</p> 
                    </div>
                  </div>
                  </button>
                  <button className='b-around'>
                    <p className='b-p'>The product development life cycle</p>
                    <div className='play'>
                      <div className='video'>
                        <img src="../src/assets/Play_circle.svg" alt="" />
                        <p className='b-p'>Videoin</p> 
                      </div>
                      <div className='video'>
                        <img src="../src/assets/Clock.svg" alt="" />
                        <p className='b-p'> 12 Menit</p> 
                      </div>
                    </div>
                  </button>
                </div>
              )}
              <div className="but-1" id="dropdown-container">
                <p className={`span-drop ${openDropdownId === 'dropdown-4' ? 'active' : ''}`}onClick={()=>toggleDropdown('dropdown-4')}>Introduction to UX research</p>
                <span className={`arrow ${openDropdownId === 'dropdown-4' ? 'rotate' : ''}`}></span>
              </div>
              {openDropdownId === 'dropdown-4' && (
                <div className="dropdown-content">
                  <button className='b-around'><p className='b-p'>The basics of user experience design</p>
                  <div className='play'>
                    <div className='video'>
                      <img src="../src/assets/Play_circle.svg" alt="" />
                      <p className='b-p'>Videoin</p> 
                    </div>
                    <div className='play'>
                      <img src="../src/assets/Clock.svg" alt="" />
                      <p className='b-p'> 12 Menit</p> 
                    </div>
                  </div>  
                  </button>
                  <button className='b-around'>
                    <p className='b-p'>Jobs in the field of user experience</p>
                  <div className='play'>
                    <div className='video'>
                      <img src="../src/assets/Play_circle.svg" alt="" />
                      <p className='b-p'>Videoin</p> 
                    </div>
                    <div className='video'>
                      <img src="../src/assets/Clock.svg" alt="" />
                      <p className='b-p'> 12 Menit</p> 
                    </div>
                  </div>
                  </button>
                  <button className='b-around'>
                    <p className='b-p'>The product development life cycle</p>
                    <div className='play'>
                      <div className='video'>
                        <img src="../src/assets/Play_circle.svg" alt="" />
                        <p className='b-p'>Videoin</p> 
                      </div>
                      <div className='video'>
                        <img src="../src/assets/Clock.svg" alt="" />
                        <p className='b-p'> 12 Menit</p> 
                      </div>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className='desc-profil'>
            <p className='t-p-head'>Belajar bersama Tutor Profesional</p>
            <div className='p1-desc-propil'>
              <div className='profil-1'>
                <div className='flex-row'>
                  <img src="../src/assets/gambar/avatar/Avatar(1).svg" alt="" />
                  <div>
                    <p className='d-name-profil'>Gregorius Edrik Lawanto</p>
                    <p className='d-job-profil'>Senior Talent Acquisition di Wingsgroup</p>
                  </div>
                </div>
                <p className='p-profil1'>Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.</p>
              </div>
              <div className='profil-1'>
                <div className='flex-row'>
                  <img src="../src/assets/gambar/avatar/Avatar(1).svg" alt="" />
                  <div>
                    <p className='d-name-profil'>Gregorius Edrik Lawanto</p>
                    <p className='d-job-profil'>Senior Talent Acquisition di Wingsgroup</p>
                  </div>
                </div>
                <p className='p-profil1'>Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className='footer-produk'>
        <h1 className='t-p-head'>Video Pembelajaran Terkait Lainnya</h1>
        <p className='p-desc-produk'>Ekspansi Pengetahuan Anda dengan Rekomendasi Spesial Kami!</p>
        <div>
          <ul className='produk-lain'>
            {cardData.map((item,index)=> (
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
              </li>))}
            </ul>
        </div>
      </div>
    </main>
    <Footer/>
    </>
  )
}

export default Detail

import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <footer>
            <div className='nav-footer'>
                <div className='alamat'>
                    <img src='../src/assets/gambar/logo.svg' alt='logo' className='img-foot'/>
                    <h1 className='foot-titel'>Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</h1>
                    <p className='alamat'>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
                    <p className='no'>+62-877-7123-1234</p>
                </div>
                <div className="navigator">
                    <ul className="navi-footer">
                        <li className="isi-navigator">
                            <button href="#" className="nav-foot">Kategori</button>
                            <a href="#">Digital & Teknologi</a>
                            <a href="#" >Pemasaran</a>
                            <a href="#">Manajemen Bisnis</a>
                            <a href="#">Pengembangan Diri</a>
                            <a href="#">Desain</a>
                        </li>
                    </ul>
                    <ul className="navi-footer">
                        <li className="isi-navigator">
                            <button className="nav-foot" href="#">Perusahaan</button>
                            <a href="#">Tentang Kami</a>
                            <a href="#">FAQ</a>
                            <a href="#">Kebijakan Privasi</a>
                            <a href="#">Kententuan Layanan</a>
                            <a href="#">Bantuan</a>
                       </li>
                   </ul>
                   <ul className="navi-footer">
                        <li className="isi-navigator">
                            <button href="#" className="nav-foot">Komunitas</button>
                            <a href="#">Tips Sukses</a>
                            <a href="#">Blog</a>
                       </li>
                   </ul>
                </div>
            </div>
            <div className='divider'>
                <br />
            </div>
            <div className='media-sosial'>
            <div className="text">
                <p>@2023 Gerobak Sayur All Rights Reserved.</p>
            </div>
            <ul className="media">
                <li><a href="#" class="fa fa-linkedin"></a></li>
                <li><a href="#" class="fa fa-facebook"></a></li>
                <li><a href="#" class="fa fa-instagram"></a></li>
                <li><a href="#" class="fa fa-twitter"></a></li>
            </ul>
            </div>
        </footer>
    </div>
  )
}

export default Footer

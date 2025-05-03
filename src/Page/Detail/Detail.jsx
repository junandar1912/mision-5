import React from 'react'
import Card from '../../components/Card/Card'
import Headerprofile from '../../components/Header/Headerprofil'
import Footer from '../../components/Footer/Footer'
import './Detail.css'



const Detail = () => {
  return (
    <>
    <Headerprofile/>
    <div className='body'>
      <div className='Breadcrumb'>
        <a href="">Beranda</a>
        <span>/</span>
        <a href="">Desain</a>
        <span>/</span>
        <p className='p-produk-header'>Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.</p>
      </div>
      <div className='titel-produk'></div>
      <main className='produk-main'></main>
      <div className='footer-produk'></div>
    </div>
    <Footer/>
    </>
  )
}

export default Detail

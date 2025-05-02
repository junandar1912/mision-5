import React, { useRef, useEffect } from 'react'
import Headerprofile from '../../components/Header/Headerprofil.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Card from '../../components/Card/Card.jsx'
import Checkbox from '../../components/Checkbox/Checkbox.jsx'
import Radio from '../../components/Radio/Radio.jsx'
import Switch from '../../components/Switch/Switch.jsx'
import './Detail.css'

const CheckboxData = [
  {
    Label:"jujun",
    nama:"junandar",
    defaultChecked:false,
    namaCHeckbox:"junandar"
  },
]

const Radiodata = [{
  handleradioChange:"kurang$",
  nami:"kurang dari 4 jam"
}]


const Detail = () => {
  return (
    <>
    <Headerprofile/>
    <div className='body'>
        <div className='judul-detail'>
            <h1 className='j1-detail'>Koleksi Video Pembelajaran Unggulan</h1>
            <p className='j2-detail'>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
        </div>
        <div className='container-detail'>
            <div className='desc-but'>
              <div className='filter-detail'>
                <button className='filter-nav'>Filter</button>
                <button className='Reset-nav'>Reset</button>
              </div>
              <div className='desc-nav'>
                <button className='dropdown-filter'>
                  <img src="" alt="" />Bidang studi
                </button>
                <button className='dropdown-filter'>
                  <img src="" alt="" />Harga
                </button>
                <button className='dropdown-filter'>
                  <img src="" alt="" />Durasi
                </button>
              </div>
            </div>
            <div className='card-section'></div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Detail

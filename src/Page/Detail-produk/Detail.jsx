import React from 'react'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Card from '../../components/Card/Card.jsx'
import Checkbox from '../../components/Checkbox/Checkbox.jsx'
import Radio from '../../components/Radio/Radio.jsx'
import './Detail.css'

const CheckboxData = [
  {
    Label:"jujun",
    nama:"junandar",
    defaultChecked:false,
    namaCHeckbox:"junandar"
  },
]

const Detail = () => {
  return (
    <>
    <Header/>
    <div className='body'>
        <title>
            <h1>Koleksi Video Pembelajaran Unggulan</h1>
            <p>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
        </title>
        <div className='container'>
            <div className='desc-but'>
              {CheckboxData.map((item, index) =>(
                <Checkbox
                key={index}
                Label={item.Label}
                name={item.nama}
                defaultChecked={item.defaultChecked}
                namaCheckbox={item.namaCHeckbox}/>
              ))}
            </div>
            <div className='card-section'></div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Detail

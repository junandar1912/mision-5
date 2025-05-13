import React from 'react'
import Step from '../Step/Step'

const StepData = [{
  nama: 'pilih metode',
  checked: 'checked',
  perlihatkan: false,
  disable: true
},
{
  nama: 'bayar',
  checked: 'checked',
  perlihatkan: true,
  disable: true
},
{
  nama: 'selesai',
  perlihatkan: true,
  disable: true
}]



const Headerbayar = () => {

  return (
    <header>
      <div className='nav-bayar'>
          <img src="../src/assets/gambar/logo.svg" className='photo' />
          <div className='nav-bayar2'>
            <ul className='hasil-metode'>
              {StepData.map ((item,index)=>(
                <li className='hasil-metod' key={index}>
                  <Step
                  checked={item.checked}
                  nama={item.nama}
                  perlihatkan={item.perlihatkan}
                  />
          </li>))}
        </ul>
        </div>
      </div>
    </header>
  )
}

export default Headerbayar


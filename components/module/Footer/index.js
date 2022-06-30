import React from 'react'
import Image from 'next/image'
import style from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className='container text-center'>
          <h1 className='mt-5'>Eat, Cook, Repeat</h1>
          <p className='mt-2'>Share your best recipe by uploading here !</p>
      </div>
  </footer>
  )
}

export default Footer
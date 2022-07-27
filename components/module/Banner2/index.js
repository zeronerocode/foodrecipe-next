import React from 'react'
import style from './Banner2.module.css'
import Image from 'next/image'
import Input from '../../base/Input'
import Button from '../../base/Button'

const Banner2 = () => {
  return (
    <div className={style.banner2}>
        <div className='row'>
            <div className='col-md-6'>
            <Image className="text-center" src={'/assets/img/banner2.png'} width={550} height={550} alt='image' />
            </div>
            <div className='col-md-6'>
                <div className={style.banner2Text}>
                <h1>Healthy Bone Broth Ramen (Quick & Easy)</h1>
                <p>Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!</p>
                <Button className={style.btn}>Learn More</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner2
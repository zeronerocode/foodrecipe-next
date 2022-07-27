import React from 'react'
import style from './Banner.module.css'
import Image from 'next/image'
import Input from '../../base/Input'

const Banner = () => {
  return (
    <div className={style.banner}>
        <div className='row'>
            <div className='col-md-6'>
                <div className={style.bannerText}>
                    <h1>Discover Recipe & Delicious Food</h1>
                    <Input className={style.input} placeholder={'Search Restaurant, Food'}/>
                    <div className={style.popular}>
                        <h2>Popular For You !</h2>
                    </div>
                </div>
            </div>
            <div className='col-md-6'>
                <Image className="text-center" src={'/assets/img/banner.png'} width={500} height={500} alt='image' />
            </div>
        </div>
    </div>
  )
}

export default Banner
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useEffect, useState } from 'react'
import style from '../login/Login.module.css'
import Button from '../../../components/base/Button'
import Input from '../../../components/base/Input'
import axios from "axios";
import {useRouter} from 'next/router'
import Link from 'next/link'

const Register = () => {
  const router = useRouter()
  const [form, setForm] = useState({
      email: '',
      password: '',
      name: '',
      hp: ''
  })
  const handleChange = (e)=>{
      setForm({
          ...form,
          [e.target.name]: e.target.value
      })
  }
  const hanleRegister = (e)=>{
      e.preventDefault()
      axios.post(`${process.env.NEXT_APP_API_URL}/users/register`,form )
      .then(()=>{
          alert('register succes')
          router.push(`/auth/login`)
      })
      .catch(()=>{
          alert('register gagal')
      })
  }
    return (
        <div className='row'>
            <div className='col-md-6'>
                <div className={style.leftCol}>
                    <img src='/assets/img/bg-login.png' alt='background' />
                </div>
            </div>
            <div className='col-md-6'>
                <div className={style.rightCol}>
                    <h4 style={{color: "#EFC81A"}}>Let’s Get Started !</h4>
                    <p style={{color: '#8692A6'}}>Create new account to access all features</p>
                    <form onSubmit={hanleRegister}>
                    <div className='form-group my-2'>
                            <label htmlFor="name" className="form-label">Name</label><br />
                            <Input
                                className={style.formInput}
                                type={'text'}
                                name={'name'}
                                placeholder={'Name'}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group my-2'>
                            <label htmlFor="email" className="form-label">Email</label><br />
                            <Input
                                className={style.formInput}
                                type={'text'}
                                name={'email'}
                                placeholder={'Email'}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group my-2'>
                            <label htmlFor="hp" className="form-label">Phone Number</label><br />
                            <Input
                                className={style.formInput}
                                type={'text'}
                                name={'hp'}
                                placeholder={'08xxxxxxxxxx'}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group my-2'>
                            <label htmlFor="password" className="form-label">Create New Password</label><br />
                            <Input
                                className={style.formInput}
                                type={'password'}
                                name={'password'}
                                placeholder={'Password'}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3 form-check">
                            <Input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">I agree to terms & conditions</label>
                        </div>
                        <Button type="submit" className={style.btnLogin}>Register Account</Button>
                        <p className='mt-2'>Already have account? 
                          <Link href={'/auth/login'}>
                          Log in Here
                          </Link>
                        </p>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}

export default Register
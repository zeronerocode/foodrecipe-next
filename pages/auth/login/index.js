/* eslint-disable @next/next/no-img-element */
import React from 'react'
import style from './Login.module.css'
import Button from '../../../components/base/Button'
import Input from '../../../components/base/Input'

const index = () => {
    return (
        <div className='row'>
            <div className='col-md-6'>
                <div className={style.leftCol}>
                    <img src='/assets/img/bg-login.png' alt='background' />
                </div>
            </div>
            <div className='col-md-6'>
                <div className={style.rightCol}>
                    <h4 style={{color: "#EFC81A"}}>Welcome</h4>
                    <p style={{color: '#8692A6'}}>Log in into your exiting account</p>
                    <form>
                        <div className='form-group my-2'>
                            <label htmlFor="email" className="form-label">Email</label><br />
                            <Input
                                className={style.formInput}
                                type={'text'}
                                name={'email'}
                                placeholder={'Email'}
                            />
                        </div>
                        <div className='form-group my-2'>
                            <label htmlFor="password" className="form-label">Password</label><br />
                            <Input
                                className={style.formInput}
                                type={'password'}
                                name={'password'}
                                placeholder={'Password'}
                            />
                        </div>
                        <div className="mb-3 form-check">
                            <Input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">I agree to terms & conditions</label>
                        </div>
                        <Button type="submit" className={style.btnLogin}>Login</Button>
                        <p>Forgot Password ?</p>
                        <p>Don’t have an account? Sign Up</p>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}

export default index
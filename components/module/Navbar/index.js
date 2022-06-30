import Link from 'next/link'
import React from 'react'
import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <div className='kiri'>
                <ul className={style.links}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/recipe/create">Add Recipe</Link>
                    </li>
                    <li>
                        <Link href="/profile">Profile</Link>
                    </li>
                </ul>
            </div>
            <div className='kanan'>
            <Link href="/auth/login">Login</Link>
            </div>
        </div>
    )
}

export default Navbar
import React from 'react'
import { navlink } from '../../constants'

const Navbar = () => {
  return (
    <header className='text-white'>
        <nav className='flex justify-between px-10 h-15 py-2'>
            <img className='invert' src="images/applelogo.png" alt="" />

            <ul className='flex gap-10 items-center'>
                {navlink.map(({label})=>(
                    <li key={label}>
                        <a href={label}>{label}</a>
                    </li>
                ))}
            </ul>

            <div className='flex gap-5 items-center'>
                <button className='h-5'>
                    <img className='h-5' src="images/search.png" alt="search" />
                </button>
                <button>
                    <img className='h-5' src="images/shop.png" alt="cart" />
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar

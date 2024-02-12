import React from 'react'
import logo from '../../Assets/NoBGAFO.png'
import { Link } from 'react-router-dom'
import './NavbarStyle.css'

export default function NavbarComponent() {
  return (
    <nav className="navbar border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link className="flex items-center space-x-3 rtl:space-x-reverse self-center text-4xl md:text-5xl font-semibold whitespace-nowrap dark:text-white flex-row" to={'/'}>
            <img src={logo} className="max-h-20" alt="AFO Logo" />
            <p>Home</p>
        </Link>
    </div>
</nav>
  )
}

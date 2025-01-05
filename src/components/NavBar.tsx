import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi' // Hamburger and close icons
import { logo } from '../assets/icons'

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-md p-4 w-full max-md:top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-1">
          <img src={logo} width={60} height={60} alt="" />
          <div className="flex flex-col gap-0 text-gray-700">
            <span className="text-2xl text-blue-700 font-bold">
              SKYSHORE{' '}
            </span>{' '}
            <span className="text-[10px]">Downstream and Marketing Ltd </span>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden ">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? (
              <HiX className="fixed z-50 right-5 top-3 text-3xl text-gray-700" />
            ) : (
              <HiMenu className="text-3xl text-gray-700" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`max-md:fixed inset-0 bg-white z-40 p-8 flex flex-col space-y-4 items-center transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 md:static md:flex md:flex-row md:space-y-0 md:space-x-8 md:translate-x-0 md:p-0 md:bg-transparent`}
        >
          <li>
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-500 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-500 transition-colors"
              onClick={toggleMenu}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-gray-700 hover:text-blue-500 transition-colors"
              onClick={toggleMenu}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-500 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className='max-md:hidden'>
          <Link to="/">
            <button
              onClick={toggleMenu}
              className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Visit Home
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

import React from 'react'
import { Link } from 'react-router-dom'
import { FaBicycle } from 'react-icons/fa'

const NavBar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <ul className="flex justify-around items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <FaBicycle className="text-4xl text-blue-500" />
          <span className="text-xl font-bold text-gray-700">SkyShore</span>
        </div>

        {/* Navigation Links */}
        <li className="relative">
          <Link
            to="/"
            className="relative text-gray-700 hover:text-blue-500 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>
        </li>
        <li className="relative">
          <Link
            to="/about"
            className="relative text-gray-700 hover:text-blue-500 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </Link>
        </li>
        <li className="relative">
          <Link
            to="/services"
            className="relative text-gray-700 hover:text-blue-500 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Services
          </Link>
        </li>
        <li className="relative">
          <Link
            to="/contact"
            className="relative text-gray-700 hover:text-blue-500 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </Link>
        </li>

        {/* Button */}
        <li>
          <Link to="/">
            <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Visit Home
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar

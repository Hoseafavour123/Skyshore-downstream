import React from 'react'
import { constructionmen } from '../assets/images'
import { Link } from 'react-router-dom'

const Welcome: React.FC = () => {
  return (
    <div className="relative flex flex-col md:flex-row bg-gradient-to-r from-blue-100 to-white overflow-hidden">
      <div className="w-full md:w-1/2 h-64 md:h-full relative">
        <img
          src={constructionmen}
          alt="Placeholder"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-300"></div>
      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-1/2 p-8 flex items-center justify-center overflow-hidden animate-slideUp">
        <div className="relative h-64 w-full">
          <div className="absolute text-content-container">
            <h1 className="text-xl mb-4">
              Welcome to{' '}
              <span className="text-blue-500">
                {' '}
                SkyShore Shipping and Energy Limited{' '}
              </span>
            </h1>
            <p className="leading-relaxed mb-8">
              <span className="text-6xl font-bold">Leading</span>{' '}
              <em className="ml-2 font-semibold text-6xl text-blue-400">
                {' '}
                Nigeria's Maritime
              </em>
            </p>
            <p className="leading-relaxed mt-4">
              Discover tools and resources that empower individuals and
              businesses to achieve their goals. Inspire, innovate, and
              transform your vision into reality.
            </p>
            <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              <Link to="/">Learn more</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome

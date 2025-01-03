import React from 'react'
import { constructionhat, constructionmen, engineer } from '../assets/images'

const Experience: React.FC = () => {
  return (
    <div className="relative flex flex-col md:flex-row bg-white overflow-hidden">
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 p-5 flex justify-center">
        <div className="space-y-6 pr-5">
          <span className="text-xl font-roboto text-blue-500">
            MORE ABOUT US
          </span>
          <h1 className="text-2xl md:text-5xl font-semibold capitalize">
            We are your trusted offshore logistics partner
          </h1>
          <p className="leading-relaxe">
            Transforming ideas into solutions. Our team works to create products
            that inspire and push the boundaries of technology.
          </p>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iure quidem tenetur at dolorum rem quia sed. Laboriosam minima at, animi aut odio distinctio nostrum consequuntur dignissimos voluptatum deleniti inventore!</p>
        </div>
      </div>

      {/* Right Image Section with Animating Rectangles */}
      <div className="w-full md:w-1/2 md:h-full relative">
        <img
          src={constructionmen}
          height={1200}
          alt="Placeholder"
          className="w-full h-full object-cover"
        />

        {/* Animated Rectangles */}
        <div className="absolute -left-10 top-5 blue-500 animate-moveUpDown">
          <img src={engineer} width={220} height={300} />
        </div>
        <div className="flex justify-between gap-6 py-8 px-5  bg-blue-600 text-white absolute -left-10 bottom-1 animate-moveUpDown rounded-xl">
          <p className='font-bold text-3xl'>15+ <br />years</p>
          <p className='text-xl font-semibold'>of <br />experience in <br />oil and gas</p>
        </div>
      </div>
    </div>
  )
}

export default Experience

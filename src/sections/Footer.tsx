import React from 'react';
import { deepBlue } from '../assets/images';
const Footer: React.FC = () => {
    return (
      <footer className="bg-black text-white py-[100px] h-auto w-full">
        <div className="relative container mx-auto px-4">
          <div
            className="flex items-center inset-0 bg-cover bg-center bg-no-repeat bg-blur bg-blue-900 bg-opacity-50 h-auto p-10 rounded-full"
            style={{
              backgroundImage: `url(${deepBlue})`,
            }}
          >
            <div className="w-[50%]">
              <p className="text-xl uppercase">Latest Oil & Gas News Updates</p>
              <p className="capitalize font-semibold text-4xl mt-3">
                Sign up newsletter
              </p>
            </div>
            <div className="relative w-[50%]">
              <input
                type="email"
                className="w-[80%] rounded-full p-5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm text-black"
                placeholder="email"
              />
              <button className="absolute bg-blue-500 rounded-full p-5 right-[110px]">
                Subscribe
              </button>
            </div>
          </div>

          <p className="text-center mt-5">
            &copy; {new Date().getFullYear()} Skyshore Shipping and Energy Limited. All rights reserved.
          </p>
        </div>
      </footer>
    )
};

export default Footer;
import React from 'react';
import { engineer_2 } from '../assets/images';
import Contact from '../sections/Contact';
import {FaLocationDot, FaMessage, FaPhone } from 'react-icons/fa6';


const ContactUs: React.FC = () => {
    return (
      <div>
        <div
          className="relative mt-20 mb-20 w-full h-[400px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `url(${engineer_2})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <h1 className="relative text-white text-4xl font-bold z-10">
            CONTACT US
          </h1>
        </div>

        <div className="container mx-auto">
          <Contact />
        </div>

        <div className="container mx-auto max-md:flex-col flex justify-between md:flex-wrap mt-20 mb-20 font-semibold max-md:p-3">
          <div className="flex md:w-[25%] md:justify-center md:items-center gap-3 border rounded-lg shadow-md h-32 p-4">
            <FaPhone className="text-3xl text-blue-500" />
            <div>
              <p className="text-blue-500">Call us 24/7</p>
              <p>(704) 5555-0127 </p>
            </div>
          </div>
          <div className="flex md:w-[25%] md:justify-center md:items-center gap-3 border rounded-lg shadow-md h-32 p-4">
            <FaMessage className="text-3xl text-blue-500" />
            <div>
              <p className="text-blue-500">Email Us</p>
              <p>sales@sdmwestafrica.com </p>
            </div>
          </div>
          <div className="flex md:w-[25%] justify-center items-center gap-3 border rounded-lg shadow-md h-32 p-4">
            <FaLocationDot className="text-3xl text-blue-500" />
            <div>
              <p className="text-blue-500">Address</p>
              <p>
                No 18 Ibro Avenue, Trans Amadi, Port Harcourt. Rivers state{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
};

export default ContactUs;
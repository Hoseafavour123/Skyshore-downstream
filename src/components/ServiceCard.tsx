import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
    title: string;
    description: string;
    imageUrl: string;
    link: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageUrl, link }) => {
    return (
      <div className="flex items-start gap-5 text-black border border-gray-200 p-4 rounded-lg bg-white shadow-lg hover:animate-pulse cursor-pointer hover:transition-all hover:duration-300 hover:ease-in">
        <img src={imageUrl} alt={title} className="service-card-image" />
        <div className='flex flex-col gap-3'>
          <h1 className="font-semibold text-xl">{title}</h1>
          <p className="text-gray-800">{description}</p>
          <button className='mt-5'>
            <Link to={`${link}`} className='flex items-center gap-2 hover:animate-moveUpDown'>
              <FaArrowCircleRight className="text-blue-500 text-2xl hover:rounded-full transition-all duration-200 ease-out" />
              <span className='font-semibold'>Read more</span>
            </Link>
          </button>
        </div>
      </div>
    )
};

export default ServiceCard;
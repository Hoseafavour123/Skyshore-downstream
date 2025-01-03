import React from 'react';
import { services } from '../constants';
import ServiceCard from '../components/ServiceCard';

const Services: React.FC = () => {
    return (
      <div className="">
        <p className="text-xl text-center text-blue-500 mb-2">OUR SERVICES</p>
        <p className="text-5xl text-center font-semibold">
          High Quality Services
        </p>

        <div className="mt-5 bg-gradient-to-r from-purple-200 via-blue-200 to-white p-12 rounded-xl shadow-lg">
          <div className="max-w-6xl mx-auto text-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              {services.map((service, id) => (
                <ServiceCard
                  key={id}
                  title={service.title}
                  description={service.description}
                  imageUrl={service.imageUrl}
                  link={service.link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
};

export default Services;
import React from 'react'
import { nnpc, lng, mobill, chevron, total, shell, lubric } from '../assets/icons'

const partnersLogos = [
  nnpc,
  lng,
  mobill,
  chevron,
  total,
  shell,
  lubric,
]

const Partners: React.FC = () => {
  return (
    <section className="mt-10 py-10 max-md:p-2">
      <div className="flex items-center justify-center mb-8">
        <hr className="w-1/3 border-t-3 border-blue-600" />
        <h2 className="text-3xl text-nowrap font-bold mx-4">Our Partners</h2>
        <hr className="w-1/3 border-t-3 border-blue-600" />
      </div>
      <div className="flex max-md:grid max-md:grid-cols-2 items-center justify-center gap-8 mt-4 max-md:p-2">
        {partnersLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Partner ${index + 1}`}
            className="h-24  md:h-[100px] w-[150px] rounded-lg border-2 border-blue-100 p-1 cursor-pointer"
          />
        ))}
      </div>
    </section>
  )
}

export default Partners

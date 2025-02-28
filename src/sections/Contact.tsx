import React from 'react'
import { constructionmen } from '../assets/images'

const Contact: React.FC = () => {
  return (
    <section className="rounded-md shadow-lg p-5">
      <h1 className="text-center text-blue-500 text-xl uppercase">
        Make an appointment
      </h1>
      <h2 className="text-5xl font-bold text-center mb-8 mt-3 text-gray-800 uppercase">
        Send us an Email
      </h2>
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="flex-1">
          <img
            src={constructionmen}
            alt="Contact Us"
            className="w-full h-full rounded-lg shadow-lg"
          />
        </div>

        <div className="flex-1 bg-white p-3 rounded-lg shadow-lg">
          <form action="#" method="POST">
            <div className='md:flex md:justify-between'>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-600 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-8 py-4 border  bg-gray-50 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-600 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-8 py-4 border bg-gray-50 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="topic"
                className="block text-gray-600 mb-2"
              >
                Message Title
              </label>
              <input
                type="text"
                id="topic"
                name="topic"
                className="w-full px-8 py-4 border bg-gray-50 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
                placeholder="Enter your business topic"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-600 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full p-3 border bg-gray-50 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
                placeholder="Write your message"
              ></textarea>
            </div>

            <div className="flex justify-start">
              <button
                type="submit"
                className="bg-blue-500 text-white px-10 py-4 rounded-xl hover:bg-blue-600 transition duration-300 font-semibold"
              >
                Submit message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Welcome from '../sections/Welcome'
import Experience from '../sections/Experience'
import Services from '../sections/Services'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

const Home: React.FC = () => {
  return (
    <div className="font-poppins">
      <div className="">
        <Header />
      </div>

      <div className="container mx-auto mt-16 mb-10">
        <NavBar />
      </div>

      <div className="">
        <Welcome />
      </div>

      <div className="container mx-auto mt-[120px]  mb-10">
        <Experience />
      </div>

      <div className="container mx-auto mt-[180px] mb-10">
        <Services />
      </div>

      <div className="container mx-auto mt-[120px] mb-10">
        <Contact />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home

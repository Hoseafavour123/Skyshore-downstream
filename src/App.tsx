import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Header from "./components/Header"
import Footer from "./sections/Footer"
import NavBar from "./components/NavBar"
import ContactUs from "./pages/ContactUs"
import Products from "./pages/Products"


function App() {

  return (
    <BrowserRouter>
      <Header />
      <div className="z-50 container mx-auto md:mt-16 mb-10">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/products' element={<Products/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import Navbar from './components/NavBar/NarBar'
import HeroSection from './components/Hero/HeroSection'
import ServiceSection from './components/Service/ServiceSection'
import ProductSection from './components/Product/ProductSection'

const App = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <ServiceSection/>
    <ProductSection/>
    </>
  )
}

export default App
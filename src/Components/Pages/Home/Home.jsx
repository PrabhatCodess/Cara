import React from 'react'
import Banner from './Banner'
import Features from './Features'
import Footer from './Footer'
import Hero from './Hero'
import Newsletter from './Newsletter'
import Product from './Product'
import Product2 from './Product2'
import Navbar from './Navbar'
import Banner2 from './Banner2'
import Banner3 from './Banner3'

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Product />
      <Banner />
      <Product2 />
      <Banner2 />
      <Banner3 />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
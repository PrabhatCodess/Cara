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
import Hero_video from './Hero_video'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Hero_video />
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
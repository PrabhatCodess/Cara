import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import Lenis from '@studio-freight/lenis';
import Scrollbar from './Components/Scrollbar';
import Home from './Components/Home';
import Shop from './Components/Pages/Shop/Shop';
import Blog from './Components/Pages/Blog/Blog';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import Cart from './Components/Pages/Cart/Cart';
import Product_details from './Components/Pages/Shop/Product_details';
import Hero_video from './Components/Hero_video';

const App = () => {
// Initialize Lenis with options for smooth scrolling on all devices
const lenis = new Lenis({
  smooth: true,        // Enable smooth scrolling
  direction: 'vertical', // Scrolling direction ('vertical' or 'horizontal')
  gestureDirection: 'vertical', // Handle vertical gestures
  smoothTouch: true,   // Enable smooth scrolling for touch devices
  touchMultiplier: 2,  // Adjust sensitivity for touch devices (higher = faster)
});

// Listen for the scroll event (optional)
lenis.on('scroll', (e) => {
  // console.log(e); // Log scroll event data
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}


requestAnimationFrame(raf);

  return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product_details" element={<Product_details />} />
          <Route path="/hero_video" element={<Hero_video />} />
        </Routes>
        <Scrollbar />
      </div>
  )
}

export default App
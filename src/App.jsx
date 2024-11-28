import React from 'react'
import Navbar from './Components/Navbar';
import Lenis from '@studio-freight/lenis';
import Scrollbar from './Components/Scrollbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Shop from './Components/Pages/Shop/Shop';
import Blog from './Components/Pages/Blog/Blog';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import Cart from './Components/Pages/Cart/Cart';

const App = () => {
  // Initialize Lenis
  const lenis = new Lenis();

  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
    // console.log(e); on this to log the scroll event data
  });

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} /> {/* Corrected path */}
      </Routes>
      <Scrollbar />
    </div>
  )
}

export default App
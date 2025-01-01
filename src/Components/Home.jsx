import React, { useEffect } from 'react';
import { usePreloader } from './PreloaderContext'; // Import the context
import gsap from 'gsap';
import Banner from './Banner';
import Features from './Features';
import Footer from './Footer';
import Hero from './Hero';
import Newsletter from './Newsletter';
import Product from './Product';
import Product2 from './Product2';
import Navbar from './Navbar';
import Banner2 from './Banner2';
import Banner3 from './Banner3';
import Hero_video from './Hero_video';
import Preloader from './Preloader';

const Home = () => {
    // const { isPreloaderVisible, setPreloaderVisible } = usePreloader();

    // useEffect(() => {
    //     if (isPreloaderVisible) {
    //         const preloaderAnimation = gsap.to('.loading-screen', {
    //             opacity: 0,
    //             duration: 0.5,
    //             delay: 8.5, // Adjust this delay as needed
    //             ease: 'power1.inOut',
    //             onComplete: () => {
    //                 setPreloaderVisible(false); // Hide preloader after animation
    //             },
    //         });

    //         return () => {
    //             preloaderAnimation.kill(); // Cleanup animation
    //         };
    //     }
    // }, [isPreloaderVisible, setPreloaderVisible]);


        useEffect(() => {
          // Run animations after the page is fully loaded
          const timer = setTimeout(() => {
            gsap.fromTo('.hero', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
            // Initialize counters or other animations here
          }, 100); // Small delay to sync with preloader
      
          return () => clearTimeout(timer); // Cleanup timeout
        }, []);

    return (
        <div>
            {/* {isPreloaderVisible && <Preloader />} */}
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
    );
};

export default Home;

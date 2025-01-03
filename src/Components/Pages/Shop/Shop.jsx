import React from 'react'
import Product from '../../Product'
import Product2 from '../../Product2'
import Newsletter from '../../Newsletter'
import Footer from '../../Footer'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import Product_details from './Product_details'
import logoSVG from '/Green Luxury Elegant Fashion transparent Logo.svg'


const Shop = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  
  return (
    <div>

      <div className='NavBar z-10 sticky top-0 left-0 w-full h-28 bg-[#E3E6F3] flex justify-between items-center px-28 py-20 shadow-2xl mobile:max-tablets:px-5 mobile:max-tablets:py-20 tablets:max-desktop:px-10 tablets:max-desktop:py-20'>
      <div className="nav-left flex items-center">
        <img className='w-48' src={logoSVG} alt="Logo" />
      </div>

      <i className='mobile:max-tablets:flex tablets:max-desktop:flex items-center justify-between gap-1 w-14'>

        <NavLink to="/cart">
        <i className='shopping relative hover:after:content-[" "] hover:after:w-[21px] hover:after:h-[3px] hover:after:bg-[#088178] hover:after:absolute hover:after:left-[-18%] hover:after:bottom-[0.5px] hover:text-[#088178] transition-colors md:hover:after:top-[24.5%] md:hover:after:left-[11.4%] top-0.5 hidden tablets:max-desktop:block
         mobile:max-tablets:block'><i className="fa-solid fa-bag-shopping"></i></i>
        </NavLink>

        <i onClick={() => setIsNavOpen(true)} className="nav-menu fa-solid fa-bars hidden tablets:max-desktop:flex mobile:max-tablets:flex tablets:max-desktop:top-8 tablets:max-desktop:right-10 mobile:max-tablets:top-8 mobile:max-tablets:right-5 h-6 w-10 justify-center items-center cursor-pointer"></i>
      </i>

      <div
  className={`navbar relative nav-right flex items-center gap-10 font-spartan text-xl font-semibold text-[#1a1a1a] cursor-pointer tablets:max-desktop:flex-col tablets:max-desktop:items-start tablets:max-desktop:justify-start tablets:max-desktop:gap-5 tablets:max-desktop:fixed tablets:max-desktop:top-0 tablets:max-desktop:transition-right tablets:max-desktop:duration-300 tablets:max-desktop:h-full tablets:max-desktop:w-64 tablets:max-desktop:bg-[#E3E6F3] tablets:max-desktop:shadow-2xl tablets:max-desktop:p-10 
  
  mobile:max-tablets:flex-col mobile:max-tablets:items-start mobile:max-tablets:justify-start mobile:max-tablets:gap-5 mobile:max-tablets:fixed mobile:max-tablets:top-0 mobile:max-tablets:transition-all mobile:max-tablets:duration-300 mobile:max-tablets:h-full mobile:max-tablets:w-64 mobile:max-tablets:bg-[#E3E6F3] mobile:max-tablets:shadow-2xl mobile:max-tablets:p-10 ${isNavOpen ? "tablets:max-desktop:right-[-50px] mobile:max-tablets:right-[-100px]" : "tablets:max-desktop:right-[-200%] mobile:max-tablets:right-[-200%]"}`}>


        <i className="close hidden tablets:max-desktop:flex mobile:max-tablets:flex fa-solid fa-xmark" onClick={() => setIsNavOpen(false)}></i>

        <NavLink to="/" className=' hover:text-[#088178] transition-colors 
        tablets:max-desktop:after:top-[7.6%] tablets:max-desktop:after:left-10 mobile:max-tablets:after:top-[11.1%] mobile:max-tablets:after:left-10'>Home</NavLink>

        <NavLink to="/shop" className='after:content-[" "] after:w-[28px] after:h-[3px] after:bg-[#088178] after:absolute after:left-[19%] after:bottom-[0px] 
        hover:text-[#088178] transition-colors '>Shop</NavLink>

        <NavLink to="/blog" className='hover:text-[#088178] transition-colors'>Blog</NavLink>

        <NavLink to="/about" className='hover:text-[#088178] transition-colors'>About</NavLink>

        <NavLink to="/contact" className='hover:text-[#088178] transition-colors'>Contact</NavLink>

        <NavLink to="/cart" className='hover:text-[#088178] transition-colors '>
        
        <i className='tablets:max-desktop:hidden mobile:max-tablets:hidden hover:after:bg-[#088178] hover:after:absolute hover:after:left-[96%] hover:after:bottom-[-2px] hover:text-[#088178] transition-colors '>
          <i className="fa-solid fa-bag-shopping"></i>
        </i>

        </NavLink>

        
      </div>
      </div>

     <div className='w-full h-96 flex flex-col items-center justify-center bg-[url("/banner/b1.jpg")] px-20 py-10 bg-cover '>
      <h1 className='text-white text-6xl font-extrabold relative left-14 mobile:max-tablets:text-4xl mobile:max-tablets:left-0 '>#stayhome</h1>
      <p className='text-white text-2xl font-light relative left-14 mobile:max-tablets:text-sm mobile:max-tablets:left-0 '>Save more with coupons & upto 70% off!</p>
     </div>
     
     <Product />
     <Product2/>

     <div className="pagination w-full h-40 flex items-center justify-center gap-2 relative top-5 ">
        <a href="#" className="w-14 h-14 bg-[#008178] flex items-center justify-center text-white rounded-md ">1</a>
        <a href="#" className='w-14 h-14 bg-[#008178] flex items-center justify-center text-white rounded-md '>2</a>
        <a href="#" className='w-14 h-14 bg-[#008178] flex items-center justify-center text-white rounded-md '>→</a>
     </div>

     <Newsletter/>
     <Footer />

    </div>
  )
}

export default Shop
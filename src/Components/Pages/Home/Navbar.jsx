import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => { 
  const [isNavOpen, setIsNavOpen] = useState(false)
   
  return (
    <div className='z-10 sticky top-0 left-0 w-full h-28 bg-[#E3E6F3] flex justify-between items-center px-28 py-20 shadow-2xl mobile:max-tablets:px-5 mobile:max-tablets:py-20 tablets:max-desktop:px-10 tablets:max-desktop:py-20'>
      <div className="nav-left flex items-center">
        <img src="./src/images/logo.png" alt="" />
      </div>

      <i className='mobile:max-tablets:flex tablets:max-desktop:flex items-center justify-between gap-1 w-14'>

        <NavLink to="/cart">
        <i className='shopping relative hover:after:content-[" "] hover:after:w-[20px] hover:after:h-[3px] hover:after:bg-[#088178] hover:after:absolute hover:after:left-[-15%] hover:after:bottom-[0.5px] hover:text-[#088178] transition-colors md:hover:after:top-[24.5%] md:hover:after:left-[11.4%] top-0.5 hidden tablets:max-desktop:block mobile:max-tablets:block'><i className="fa-solid fa-bag-shopping"></i></i>
        </NavLink>

        <i onClick={() => setIsNavOpen(true)} className="nav-menu fa-solid fa-bars hidden tablets:max-desktop:flex mobile:max-tablets:flex tablets:max-desktop:top-8 tablets:max-desktop:right-10 mobile:max-tablets:top-8 mobile:max-tablets:right-5 h-6 w-10 justify-center items-center cursor-pointer"></i>
      </i>

      <div
  className={`navbar relative nav-right flex items-center gap-10 font-spartan text-xl font-semibold text-[#1a1a1a] cursor-pointer tablets:max-desktop:flex-col tablets:max-desktop:items-start tablets:max-desktop:justify-start tablets:max-desktop:gap-5 tablets:max-desktop:fixed tablets:max-desktop:top-0 tablets:max-desktop:transition-right tablets:max-desktop:duration-300 tablets:max-desktop:h-full tablets:max-desktop:w-64 tablets:max-desktop:bg-[#E3E6F3] tablets:max-desktop:shadow-2xl tablets:max-desktop:p-10 mobile:max-tablets:flex-col mobile:max-tablets:items-start mobile:max-tablets:justify-start mobile:max-tablets:gap-5 mobile:max-tablets:fixed mobile:max-tablets:top-0 mobile:max-tablets:transition-all mobile:max-tablets:duration-300 mobile:max-tablets:h-full mobile:max-tablets:w-64 mobile:max-tablets:bg-[#E3E6F3] mobile:max-tablets:shadow-2xl mobile:max-tablets:p-10 ${isNavOpen ? "tablets:max-desktop:right-[-50px] mobile:max-tablets:right-[600px]" : "tablets:max-desktop:right-[-200%] mobile:max-tablets:right-[-200%]"}`}>


        <i className="close hidden tablets:max-desktop:flex mobile:max-tablets:flex fa-solid fa-xmark" onClick={() => setIsNavOpen(false)}></i>

        <NavLink to="/" className='hover:text-[#088178] transition-colors tablets:max-desktop:after:top-[10.2%] tablets:max-desktop:after:left-10 mobile:max-tablets:after:top-[5.8%] mobile:max-tablets:after:left-10'>Home</NavLink>

        <NavLink to="/shop" className='hover:text-[#088178] transition-colors tablets:max-desktop:after:top-[14.9%] tablets:max-desktop:after:left-10 mobile:max-tablets:after:top-[14.9%] mobile:max-tablets:after:left-10'>Shop</NavLink>

        <NavLink to="/blog" className='hover:text-[#088178] transition-colors tablets:max-desktop:after:top-[19.5%] tablets:max-desktop:after:left-10 mobile:max-tablets:after:top-[19.5%] mobile:max-tablets:after:left-10'>Blog</NavLink>

        <NavLink to="/about" className='hover:text-[#088178] transition-colors tablets:max-desktop:after:top-[24.2%] tablets:max-desktop:after:left-10 mobile:max-tablets:after:top-[24.2%] mobile:max-tablets:after:left-10'>About</NavLink>

        <NavLink to="/contact" className='hover:text-[#088178] transition-colors tablets:max-desktop:after:top-[29.1%] tablets:max-desktop:after:left-10 mobile:max-tablets:after:top-[29.1%] mobile:max-tablets:after:left-10'>Contact</NavLink>

        <NavLink to="/cart" className='hover:text-[#088178] transition-colors tablets:max-desktop:after:top-[25.7%] tablets:max-desktop:after:left-10 mobile:max-tablets:after:top-[25.7%] mobile:max-tablets:after:left-10'>
        
        <i className='tablets:max-desktop:hidden mobile:max-tablets:hidden hover:after:bg-[#088178] hover:after:absolute hover:after:left-[96%] hover:after:bottom-[-2px] hover:text-[#088178] transition-colors tablets:max-desktop:hover:after:top-[22.1%] tablets:max-desktop:hover:after:left-10 mobile:max-tablets:hover:after:top-[22.1%] mobile:max-tablets:hover:after:left-10'>
          <i className="fa-solid fa-bag-shopping"></i>
        </i>

        </NavLink>

        
      </div>
    </div>
  )
}

export default Navbar
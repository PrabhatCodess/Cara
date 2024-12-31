import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import logoSVG from "/Green Luxury Elegant Fashion transparent Logo.svg"
import Newsletter from '../../Newsletter'
import Footer from '../../Footer'
import people1 from '/people/1.png'
import people2 from '/people/2.png'
import people3 from '/people/3.png'




const Contact = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <div>

      <div className='NavBar z-10 sticky top-0 left-0 w-full h-28 bg-[#E3E6F3] flex justify-between items-center px-28 py-20 shadow-2xl
       mobile:max-tablets:px-5
       mobile:max-tablets:py-20
       tablets:max-desktop:px-10
       tablets:max-desktop:py-20'>
      <div className="nav-left flex items-center">
        <img className='w-48' src={logoSVG} alt="Logo" />
      </div>

      <i className='mobile:max-tablets:flex tablets:max-desktop:flex items-center justify-between gap-1 w-14'>

        <NavLink to="/cart">
        <i className='shopping relative hover:after:content-[" "] hover:after:w-[21px] hover:after:h-[3px] hover:after:bg-[#088178] hover:after:absolute hover:after:left-[-18%] hover:after:bottom-[0.5px] hover:text-[#088178] transition-colors tablets:max-desktop:after:left-[140px] responsive:max-tablets:after:left-[140px]  md:hover:after:top-[24.5%] md:hover:after:left-[11.4%] top-0.5 hidden tablets:max-desktop:block
         mobile:max-tablets:block'><i className="fa-solid fa-bag-shopping"></i></i>
        </NavLink>

        <i onClick={() => setIsNavOpen(true)} className="nav-menu fa-solid fa-bars hidden tablets:max-desktop:flex mobile:max-tablets:flex tablets:max-desktop:top-8 tablets:max-desktop:right-10 mobile:max-tablets:top-8 mobile:max-tablets:right-5 h-6 w-10 justify-center items-center cursor-pointer"></i>
      </i>

      <div
  className={`navbar relative nav-right flex items-center gap-10 font-spartan text-xl font-semibold text-[#1a1a1a] cursor-pointer tablets:max-desktop:flex-col tablets:max-desktop:items-start tablets:max-desktop:justify-start tablets:max-desktop:gap-5 tablets:max-desktop:fixed tablets:max-desktop:top-0 tablets:max-desktop:transition-right tablets:max-desktop:duration-300 tablets:max-desktop:h-full tablets:max-desktop:w-64 tablets:max-desktop:bg-[#E3E6F3] tablets:max-desktop:shadow-2xl tablets:max-desktop:p-10 
  
  mobile:max-tablets:flex-col mobile:max-tablets:items-start mobile:max-tablets:justify-start mobile:max-tablets:gap-5 mobile:max-tablets:fixed mobile:max-tablets:top-0 mobile:max-tablets:transition-all mobile:max-tablets:duration-300 mobile:max-tablets:h-full mobile:max-tablets:w-64 mobile:max-tablets:bg-[#E3E6F3] mobile:max-tablets:shadow-2xl mobile:max-tablets:p-10 ${isNavOpen ? "tablets:max-desktop:right-[-50px] mobile:max-tablets:right-[-100px]" : "tablets:max-desktop:right-[-200%] mobile:max-tablets:right-[-200%]"}`}>


        <i className="close hidden tablets:max-desktop:flex mobile:max-tablets:flex fa-solid fa-xmark" onClick={() => setIsNavOpen(false)}></i>

        <NavLink to="/" className=' hover:text-[#088178] transition-colors'>Home</NavLink>

        <NavLink to="/shop" className='hover:text-[#088178] transition-colors tablets:max-desktop:after:left-[140px] responsive:max-tablets:after:left-[140px]  '>Shop</NavLink>

        <NavLink to="/blog" className=' 
        hover:text-[#088178] transition-colors tablets:max-desktop:after:left-[140px] responsive:max-tablets:after:left-[140px] '>Blog</NavLink>

        <NavLink to="/about" className='
        hover:text-[#088178] transition-colors tablets:max-desktop:after:left-[140px] responsive:max-tablets:after:left-[140px] '>About</NavLink>

        <NavLink to="/contact" className='after:content-[" "] after:w-[28px] after:h-[3px] after:bg-[#088178] after:absolute after:left-[73%] after:bottom-[0px]
        hover:text-[#088178] transition-colors tablets:max-desktop:after:left-[140px] responsive:max-tablets:after:left-[140px] '>Contact</NavLink>

        <NavLink to="/cart" className='hover:text-[#088178] transition-colors tablets:max-desktop:after:left-[140px] responsive:max-tablets:after:left-[140px]  '>
        
        <i className='tablets:max-desktop:hidden mobile:max-tablets:hidden hover:after:bg-[#088178] hover:after:absolute hover:after:left-[96%] hover:after:bottom-[-2px] hover:text-[#088178] transition-colors tablets:max-desktop:after:left-[140px] responsive:max-tablets:after:left-[140px]  '>
          <i className="fa-solid fa-bag-shopping"></i>
        </i>

        </NavLink>

        
      </div>
      </div>

      <div className='header w-full h-96 flex flex-col items-center justify-center bg-[url("/about/banner.png")] px-20 py-10 bg-cover '>
      <h1 className='text-white text-6xl font-extrabold relative left-14 
      mobile:max-tablets:text-4xl
      mobile:max-tablets:left-0
      tablets:max-desktop:left-10 '>#let's_talk</h1>

      <p className='text-white text-2xl font-light relative left-14 
      mobile:max-tablets:text-xs
      mobile:max-tablets:font-bold
      mobile:max-tablets:left-1
      tablets:max-desktop:text-xl '>LEAVE A MESSAGE,We love to hear form you!</p>
     </div>

     <div className="contact-container flex items-center justify-between px-0 py-10
      mobile:max-tablets:flex-col
      tablets:max-desktop:py-3
      tablets:max-desktop:flex-col ">

      <div className="contact-left  w-1/2 h-full flex flex-col gap-3 justify-center px-20
      mobile:max-tablets:w-full
      mobile:max-tablets:gap-5
      mobile:max-tablets:justify-normal
      mobile:max-tablets:px-5
      tablets:max-desktop:px-10
      tablets:max-desktop:py-10
      tablets:max-desktop:gap-6
      tablets:max-desktop:w-[100%]">

        <h5 className='uppercase text-[#0000007e] tablets:max-desktop:text-xl '>Get In Touch</h5>
        <h1 className='text-5xl
         mobile:max-tablets:text-2xl tablets:max-desktop:text-4xl '>Visit one of our agency locations <br /> or contact us today</h1>
        <h1 className='text-2xl'>Head Office</h1>

        <div>
        <div className='flex flex-col gap-3'>

          <div className='flex gap-4 capitalize text-lg text-[#0000008f] tablets:max-desktop:text-2xl '>
          <i className="fa-solid fa-map"></i>56 Glassford Street glasglow g11UL New York 
          </div>

          <div className='flex gap-4 capitalize text-lg text-[#0000008f] tablets:max-desktop:text-2xl  '>
          <i className="fa-solid fa-envelope"></i>contact@example.com 
          </div>

          <div className='flex gap-4 capitalize text-lg text-[#0000008f] tablets:max-desktop:text-2xl  '>
        <i className="fa-solid fa-phone"></i>contact@example.com 
          </div>

          <div className='flex gap-4 text-lg text-[#0000008f] tablets:max-desktop:text-2xl  '>
        <i className="fa-regular fa-clock"></i>Monday to Saturday: 9.00am to 16.pm
          </div>
        
        </div>
        </div>


      </div>


      <div className="contact-right w-1/2 h-full 
       mobile:max-tablets:w-full
       mobile:max-tablets:mt-10
       tablets:max-desktop:px-3
      tablets:max-desktop:py-10
      tablets:max-desktop:w-[100%]">
      <iframe className='
      mobile:max-tablets:w-[95vw]
       mobile:max-tablets:left-40
      tablets:max-desktop:w-[97vw]'
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6029518.964583549!2d0.35343315539767295!3d51.64731150074409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a9ef8c485b%3A0xd2ff1883a001afed!2sUniversity%20of%20Oxford!5e0!3m2!1sen!2sin!4v1734280312722!5m2!1sen!2sin"
      width="900"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
      </div>



     </div>

     <div className="form-container h-[100vh] w-[1920px] px-20 py-20
      mobile:max-tablets:px-5
      mobile:max-tablets:py-5
      mobile:max-tablets:h-[200vh]
      tablets:max-desktop:px-3
      ">

      <div className="form-border border-black border flex justify-between w-full h-full relative top-4 
      mobile:max-tablets:flex-col
      mobile:max-tablets:border-none
       tablets:max-desktop:gap-10
       tablets:max-desktop:h-[86vh]
       tablets:max-desktop:py-10
       ">

      <div className="form-left relative bottom-14 h-[90vh] w-[70%] py-10
      mobile:max-tablets:w-full
      tablets:max-desktop:w-[50vw]">

        <form className='flex flex-col gap-5 px-10 py-10
        mobile:max-tablets:w-full
         mobile:max-tablets:px-5
          tablets:max-desktop:px-2'>

        <h5 className='uppercase text-[#00000060]'>Leave a message </h5>
        <h1 className='text-5xl'>We love to hear form you</h1>

      
          <input className='w-[50vw] h-12 px-2 text-md font-bold outline outline-[#ccc] outline-[0.1px]  
          mobile:max-tablets:w-[75vw]  '  type="text" placeholder="Your Name" />

          <input className='w-[50vw] h-12 px-2 text-md font-bold outline outline-[#ccc] outline-[0.1px] 
           mobile:max-tablets:w-[75vw] ' type="text" placeholder="Your Email" />

          <input className='w-[50vw] h-12 px-2 text-md font-bold outline outline-[#ccc] outline-[0.1px] 
          mobile:max-tablets:w-[75vw] ' type="text" placeholder="Your Phone Number" />

          <input className='w-[50vw] h-12 px-2 text-md font-bold outline outline-[#ccc] outline-[0.1px] 
          mobile:max-tablets:w-[75vw] ' type="text" placeholder="Your Subject" />

          <textarea className='w-[50vw] resize-none h-64 px-2 text-md font-bold outline outline-[#ccc] outline-[0.1px]
          mobile:max-tablets:w-[75vw]   ' placeholder="Your Message" />
          <button className='w-40 h-14 bg-[#088178] text-black text-xl font-bold rounded-tr-md rounded-br-md relative top-[0px]  hover:text-white transition-all duration-300 hover:scale-110 tablets:max-desktop:w-24 tablets:max-desktop:h-12 tablets:max-desktop:text-sm  tablets:max-desktop:top-0 mobile:max-tablets:w-28 mobile:max-tablets:h-12 '>Sign Up</button>
        </form>

      </div>

      <div className="form-right relative bottom-14 w-[30%] h-[90vh] flex flex-col gap-5  py-20
      mobile:max-tablets:w-full
       tablets:max-desktop:w-[50vw]
        tablets:max-desktop:gap-3
         tablets:max-desktop:mt-20">


         
        <div className="contributor-1 flex gap-5 mt-20">
          <img src={people1} alt="" />
          <div className="contri-details">
            <h1>John Doe</h1>
            <h5>Senior Marketing Manager</h5>
            <h5>Phone: + 000 123 000 77 88</h5>
            <h5>Email: contact@example.com</h5>
          </div>

        </div>
        <div className="contributor-1 flex gap-5 mt-20">
          <img src={people2} alt="" />
          <div className="contri-details">
            <h1>William Smith</h1>
            <h5>Senior Marketing Manager</h5>
            <h5>Phone: + 000 123 000 77 88</h5>
            <h5>Email: contact@example.com</h5>
          </div>

        </div>
        <div className="contributor-1 flex gap-5 mt-20">
          <img src={people3} alt="" />
          <div className="contri-details">
            <h1>Emma Stone</h1>
            <h5>Senior Marketing Manager</h5>
            <h5>Phone: + 000 123 000 77 88</h5>
            <h5>Email: contact@example.com</h5>
          </div>

        </div>

      </div>


      </div>
     </div>


      <Newsletter />
      <Footer />
      

      


    </div>
  )
}

export default Contact
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import logoSVG from "/Green Luxury Elegant Fashion transparent Logo.svg"
import heroImg from "/about/a6.jpg"
import heroVideo from "/about/1.mp4?url"
import Newsletter from '../../Newsletter'
import Footer from '../../Footer'
import Features from '../../Features'

const About = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <div>

       <div className='NavBar z-10 sticky top-0 left-0 w-full h-28 bg-[#E3E6F3] flex justify-between items-center px-28 py-20 shadow-2xl mobile:max-tablets:px-5 mobile:max-tablets:py-20 tablets:max-desktop:px-10 tablets:max-desktop:py-20'>
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

        <NavLink to="/about" className='after:content-[" "] after:w-[28px] after:h-[3px] after:bg-[#088178] after:absolute after:left-[53%] after:bottom-[0px]
        hover:text-[#088178] transition-colors tablets:max-desktop:after:left-[140px] responsive:max-tablets:after:left-[140px] '>About</NavLink>

        <NavLink to="/contact" className='hover:text-[#088178] transition-colors tablets:max-desktop:after:left-[140px] responsive:max-tablets:after:left-[140px] '>Contact</NavLink>

        <NavLink to="/cart" className='hover:text-[#088178] transition-colors tablets:max-desktop:after:left-[140px] responsive:max-tablets:after:left-[140px]  '>
        
        <i className='tablets:max-desktop:hidden mobile:max-tablets:hidden hover:after:bg-[#088178] hover:after:absolute hover:after:left-[96%] hover:after:bottom-[-2px] hover:text-[#088178] transition-colors tablets:max-desktop:after:left-[140px] responsive:max-tablets:after:left-[140px]  '>
          <i className="fa-solid fa-bag-shopping"></i>
        </i>

        </NavLink>

        
      </div>
      </div>

      <div className='header w-full h-96 flex flex-col items-center justify-center bg-[url("/about/banner.png")] px-20 py-10 bg-cover '>
      <h1 className='text-white text-6xl font-extrabold relative left-14 mobile:max-tablets:text-5xl mobile:max-tablets:left-0 tablets:max-desktop:left-10 '>#KnowUs</h1>
      <p className='text-white text-2xl font-light relative left-14 mobile:max-tablets:text-sm mobile:max-tablets:left-7  tablets:max-desktop:text-xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
     </div>

     <div className="hero w-full h-auto flex items-center justify-center gap-10 px-20 py-10
     mobile:max-tablets:flex-col mobile:max-tablets:px-0 mobile:max-tablets:py-0
    tablets:max-desktop:flex-col tablets:max-desktop:px-0 tablets:max-desktop:py-0 ">

      <div className="hero-left w-[50%] h-full
      mobile:max-tablets:w-full
       tablets:max-desktop:w-full ">
        <img src={heroImg} alt="about-image" />
      </div>

      <div className="hero-right w-[50%] h-full
      mobile:max-tablets:w-full
      mobile:max-tablets:px-5
      tablets:max-desktop:w-full
      tablets:max-desktop:px-5 ">

      <h1 className='text-6xl font-extrabold relative left-14
      iphoneSE:text-5xl
      mobile:max-tablets:left-0
      tablets:max-desktop:left-0 '>Who We Are?</h1>

      <p className='text-2xl font-light relative left-14
        mobile:max-tablets:left-0
        tablets:max-desktop:left-0'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquid ratione soluta facere excepturi molestias quod animi atque magni distinctio perferendis totam assumenda cumque odio, harum exercitationem obcaecati quibusdam unde!
        Totam enim aperiam assumenda aspernatur, pariatur excepturi minus voluptas soluta voluptate id sapiente placeat, ipsam, nesciunt voluptates molestiae omnis consectetur dolorum quaerat autem laborum consequuntur eligendi aliquid! Iusto, qui alias!
        Esse vitae facilis voluptatibus deserunt officia excepturi praesentium illo rerum iusto culpa. Voluptatum inventore, odit quos eligendi cupiditate aliquid ducimus nam fuga ut, consequuntur quam, quis voluptate vitae qui minus!
        Molestiae, omnis aliquid vel repellat dolorem aliquam asperiores ipsum. Harum neque quas tempore pariatur tenetur. Amet labore ullam ut. Deserunt, ducimus tenetur amet quidem optio accusamus error ea nam magni.
        In impedit ut qui quidem placeat maiores. Vero esse, assumenda aperiam laudantium consequuntur voluptate nisi. Rerum nisi ullam repellat iure assumenda vel veniam neque, libero laboriosam? Numquam quia nisi alias!
        Nihil eum ipsum incidunt beatae, quae magnam dolorum eius commodi corrupti quasi praesentium sit cumque cum fugit rerum minus, quas est voluptates soluta sint quod et ipsa iste aspernatur. Temporibus.</p>

        <br /><br />

        <marquee bgcolor='#ccc' loop='-1' scrollamount='5' width='100%' >
          Create stunning images with as much or as little control as you like thanks to a choice of Basic and Creative modes.
        </marquee>
      </div>

  </div>

     <div className="hero-video w-full h-auto items-center justify-center px-20 py-10  ">

      <div className='w-full h-auto flex flex-col items-center justify-center gap-5 '>

      <h1 className='text-6xl uppercase font-extrabold relative left-14
      iphoneSE:text-xl
       mobile:max-tablets:text-2xl
       mobile:max-tablets:left-0
       tablets:max-desktop:left-1
      tablets:max-desktop:text-5xl '>Download OUR <span className='underline text-blue-700 cursor-pointer uppercase'>App</span></h1>
      
      <video src={heroVideo} className='w-[60%] rounded-3xl 
      mobile:max-tablets:w-[100%]
      tablets:max-desktop:w-[100%] ' autoPlay loop muted />
      </div>
      
     </div>


     <Features/>
     <Newsletter/>
     <Footer />
    </div>
  )
}

export default About
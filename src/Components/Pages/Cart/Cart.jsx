import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import logoSVG from "/Green Luxury Elegant Fashion transparent Logo.svg"
import Newsletter from '../../Newsletter'
import Footer from '../../Footer'
import p1 from '/products/f1.jpg'
import p2 from '/products/f2.jpg'
import p3 from '/products/f3.jpg'
import p4 from '/products/f4.jpg'
import { Link } from 'react-router-dom'



const Cart = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    
    const [inputValue, setInputValue] = useState("1");

    const handleChange = (event) => {
      setInputValue(event.target.value);
    };

  return (
    <div className='overflow-x-hidden'>

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

        <NavLink to="/contact" className='
        hover:text-[#088178] transition-colors tablets:max-desktop:after:left-[140px] responsive:max-tablets:after:left-[140px] '>Contact</NavLink>

        <NavLink to="/cart" className='after:content-[" "] after:w-[25px] after:h-[3px] after:bg-[#088178] after:absolute after:left-[95.5%] after:bottom-[0px]
        hover:text-[#088178] transition-colors tablets:max-desktop:after:left-[140px] responsive:max-tablets:after:left-[140px]  '>
        
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
      tablets:max-desktop:left-10 '>#Cart</h1>

      <p className='text-white text-2xl font-light relative left-14 
      mobile:max-tablets:text-xs
      mobile:max-tablets:font-bold
      mobile:max-tablets:left-1
      tablets:max-desktop:text-xl '>Add your coupoun code & SAVE upto 70%!</p>
     </div>

     <div className="cart_table w-[100vw] px-20 py-10 border-collapse table-fixed whitespace-nowrap overflow-x-auto
      mobile:max-tablets:px-0
      tablets:max-desktop:px-0 ">


      <table width={'100%'}  border={0} cellSpacing={0} cellPadding={0}>
        <thead className='border border-[#e2e9e1] border-l-0 border-r-0 ' >
          <tr>
            <td className='w-[100px] text-center font-bold uppercase text-sm px-5 py-5 ' >Remove</td>
            <td className='w-[100px] text-center font-bold uppercase text-sm px-5 py-5 ' >Image</td>
            <td className='w-[100px] text-center font-bold uppercase text-sm px-5 py-5 ' >Product</td>
            <td className='w-[100px] text-center font-bold uppercase text-sm px-5 py-5 ' >Price</td>
            <td className='w-[100px] text-center font-bold uppercase text-sm px-5 py-5 ' >Quantity</td>
            <td className='w-[100px] text-center font-bold uppercase text-sm px-5 py-5 ' >Subtotal</td>
          </tr>
        </thead>

        <tbody>
          <tr className='relative'>
            <td className='w-[100px] text-center p-4 cursor-pointer ' ><i className='far fa-times-circle text-blue-600 '></i> </td>
            <td className='w-[100px] text-center p-4  ' ><img src={p1} alt="" className='w-[110px] 
            mobile:max-tablets:left-0
            tablets:max-desktop:left-0 relative left-12' /></td>
            
            <td className='w-[100px] text-center p-4 ' >Cartoon Astronaut T-Shirt</td>
            <td className='w-[100px] text-center p-4 ' >$118.19</td>
            <td className='w-[100px] text-center p-4 ' ><input type="number" value={inputValue}  onChange={handleChange} className='w-[70px] px-3 py-2 text-center ' /></td>
            <td className='w-[100px] text-center p-4 ' >$118.19</td>

          </tr>

          <tr>
            <td className='w-[100px] text-center p-4 cursor-pointer ' ><i className='far fa-times-circle text-blue-600 '></i> </td>
            <td className='w-[100px] text-center p-4  ' ><img src={p2} alt="" className='w-[110px] relative left-12 tablets:max-desktop:left-0 mobile:max-tablets:left-0' /></td>
            <td className='w-[100px] text-center p-4 ' >Cartoon Astronaut T-Shirt</td>
            <td className='w-[100px] text-center p-4 ' >$118.19</td>
            <td className='w-[100px] text-center p-4 ' ><input type="number" value={inputValue}  onChange={handleChange} className='w-[70px] px-3 py-2 text-center ' /></td>
            <td className='w-[100px] text-center p-4 ' >$118.19</td>
          </tr>


          <tr>
            <td className='w-[100px] text-center p-4 cursor-pointer ' ><i className='far fa-times-circle text-blue-600 '></i> </td>
            <td className='w-[100px] text-center p-4  ' ><img src={p3} alt="" className='w-[110px] relative left-12 
            mobile:max-tablets:left-0
            tablets:max-desktop:left-0
              ' /></td>
            <td className='w-[100px] text-center p-4 ' >Cartoon Astronaut T-Shirt</td>
            <td className='w-[100px] text-center p-4 ' >$118.19</td>
            <td className='w-[100px] text-center p-4 ' ><input type="number" value={inputValue}  onChange={handleChange} className='w-[70px] px-3 py-2 text-center ' /></td>
            <td className='w-[100px] text-center p-4 ' >$118.19</td>

          </tr>
        </tbody>

      </table>
     </div>

     <div className="subtotal w-full h-full flex items-center justify-between px-20 py-20 
      mobile:max-tablets:px-5
     mobile:max-tablets:flex-col
     tablets:max-desktop:px-5 ">

      <div className="apply-Coupon w-1/2 relative bottom-20 px-10 py-10
      mobile:max-tablets:w-full mobile:max-tablets:px-0 mobile:max-tablets:py-0
        tablets:max-desktop:px-0 tablets:max-desktop:py-5">
        <h1 className='text-3xl font-bold mb-3 ' >Apply Coupon</h1>
        
        <input className='w-96 h-10 text-xl px-5 py-5 border-2 tablets:max-desktop:w-60 mobile:max-tablets:w-[340px] border-[#e2e9e1] ' type="text" placeholder= 'Enter Your Coupon'  />

        <button className='w-24 h-12 relative left-2 bottom-[0.2vh] bg-[#088178] text-white text-sm font-bold rounded-lg  hover:text-black transition-all duration-300 hover:scale-90
        mobile:max-tablets:left-0
        mobile:max-tablets:mt-5
         tablets:max-desktop:mt-5  '>Apply</button>
      </div>


      <div className="Cart-total h-[36vh] relative w-1/2 px-10 py-10  border-2 border-[#e2e9e1]
      mobile:max-tablets:w-full mobile:max-tablets:px-5 mobile:max-tablets:py-5
      mobile:max-tablets:h-[300px]
       tablets:max-desktop:h-[30vh] tablets:max-desktop:py-5  ">
        <h1 className='text-2xl mb-3 font-bold'>Cart Total</h1>
        <table className='border-collapse w-full mb-20'>
          <tbody>

            <tr>
              <td className='w-1/2 h-10 border-2 border-[#e2e9e1] px-3 text-lg  ' >
                Cart Subtotal
              </td>
              <td className='w-1/2 h-10 border-2 border-[#e2e9e1] px-3' > <span className='font-bold'>$354.57</span></td>
            </tr>

            <tr>
            <td className='w-1/2 h-10 border-2 border-[#e2e9e1] px-3 text-lg  ' >
                Shipping
               
              </td>
              <td className='w-1/2 h-10 border-2 border-[#e2e9e1] px-3' > <span className='font-bold'>Free</span></td>
            </tr>

            <tr>
            <td className='w-1/2 h-10 border border-[#e2e9e1] px-3 text-lg  ' >
                Total
                
              </td>
              <td className='w-1/2 h-10 border-2 border-[#e2e9e1] px-3' ><span className='font-bold'>$354.57</span></td>
            </tr>


          </tbody>
        </table>
        <button className='w-60 h-14 relative bottom-10 bg-[#088178] text-white text-xl font-bold rounded-lg  hover:text-black transition-all duration-300 hover:scale-90  '>Proceed To Checkout</button>
      </div>
      
     </div>



     <Newsletter />
      <Footer />



    </div>
  )
}

export default Cart
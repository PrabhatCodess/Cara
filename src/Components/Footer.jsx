import React from 'react'
import footerLogo from '../../public/logo.png'
import appStore from '../../public/pay/app.jpg'
import playStore from '../../public/pay/play.jpg'
import paymentsLogo from '../../public/pay/pay.png'



const Footer = () => {
  return (
    <div className='w-full h-auto  px-28 py-20 flex items-start justify-between flex-wrap relative tablets:max-desktop:mb-96 tablets:max-desktop:px-10 tablets:max-desktop:py-10 tablets:max-desktop:flex-wrap tablets:max-desktop:gap-10 mobile:max-tablets:mb-20 mobile:max-tablets:px-5 mobile:max-tablets:py-10 mobile:max-tablets:flex-wrap mobile:max-tablets:gap-10 mobile:max-tablets:flex-col  '>
        
        <div className='w-[25%] relative bottom-10 flex flex-col gap-3 tablets:max-desktop:w-[25%] mobile:max-tablets:w-full  '>
            <img className='w-32' src={footerLogo} alt="logo" />
            <h1 className='text-xl font-bold'>Contact</h1>


            <div className='text-lg  ' >
            <p className='hover:text-[#088178] cursor-pointer  transition-all duration-300'>Address: 562 Wellington Road, <br />Street 32, San Francisco</p>
                <p className='hover:text-[#088178] cursor-pointer  transition-all duration-300'>Phone: +01 2222 365 /(+91) 01 2345 6789</p>
                <p className='hover:text-[#088178] cursor-pointer  transition-all duration-300'>Hours: 10:00 - 18:00, Mon - Sat</p>
            </div>



            <div className='w-[100%] flex flex-col gap-3 relative tablets:max-desktop:top-5 mobile:max-tablets:top-5 '>
                <h1 className='text-xl font-bold tablets:max-desktop:text-lg '>Follow Us</h1>
                
                <div className='flex gap-3 text-2xl'>
                <i className='fa-brands fa-facebook hover:text-[#088178] cursor-pointer  transition-all duration-300 '></i>
                <i className='fa-brands fa-instagram hover:text-[#088178] cursor-pointer  transition-all duration-300 '></i>
                <i className='fa-brands fa-twitter hover:text-[#088178] cursor-pointer  transition-all duration-300 '></i>
                <i className='fa-brands fa-youtube hover:text-[#088178] cursor-pointer  transition-all duration-300 '></i>
                </div>


            </div>


        </div>

        <div className='flex items-start justify-between w-[25%]  tablets:max-desktop:w-[60%] tablets:max-desktop:items-start mobile:max-tablets:flex mobile:max-tablets:w-[100%] mobile:max-tablets:h-full mobile:max-tablets:justify-between   '>

        <div className='w-[25%] flex flex-col gap-3 tablets:max-desktop:w-[25%] relative  mobile:max-tablets:w-36  '>
            <h1 className='text-xl font-bold'>About</h1>
            
            <div className='text-lg  ' >
            <p className='hover:text-[#088178] cursor-pointer  transition-all duration-300'>About Us</p>
            <p className='hover:text-[#088178] cursor-pointer  transition-all duration-300'>Delivery Information</p>
            <p className='hover:text-[#088178] cursor-pointer  transition-all duration-300'>Privacy Policy</p>
            <p className='hover:text-[#088178] cursor-pointer  transition-all duration-300'>Terms & Conditions</p>
            <p className='hover:text-[#088178] cursor-pointer  transition-all duration-300'>Contact Us</p>
            </div>

        </div>

        <div className='w-[25%] flex flex-col gap-3 tablets:max-desktop:w-[25%] relative  mobile:max-tablets:w-36  '>
            <h1 className='text-xl font-bold'>My Account</h1>
            <div>
            <p className='hover:text-[#088178] cursor-pointer  transition-all duration-300'>Sign In</p>
            <p className='hover:text-[#088178] cursor-pointer  transition-all duration-300'>View Cart</p>
            <p className='hover:text-[#088178] cursor-pointer  transition-all duration-300'>My Wishlist</p>
            <p className='hover:text-[#088178] cursor-pointer  transition-all duration-300'>Track My Order</p>
            <p className='hover:text-[#088178] cursor-pointer  transition-all duration-300'>Help</p>
            </div>
        </div>


        </div>

        <div className='w-[25%] flex flex-col gap-3  tablets:max-desktop:w-[100%] mobile:max-tablets:w-full '>
            <h1 className='text-xl font-bold'>Install App</h1>
            <p>From App Store or Google Play</p>

            <div className='flex gap-3'>
                <img src={appStore} alt="app-store" />
                <img src={playStore} alt="play-store" />
            </div>


            <p>Secured Payment Gateways</p>
            <img className='w-60' src={paymentsLogo} alt="pay" />
        </div>


        <div className='absolute left-1/2 bottom-1 transform -translate-x-1/2 transform-translate-y-1/2 '>
            <p className=' tablets:max-desktop:text-sm tablets:max-desktop:relative tablets:max-desktop:top-14 tablets:max-desktop:left-[2%] mobile:max-tablets:text-sm mobile:max-tablets:relative mobile:max-tablets:top-14 mobile:max-tablets:left-[0.2%]  mobile:max-tablets:w-96 mobile:max-tablets:py-5 mobile:max-tablets:text-center '>
                
                 <span className='relative bottom-6 mobile:max-tablets:bottom-0 '>Conditions of Use & Sale Privacy Notice Interest-Based Ads</span> <br /> <span className='font-bold absolute bottom-1 right-[11.3%] transform-translate-x-1/2 transform-translate-y-1/2 mobile:max-tablets:w-96 mobile:max-tablets:left-1 '>© 1996-2024, Cara.com, Inc. or its affiliates</span> </p>
        </div>

    </div>
  )
}

export default Footer
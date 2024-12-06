import React from 'react'
import p1 from '/products/f1.jpg'
import p2 from '/products/f2.jpg'
import p3 from '/products/f3.jpg'
import p4 from '/products/f4.jpg'
import p5 from '/products/f5.jpg'
import p6 from '/products/f6.jpg'
import p7 from '/products/f7.jpg'
import p8 from '/products/f8.jpg'
import Product_details from './Pages/Shop/Product_details'
import { Link } from 'react-router-dom'

const Product = () => {
  return (  
    <div className='w-full h-auto iphoneSE:max-iphoneXR:px-5 '>
       <>  <h1 className='text-4xl font-bold text-center mt-10'>Featured Products</h1>
        <p className='text-center text-lg text-[#00000073] font-bold'>Summer Collection New Modern Design</p> </>
          

        <div className='product-container w-[100%]  flex flex-wrap items-center justify-between px-12 py-10 gap-16  cursor-pointer
        iphoneSE:max-iphoneXR:mt-5
        iphoneSE:max-iphoneXR:w-full
        iphoneSE:max-iphoneXR:p-0
        iphoneSE:max-iphoneXR:gap-10
        
        mobile:max-tablets:w-[100%]
        mobile:max-tablets:relative
        mobile:max-tablets:right-0
        mobile:max-tablets:py-2
        mobile:max-tablets:gap-5
        mobile:max-tablets:px-1
        mobile:max-tablets:justify-center
        mobile:max-tablets:items-center

        tablets:max-desktop:w-[100%] tablets:max-desktop:relative tablets:max-desktop:right-20 tablets:max-desktop:py-5 tablets:max-desktop:gap-10 tablets:max-desktop:px-10 tablets:max-desktop:justify-center tablets:max-desktop:items-center '>

               
        <Link to='/product_details'>
          <div className='px-5 py-10 rounded-xl w-96 h-[65vh] flex flex-col gap-3 border-2 border-[#0000003d] hover:shadow-2xl transition-shadow duration-300 

          iphoneSE:max-iphoneXR:h-[70vh]
          iphoneSE:max-iphoneXR:w-full
          iphoneSE:max-iphoneXR:px-5
          iphoneSE:max-iphoneXR:py-5
          iphoneSE:max-iphoneXR:gap-2

          mobile:max-tablets:py-1
          tablets:max-desktop:w-80 tablets:max-desktop:h-[55vh] tablets:max-desktop:relative tablets:max-desktop:left-20 '>
          <img className='w-96 h-96 rounded-2xl' src={p1} alt="" />
          <h5 className='font-bold text-[#00000086]  iphoneSE:mt-1'>adidas</h5>
          <h1 className='text-2xl font-bold text-[#088178] mobile:max-tablets:text-xl'>Cartoon Astronaut T-Shirts</h1>
          <i className='text-[#ffa500]'><i className="fa-solid fa-star"></i> 
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          </i>

        <div className='flex items-center justify-between'>
          <h5 className='text-[#088178] font-bold text-lg'>$78</h5>
          <i><i className="text-[#088178] bg-[#e8f6ea] border-2 relative bottom-1 border-[#cce7d0] w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg fa-solid fa-cart-shopping"></i></i>
          </div>

        </div>
        </Link>



        <Link to='/product_details'>  
        <div className='px-5 py-10 rounded-xl w-96 h-[65vh] flex flex-col gap-3 border-2 border-[#0000003d] hover:shadow-2xl transition-shadow duration-300 

       iphoneSE:max-iphoneXR:h-[70vh]
          iphoneSE:max-iphoneXR:w-full
          iphoneSE:max-iphoneXR:px-5
          iphoneSE:max-iphoneXR:py-5
          iphoneSE:max-iphoneXR:gap-2


        mobile:max-tablets:py-1
        tablets:max-desktop:w-80 tablets:max-desktop:h-[55vh] tablets:max-desktop:relative tablets:max-desktop:left-20  '>
          <img className='w-96 h-96 rounded-2xl' src={p2} alt="" />
          <h5 className='font-bold text-[#00000086]'>adidas</h5>
          <h1 className='text-2xl font-bold text-[#088178] mobile:max-tablets:text-xl'>Cartoon Astronaut T-Shirts</h1>
          <i className='text-[#ffa500]'><i className="fa-solid fa-star"></i> 
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          </i>

        <div className='flex items-center justify-between'>
          <h5 className='text-[#088178] font-bold text-lg'>$78</h5>
          <i><i className="text-[#088178] bg-[#e8f6ea] border-2 relative bottom-1 border-[#cce7d0] w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg fa-solid fa-cart-shopping"></i></i>
          </div>

        </div>
        </Link>

         
         <Link to='/product_details'>
        <div className='px-5 py-10 rounded-xl w-96 h-[65vh] flex flex-col gap-3 border-2 border-[#0000003d] hover:shadow-2xl transition-shadow duration-300 

         iphoneSE:max-iphoneXR:h-[70vh]
          iphoneSE:max-iphoneXR:w-full
          iphoneSE:max-iphoneXR:px-5
          iphoneSE:max-iphoneXR:py-5
          iphoneSE:max-iphoneXR:gap-2


        mobile:max-tablets:py-1
        tablets:max-desktop:w-80 tablets:max-desktop:h-[55vh] tablets:max-desktop:relative tablets:max-desktop:left-20  '>
          <img className='w-96 h-96 rounded-2xl' src={p3} alt="" />
          <h5 className='font-bold text-[#00000086]'>adidas</h5>
          <h1 className='text-2xl font-bold text-[#088178] mobile:max-tablets:text-xl'>Cartoon Astronaut T-Shirts</h1>
          <i className='text-[#ffa500]'><i className="fa-solid fa-star"></i> 
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          </i>

        <div className='flex items-center justify-between'>
          <h5 className='text-[#088178] font-bold text-lg'>$78</h5>
          <i><i className="text-[#088178] bg-[#e8f6ea] border-2 relative bottom-1 border-[#cce7d0] w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg fa-solid fa-cart-shopping"></i></i>
          </div>

        </div>
         
         </Link>

         
         <Link to='/product_details'>
        <div className='px-5 py-10 rounded-xl w-96 h-[65vh] flex flex-col gap-3 border-2 border-[#0000003d] hover:shadow-2xl transition-shadow duration-300 

        iphoneSE:max-iphoneXR:h-[70vh]
          iphoneSE:max-iphoneXR:w-full
          iphoneSE:max-iphoneXR:px-5
          iphoneSE:max-iphoneXR:py-5
          iphoneSE:max-iphoneXR:gap-2



        mobile:max-tablets:py-1
        tablets:max-desktop:w-80 tablets:max-desktop:h-[55vh] tablets:max-desktop:relative tablets:max-desktop:left-20  '>
          <img className='w-96 h-96 rounded-2xl' src={p4} alt="" />
          <h5 className='font-bold text-[#00000086]'>adidas</h5>
          <h1 className='text-2xl font-bold text-[#088178] mobile:max-tablets:text-xl'>Cartoon Astronaut T-Shirts</h1>
          <i className='text-[#ffa500]'><i className="fa-solid fa-star"></i> 
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          </i>

        <div className='flex items-center justify-between'>
          <h5 className='text-[#088178] font-bold text-lg'>$78</h5>
          <i><i className="text-[#088178] bg-[#e8f6ea] border-2 relative bottom-1 border-[#cce7d0] w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg fa-solid fa-cart-shopping"></i></i>
          </div>

          
            </div>
         </Link>

           <Link to='/product_details'>
              <div className='px-5 py-10 rounded-xl w-96 h-[65vh] flex flex-col gap-3 border-2 border-[#0000003d] hover:shadow-2xl transition-shadow duration-300 

             iphoneSE:max-iphoneXR:h-[70vh]
          iphoneSE:max-iphoneXR:w-full
          iphoneSE:max-iphoneXR:px-5
          iphoneSE:max-iphoneXR:py-5
          iphoneSE:max-iphoneXR:gap-2

              
              mobile:max-tablets:py-1
              tablets:max-desktop:w-80 tablets:max-desktop:h-[55vh] tablets:max-desktop:relative tablets:max-desktop:left-20  '>
              <img className='w-96 h-96 rounded-2xl' src={p5} alt="" />
              <h5 className='font-bold text-[#00000086]'>adidas</h5>
              <h1 className='text-2xl font-bold text-[#088178] mobile:max-tablets:text-xl'>Cartoon Astronaut T-Shirts</h1>
              <i className='text-[#ffa500]'><i className="fa-solid fa-star"></i> 
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              </i>

            <div className='flex items-center justify-between'>
              <h5 className='text-[#088178] font-bold text-lg'>$78</h5>
              <i><i className="text-[#088178] bg-[#e8f6ea] border-2 relative bottom-1 border-[#cce7d0] w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg fa-solid fa-cart-shopping"></i></i>
              </div>

              
              </div>
           </Link>



           <Link to='/product_details'>
            <div className='px-5 py-10 rounded-xl w-96 h-[65vh] flex flex-col gap-3 border-2 border-[#0000003d] hover:shadow-2xl transition-shadow duration-300 

            iphoneSE:max-iphoneXR:h-[70vh]
          iphoneSE:max-iphoneXR:w-full
          iphoneSE:max-iphoneXR:px-5
          iphoneSE:max-iphoneXR:py-5
          iphoneSE:max-iphoneXR:gap-2

           mobile:max-tablets:py-1
           tablets:max-desktop:w-80 tablets:max-desktop:h-[55vh] tablets:max-desktop:relative tablets:max-desktop:left-20  '>
          <img className='w-96 h-96 rounded-2xl' src={p6} alt="" />
          <h5 className='font-bold text-[#00000086]'>adidas</h5>
          <h1 className='text-2xl font-bold text-[#088178] mobile:max-tablets:text-xl'>Cartoon Astronaut T-Shirts</h1>
          <i className='text-[#ffa500]'><i className="fa-solid fa-star"></i> 
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
            </i>

        <div className='flex items-center justify-between'>
          <h5 className='text-[#088178] font-bold text-lg'>$78</h5>
          <i><i className="text-[#088178] bg-[#e8f6ea] border-2 relative bottom-1 border-[#cce7d0] w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg fa-solid fa-cart-shopping"></i></i>
          </div>

          
           </div>
           </Link>


           <Link to='/product_details'>
           <div className='px-5 py-10 rounded-xl w-96 h-[65vh] flex flex-col gap-3 border-2 border-[#0000003d] hover:shadow-2xl transition-shadow duration-300 
          iphoneSE:max-iphoneXR:h-[70vh]
          iphoneSE:max-iphoneXR:w-full
          iphoneSE:max-iphoneXR:px-5
          iphoneSE:max-iphoneXR:py-5
          iphoneSE:max-iphoneXR:gap-2
          mobile:max-tablets:py-1
          tablets:max-desktop:w-80 tablets:max-desktop:h-[55vh] tablets:max-desktop:relative tablets:max-desktop:left-20  '>
          <img className='w-96 h-96 rounded-2xl' src={p7} alt="" />
          <h5 className='font-bold text-[#00000086]'>adidas</h5>
          <h1 className='text-2xl font-bold text-[#088178] mobile:max-tablets:text-xl'>Cartoon Astronaut T-Shirts</h1>
          <i className='text-[#ffa500]'><i className="fa-solid fa-star"></i> 
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          </i>

        <div className='flex items-center justify-between'>
          <h5 className='text-[#088178] font-bold text-lg'>$78</h5>
          <i><i className="text-[#088178] bg-[#e8f6ea] border-2 relative bottom-1 border-[#cce7d0] w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg fa-solid fa-cart-shopping"></i></i>
          </div>

          
          </div>
          </Link>



           <Link to='/product_details'>
           <div className='px-5 py-10 rounded-xl w-96 h-[65vh] flex flex-col gap-3 border-2 border-[#0000003d] hover:shadow-2xl transition-shadow duration-300 

        iphoneSE:max-iphoneXR:h-[70vh]
          iphoneSE:max-iphoneXR:w-full
          iphoneSE:max-iphoneXR:px-5
          iphoneSE:max-iphoneXR:py-5
          iphoneSE:max-iphoneXR:gap-2




           mobile:max-tablets:py-1
           tablets:max-desktop:w-80 tablets:max-desktop:h-[55vh] tablets:max-desktop:relative tablets:max-desktop:left-20  '>
          <img className='w-96 h-96 rounded-2xl' src={p8} alt="" />
          <h5 className='font-bold text-[#00000086]'>adidas</h5>
          <h1 className='text-2xl font-bold text-[#088178] mobile:max-tablets:text-xl'>Cartoon Astronaut T-Shirts</h1>
          <i className='text-[#ffa500]'><i className="fa-solid fa-star"></i> 
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          </i>

        <div className='flex items-center justify-between'>
          <h5 className='text-[#088178] font-bold text-lg'>$78</h5>
          <i><i className="text-[#088178] bg-[#e8f6ea] border-2 relative bottom-1 border-[#cce7d0] w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg fa-solid fa-cart-shopping"></i></i>
          </div>

          
           </div>
           </Link>

       
        </div>



        


    </div>
  )
}

export default Product
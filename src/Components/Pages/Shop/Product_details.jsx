import React, { useState } from 'react';
import p1 from '/products/f1.jpg'
import p2 from '/products/f2.jpg'
import p3 from '/products/f3.jpg'
import p4 from '/products/f4.jpg'
import p5 from '/products/f5.jpg'
import p6 from '/products/f6.jpg'
import p7 from '/products/f7.jpg'
import p8 from '/products/f8.jpg'
import Product2 from '../../Product2';
import Newsletter from '../../Newsletter';
import Footer from '../../Footer';

const Product_details = () => {

    const [mainImage, setMainImage] = useState(p1); // Default main image
  
  



  return (
    <div>
      
      <div className='w-full h-[80vh] flex px-10 py-10 gap-3 mobile:max-tablets:flex-col mobile:max-tablets: '>

        <div className="display_image w-[40%] h-[100%]  flex flex-col gap-2 mobile:max-tablets:w-full mobile:max-tablets:h-[50vh] ">
          <img src={mainImage} className=' ' alt="" id='mainImg' />

          <div className='Other-products w-full h-[30%] flex items-center justify-center gap-10 cursor-pointer tablets:max-desktop:gap-0 mobile:max-tablets:gap-0 '>

           <div>
            <img className='w-[100%] px-1 py-1 bg-black/10 '  src={p2} alt="" onClick={()=>{
              setMainImage(p2)
           }} />
           </div>

           <div>
            <img className='w-[100%] px-1 py-1 bg-black/10 '  src={p3} alt="" onClick={()=>{
              setMainImage(p3)
           }} />  
           </div>

            <div>
              <img className='w-[100%] px-1 py-1 bg-black/10 '  src={p4} alt="" onClick={()=>{
              setMainImage(p4)
           }} />
            </div>

            <div>
              <img className='w-[100%] px-1 py-1 bg-black/10 '  src={p5} alt="" onClick={()=>{
              setMainImage(p5)
           }} />
            </div>

          </div>
        </div>


       <div className="display_info w-[60%] h-[70vh] px-5 py-10 flex flex-col justify-between 
       mobile:max-tablets:w-full mobile:max-tablets:px-0 mobile:max-tablets:py-10 mobile:max-tablets:gap-5  ">
        <h5 className='text-lg font-semibold'>Home / T-shirts</h5>
        <h1 className='text-2xl font-bold relative top-1'>Men's fashion t-shirt</h1>

       <div className='flex flex-col justify-center gap-2 '>
       <h1 className='text-2xl font-bold'>$139.00</h1>

        <select name="" id="" className='w-32 h-10 ' >
          <option value="" className='text-center'>Select Size</option> 
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>

        <div className='flex items-center gap-3 '>
          <input type="number"  defaultValue={1} className='w-10 h-10 text-center focus:outline-none border border-black rounded-sm ' />
          <button className='bg-[#008178] w-36 h-12 font-bold text-md rounded-sm text-white flex items-center justify-center '>Add to Cart</button>
        </div>

       </div>

        <div className='flex flex-col gap-3 '>
        <h1 className='text-2xl font-bold'>Product Details</h1>
        <p className='text-xl font-semibold tablets:max-desktop:text-xs mobile:max-tablets:text-xs '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iusto ut sapiente cumque maiores fugiat ipsum, cupiditate obcaecati! Deserunt provident nostrum aut ea vitae! Laudantium a ducimus omnis iure nobis?
        Aspernatur et impedit nulla doloribus sit rerum repellat repudiandae neque ipsa, illo quod perspiciatis tempora dignissimos culpa, ex magnam magni esse in sint nobis corporis? Voluptate, iste pariatur! Ipsa, dignissimos.
        Dolorum officiis aliquid corporis, accusantium aliquam, natus eius velit consequuntur vitae sint quibusdam sed? Ea, suscipit tempora nam voluptates quidem ullam cupiditate, animi aspernatur quod accusamus praesentium, repellendus nobis deleniti.
        Quaerat accusantium aliquid quod aut asperiores maiores id quibusdam at, tempore perspiciatis, alias unde fuga voluptates ea, qui aspernatur fugit voluptatum earum? Quae perspiciatis officia soluta quidem mollitia eius neque?
        Ipsam atque, quaerat ex aut voluptatum molestiae nemo distinctio sit consequuntur totam. A in vero, neque quaerat deserunt veniam accusantium dolorem quos ipsa odit eveniet eligendi porro voluptates, ut facilis.</p>
        </div>

       </div>


      </div>

      <div className='mt-60 tablets:max-desktop:mt-0 mobile:max-tablets:mt-[110%] '>
      <Product2 />
      </div>
       
       <Newsletter />
      <Footer />



    </div>
  )
}

export default Product_details
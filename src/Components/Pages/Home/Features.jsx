import React from 'react'
import f1 from '/src/images/features/f1.png';
import f2 from '/src/images/features/f2.png';
import f3 from '/src/images/features/f3.png';
import f4 from '/src/images/features/f4.png';
import f5 from '/src/images/features/f5.png';
import f6 from '/src/images/features/f6.png';



const Features = () => {
  return (
    <div className='px-28 py-20 flex items-center justify-between  tablets:max-desktop:px-20 tablets:max-desktop:flex-wrap tablets:max-desktop:gap-10 tablets:max-desktop:justify-center tablets:max-desktop:py-10 mobile:px-10 mobile py-1 mobile:flex-wrap mobile:justify-center mobile:gap-10  '>


        <div className='py-5 w-48 h-64 border-2  flex flex-col gap-5  items-center justify-center border-[#cce7d0] rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300'>
            <img className='w-60 h-52' src={f1} alt="" />
            <h1 className='w-36 h-10 flex items-center justify-center text-[#088178] bg-[#fddde4] rounded-md text-center font-bold capitalize  '>Free Shipping</h1>
        </div>

        <div className='py-5 w-48 h-64 border-2  flex flex-col gap-5  items-center justify-center border-[#cce7d0] rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300'>
            <img className='w-60 h-52' src={f2} alt="" />
            <h1 className='w-36 h-10 flex items-center justify-center text-[#088178] bg-[#cdebbc] rounded-md text-center font-bold capitalize  '>Online Order</h1>
        </div>


        <div className='py-5 w-48 h-64 border-2  flex flex-col gap-5  items-center justify-center border-[#cce7d0] rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300'>
              <img className='w-60 h-52' src={f3} alt="" />
            <h1 className='w-36 h-10 flex items-center justify-center text-[#088178] bg-[#d1e8f2] rounded-md text-center font-bold capitalize  '>Save Money</h1>
        </div>


        <div className='py-5 w-48 h-64 border-2  flex flex-col gap-5  items-center justify-center border-[#cce7d0] rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300'>
            <img className='w-60 h-52' src={f4} alt="" />
            <h1 className='w-36 h-10 flex items-center justify-center text-[#088178] bg-[#cdd4f8] rounded-md text-center font-bold capitalize  '>Promotions</h1>
        </div>


        <div className='py-5 w-48 h-64 border-2  flex flex-col gap-5  items-center justify-center border-[#cce7d0] rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300'>
            <img className='w-60 h-52' src={f5} alt="" />
            <h1 className='w-36 h-10 flex items-center justify-center text-[#088178] bg-[#f6dbf6] rounded-md text-center font-bold capitalize  '>Happy Sell</h1>
        </div>


        <div className='py-5 w-48 h-64 border-2  flex flex-col gap-5  items-center justify-center border-[#cce7d0] rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300'>
            <img className='w-60 h-52' src={f6} alt="" />
            <h1 className='w-36 h-10 flex items-center justify-center text-[#088178] bg-[#fff2e5] rounded-md text-center font-bold capitalize  '>24/7 Support</h1>
        </div>


       
    </div>
  )
}

export default Features 
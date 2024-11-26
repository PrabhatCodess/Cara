import React from 'react'

const Newsletter = () => {
  return (
    <div className='py-20'>
        
        <div className="newsletter-container w-full h-[22vh] px-28 py-0 bg-[#041e42] flex items-center justify-between gap-10 bg-[url('/src/images/banner/b14.png')] bg-no-repeat bg-[20%_30%] tablets:max-desktop:px-20  tablets:max-desktop:bg-[20%_30%] tablets:max-desktop:flex-col tablets:max-desktop:items-start tablets:max-desktop:justify-center tablets:max-desktop:py-0  tablets:max-desktop:gap-5
        mobile:px-5 mobile:bg-[20%_30%] mobile:flex-col mobile:items-start
        mobile:justify-center mobile:py-32 
        mobile:gap-5  ">


        <div className='flex flex-col gap-2  '>  
            <h1 className='text-4xl text-white font-bold capitalize tablets:max-desktop:text-3xl mobile:text-3xl'>Sign up for newsletters</h1>
            <p className='text-xl text-[#ffffff6e] capitalize tablets:max-desktop:text-sm mobile:text-sm'>Get E-mail updates about our latest shop and <span className='text-[#ffbd27] capitalize'>special offers</span></p>
        </div>


        <div className='  flex items-center justify-center '>
          <input className='w-96 h-14 rounded-tl-md rounded-bl-md px-5 text-xl font-bold capitalize tablets:max-desktop:w-82 tablets:max-desktop:h-12 tablets:max-desktop:text-sm 
          mobile:w-60 mobile:h-12 mobile:text-sm' type="email" placeholder='Your email address' />

        <button className='w-40 h-14 bg-[#088178] text-black text-xl font-bold rounded-tr-md rounded-br-md relative top-[0px]  hover:text-white transition-all duration-300 hover:scale-110 tablets:max-desktop:w-24 tablets:max-desktop:h-12 tablets:max-desktop:text-sm  tablets:max-desktop:top-0 mobile:w-28 mobile:h-12 '>Sign Up</button>
        </div>

        </div>
    </div>
  )
}

export default Newsletter
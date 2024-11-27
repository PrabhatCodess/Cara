import React from 'react'

const Banner = () => {
  return (
    <div className='py-20'>

        <div className=' w-full h-96 bg-[#088178] flex flex-col gap-10 items-center justify-center bg-[url("/src/images/banner/b2.jpg")] bg-no-repeat bg-cover bg-center tablets:max-desktop:h-[30vh] tablets:max-desktop:bg-[right_20%_top_10%] tablets:max-desktop:bg-cover tablets:max-desktop:gap-5 mobile:max-tablets:h-[30vh] mobile:max-tablets:bg-[right_20%_top_10%] mobile:max-tablets:bg-cover mobile:max-tablets:gap-5 '>
            <h1 className='text-4xl font-bold text-white tablets:max-desktop:text-2xl mobile:max-tablets:text-xl'>Repair Services</h1>
            <h1 className='text-5xl font-bold text-white tablets:max-desktop:text-3xl mobile:max-tablets:text-xl'>Up to <span className='text-red-900'>70% off</span> - All t-shirts & Accessories</h1>
            <button className='w-64 h-16 bg-white text-black text-xl font-bold rounded-lg px-26 py-4 hover:bg-[#088178] hover:text-white transition-all duration-300 hover:scale-90 tablets:max-desktop:w-48 tablets:max-desktop:h-12 tablets:max-desktop:text-lg tablets:max-desktop:px-10 tablets:max-desktop:py-2 mobile:max-tablets:w-44 mobile:max-tablets:h-14 '>Explore More</button>
        </div>


    </div>
  )
}

export default Banner
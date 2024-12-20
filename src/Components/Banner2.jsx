import React from 'react'

const Banner2 = () => {
  return (
    <div className='flex items-center justify-between px-14 py-10 gap-10 tablets:max-desktop:flex-col tablets:max-desktop:gap-5 tablets:max-desktop:px-0 sm:flex-col sm:gap-5 sm:px-0 mobile:max-tablets:flex-col mobile:max-tablets:gap-5 mobile:max-tablets:px-0 '>

        <div className='w-1/2 h-96 bg-[#088178] flex flex-col gap-2 px-10 items-left justify-center bg-[url("/banner/b17.jpg")] bg-no-repeat bg-cover bg-center tablets:max-desktop:w-full tablets:max-desktop:h-[50vh] sm:w-full sm:h-[40vh] sm:px-5 mobile:max-tablets:w-full'>
          <h5 className='text-white opacity-70 text-3xl font-thin- sm:text-xl'>crazy deals</h5>
          <h1 className='text-white text-4xl font-bold sm:text-2xl'>buy 1 get 1 free</h1>
          <p className='text-white opacity-70 text-lg font-bold sm:text-sm'>The best classic dress is on sale at cara</p>
          <button className='w-36 h-12 flex items-center justify-center bg-transparent border-2 text-white text-xl font-bold  px-26 py-4 hover:bg-[#088178] hover:text-white transition-all duration-300 hover:scale-90 sm:w-28 sm:h-10 sm:text-lg'>Learn More</button>
        </div>

        <div className='w-1/2 h-96 bg-[#088178] flex flex-col gap-2 px-10 items-left justify-center bg-[url("/banner/b10.jpg")] bg-no-repeat bg-cover bg-center tablets:max-desktop:w-full tablets:max-desktop:h-[50vh] sm:w-full sm:h-[40vh] sm:px-5 mobile:max-tablets:w-full'>
          <h5 className='text-white opacity-60 text-3xl font-thin- sm:text-xl'>spring/summer</h5>
          <h1 className='text-white text-4xl font-bold sm:text-2xl'>upcoming season</h1>
          <p className='text-white opacity-60 text-lg font-bold sm:text-sm'>The best classic dress is on sale at cara</p>
          <button className='w-36 h-12 flex items-center justify-center bg-transparent border-2 text-white text-xl font-bold  px-26 py-4 hover:bg-[#088178] hover:text-white transition-all duration-300 hover:scale-90 sm:w-28 sm:h-10 sm:text-lg'>Collection</button>
        </div>
    </div>
    
  )
}

export default Banner2
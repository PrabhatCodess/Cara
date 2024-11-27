import React from 'react'

const Banner3 = () => {
  return (
    <div className='flex items-center justify-between px-14 gap-10 tablets:max-desktop:px-2 mobile:max-tablets:px-2 mobile:max-tablets:flex-col'>
      
    <div className='w-[33%] h-80 bg-[#088178] flex flex-col gap-5 px-10 items-left justify-center bg-[url("/src/images/banner/b7.jpg")] bg-no-repeat bg-cover bg-center tablets:max-desktop:px-1  mobile:max-tablets:w-full '>
      <h1 className='text-white text-4xl uppercase font-bold mt-8'>season sale</h1>
      <p className='text-[#ec544e]  capitalize opacity-70 text-2xl  font-bold '>winter collection 50% off</p>
    </div>

    <div className='w-[33%] h-80 bg-[#088178] flex flex-col px-8 gap-5  items-left justify-center bg-[url("/src/images/banner/b4.jpg")] bg-no-repeat bg-cover bg-center tablets:max-desktop:px-1 mobile:max-tablets:w-full '>
      <h1 className='text-white  text-4xl uppercase  font-bold  mt-8'>new footwear collection</h1>
      <p className='text-[#ec544e]  capitalize opacity-70 text-2xl font-bold'>spring / summer 2024</p>
    </div>


    <div className='w-[33%] h-80 bg-[#088178] flex flex-col  px-10 gap-5 items-left justify-center bg-[url("/src/images/banner/b18.jpg")] bg-no-repeat bg-cover bg-center tablets:max-desktop:px-1 mobile:max-tablets:w-full '>
      <h1 className='text-white text-4xl uppercase font-bold  mt-8'>t-shirts</h1>
      <p className='text-[#ec544e]  capitalize opacity-70 text-2xl font-bold'>New trendy t-shirts</p>
    </div>
</div>
  )
}

export default Banner3
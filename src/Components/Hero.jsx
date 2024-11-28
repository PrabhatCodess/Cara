import React from 'react'

const Hero = () => {
  return (
    <div className=' w-full h-[90vh] bg-[url("/hero4.png")] bg-no-repeat bg-cover flex flex-col items-start justify-center px-28 mb-10 gap-1 tablets:max-desktop:px-10 tablets:max-desktop:bg-[right_30%_top_10%] tablets:max-desktop:h-[70vh] mobile:max-tablets:px-2 mobile:max-tablets:py-1 mobile:max-tablets:bg-[right_35%_top_10%]'>
        <h4 className='text-4xl font-semibold mobile:max-tablets:text-3xl'>Trade-in-offer</h4>
        <h2 className='text-6xl font-bold mobile:max-tablets:text-3xl'>Super Value Deals</h2>
        <h1 className='text-6xl font-bold text-[#088178] mobile:max-tablets:text-3xl'>On All Products</h1>
        <p className='text-[18px] text-[#00000073] font-bold mobile:max-tablets:'>Save more with coupouns & up to 70% off!</p>
        <button className='w-64 h-14 text-lg relative text-[#088178] font-bold  bg-[url("/button.png")] bg-no-repeat bg-cover rounded-full px-26 py-4 mt-5 mobile:max-tablets:right-7 '>Buy Now</button>
    </div>
  )
}

export default Hero

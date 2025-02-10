import React from 'react'

const Body = () => {
  return (
    <div className='w-full   flex '>
      <div className='w-1/2 pl-36'>
        <div className='mt-5'>
            <h1 className='font-extrabold text-7xl ' >YOUR FEET DESERVE THE BEST</h1>
            <p className='mt-5 font-semibold opacity-70'>Step into comfort and style with our premium-quality shoes! 👟✨ Designed for durability and fashion, our collection ensures the perfect fit for every occasion. 
            </p>
        </div>
        <div className='mt-5 flex gap-4'>
            <button className='px-3 py-1 bg-red-600 text-white font-semibold text-xl rounded-md'>Shop Now</button>
            <button className='border-[5px] border-zinc-500 bg-white px-3 py-1 text-xl font-semibold opacity-55 rounded-md'>Category</button>
        </div>
        <div>
            <h3 className='text-sm opacity-60 mt-4'>Also Available On</h3>
            <div className='flex mt-4 gap-4'>
                <img src="/images/flipkart.png" alt="" />
                <img src="/images/amazon.png" alt="" />
            </div>
        </div>
      </div>
      <div>
        <div className='w-[80%] pl-32 mt-20'>
        <img src="/images/hero-image.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Body

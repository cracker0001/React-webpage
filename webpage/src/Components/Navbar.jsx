import React from 'react'
const Navbar = () => {
  return (
    <div className='w-full h-[15%] flex justify-around items-center gap-20'>
      <div>
      <img src="/images/brand_logo.png" alt="" />
      </div>
        <div>
            <ul className='flex gap-7 '>
                <li className='font-bold text-xl opacity-55'>MENU</li>
                <li className='font-bold text-xl opacity-55'>LOCATION</li>
                <li className='font-bold text-xl opacity-55'>ABOUT</li>
                <li className='font-bold text-xl opacity-55'>CONTACT</li>
            </ul>
        </div>
       <div>
        <button className='bg-red-600 px-4 py-1 rounded-md text-white text-xl font-semibold'>Login</button>
       </div>
    </div>
  )
}

export default Navbar

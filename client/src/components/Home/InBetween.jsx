import React from 'react'

const InBetween = () => {
  return (
    <div className='flex w-full items-center justify-evenly min-h-[250px] pb-20'>
        <img className='h-48 object-contain' src="https://www.youtube.com/img/music/tastebuilder/shelf_thumbnail/v6/IN_992_X_304.png" alt="" />
        <div className="text-white">
            <p className='font-semibold font-roboto tracking-widest text-xl'>Tell us which artists you like</p>
            <p className='text-gray-400 text-base'>We'll create an experience just for you</p>
            <button className='px-3 py-2 rounded-3xl my-4 font-semibold text-black bg-white'>Let's go</button>
        </div>
    </div>
  )
}

export default InBetween
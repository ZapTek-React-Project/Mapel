import React from 'react'

export default function Card({image,button,description,cost}) {
  return (
    <div className='mt-3 mb-3 max-w-sm lg:mx-auto '>
        <div className='relative'>
      <div className='w-full'>
        {image}
      </div>
      <span className='absolute top-4 right-24 bg-white text-gray-800 text-xs font-normal px-3 py-1 border '>
        {button}
      </span>
      </div>
      <div>
        {description}
      </div>
      <div>
        {cost}
      </div>
    </div>
  )
}

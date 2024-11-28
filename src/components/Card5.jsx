import React from 'react'

function Card5({image,name,role}) {
  return (
    <div className='max-w-sm'>
      <div className='max-w-sm'> 
    <div> 
        {image} 
    </div> 
    <div className='text-xl my-2'> 
        {name} 
    </div> 
    <div className='text-xs text-gray-800 my-1 lg:text-xl'> 
        {role} 
    </div> 
</div>
    </div>
  )
}

export default Card5

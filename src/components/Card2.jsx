import React from 'react'

function Card2({picture,tag}) {
  return (
    <div className='lg: mx-auto border'>
      <div>
        {picture}
      </div>
      <div className='m-5 font-semibold'>
        {tag}
      </div>
    </div>
  )
}

export default Card2

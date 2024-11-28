import React from 'react'

function Card2({picture,tag}) {
  return (
    <div className='lg: mx-auto'>
      <div>
        {picture}
      </div>
      <div>
        {tag}
      </div>
    </div>
  )
}

export default Card2

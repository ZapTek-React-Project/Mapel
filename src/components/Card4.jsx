import React from 'react'

function Card4({num,image,about,description,pic}) {
  return (
    <div >
      <div className=' mt-4 mx-4 lg:'>
        <section className='mx-auto'>
    <a className='lg:flex justify-between' href="#"> 
      <div className='hidden lg:block text-3xl'>
        {num}
      </div>
    <div className='block lg:hidden mx-20'> 
        {image} 
    </div>
    <div> 
    <div className='text-2xl font-sans'>  
        {about} 
    </div>  
    <div className='text-gray-600 font-serif py-4'> 
        {description} 
    </div> 
    </div>
    <div className=' hidden lg:block'> 
        {pic} 
    </div> 
       </a> 
    <hr/>
    </section> 
</div>
    </div>
  )
}

export default Card4

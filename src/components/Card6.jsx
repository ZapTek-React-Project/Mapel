import React from 'react'
import { NextButton } from "../components/Buttons";

function Card6({date,Description,image,description}) {
  return (
    <div className='bg- -bg--background mx-3 my-7'>
      <a href='#blogs'>
      <div className='py-2 px-5'>
        <div className='border w-1/3 p-1 bg-white text-black mt-3 lg:border lg:w-1/4'>
            {date}
        </div>
        <div className='lg:text-xl py-4'>
            {Description}
        </div>
        <div>
            {image}
        </div>
        <div className='pt-2 text-gray-700 '>
            {description}
        </div>
        <div className="ml-2 pt-[40px] pb-[50px]">
            <NextButton
              text={"Read Articles"}
              iconBlack={"/670d0c44934a34fca868597d_black-arrow.svg"}
              iconWhite={"/670d0bd0cf6b1850bb26a252_button-arrow.svg"}
            />
          </div>
        
      </div>
      </a>
    </div>
  )
}

export default Card6

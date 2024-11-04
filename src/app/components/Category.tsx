import React from 'react'
import Image from 'next/image'

const Category = () => {
  return (
    <div>
      <div className='w-full mt-12 mb-10 flex justify-center items-center'>
        <h1 className='font-[400] text-[75px] tracking-[4.5%] teaxt-black'>Shop By Categories</h1>
      </div>
      <div className='w-full flex justify-center items-center '>
        <div className='w-[1229px] h-[75px] flex justify-center items-center'>
            <Image src={"/statics/Frame1.png"} alt='img' width={700} height={900} layout='responsive' className='w-full h-full'></Image>
        </div>
      </div>
    </div>
  )
}

export default Category

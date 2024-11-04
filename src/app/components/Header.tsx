import React from 'react'
import { Rye } from "next/font/google"

const RyeText = Rye({
  subsets : ["latin"],
  weight : ["400"],
})


const Header = () => {
  return (
    <div className='w-full h-[8.44rem] bg-[#A29875] flex justify-start items-center'>
      <h1 className={`text-[4.69rem] ${RyeText.className} max-[765px]:text-[4rem] leading-[93.75px] font-[400] ml-[2.2rem] text-white`}>MANZZARI</h1>
    </div>
  )
}

export default Header

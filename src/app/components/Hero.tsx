import React from 'react'
import Image from 'next/image'
import { Libre_Bodoni } from "next/font/google"


const libre= Libre_Bodoni({
  subsets: ["latin"],
  weight: ["700"]
})
const Hero = () => {
  return (
    <div className='w-full flex justify-center items-center max-[1200px]:flex-col'>
    
            <span className='flex flex-col'>
                <h1 className={`w-[496px] ${libre.className} h-[189px] max font-[700] text-[40px] leading-[65.8px] tracking-[2.5%]`}>IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>

                <p className='w-[800px] max-[1344px]:w-[700px] max-[765px]:w-[900px] leading-9 my-9 text-[#A29875] font-[500] text-[1.9rem]'>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>

                <button className='w-[288px] text-white hover:scale-90 transition-all duration-[1s] h-[58px] bg-[#A29875] text-[1.5rem] rounded-[10px] p-[10px] gap-[10px]'>Explore Now</button>

                </span>

      <span className='w-[28.88rem] max-[1344px]:w-[25rem] max-[1344px]:h-[40.44rem] max-[1344px]:mx-5 h-[40.44rem] my-[8rem] '>
        <Image src={"/statics/heroimg.png"} alt="img" width={400} height={800} className='w-full h-full'></Image>
      </span>
    </div>
  )
}

export default Hero

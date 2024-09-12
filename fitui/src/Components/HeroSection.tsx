// import React from 'react'

import { assets } from "../Assets/assets"

const Heros = () => {
  return (
    <div>
      <div className="flex flex-col  sm:flex-row border border-gray-400">
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
          <div className="text-[#414141]">
            <div className="flex items-center gap-2">
              <p className=" w-8 md:w-11 h-[2px] bg-[#414141]"></p>
              <p className="font-medium text-sm md:text-base"> OUR BEST SELLERS</p>
            </div>
            <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed">LATEST ARRIVALS</h1>
            <div className="flex items-center gap-2">
              <p className="font-bold text-sm md:text-base">
              <p className=" w-8 md:w-11 h-[2px] bg-[#414141]">SHOP NOW</p>

              </p>
            </div>
          </div>
        </div>
      <img className="w-full sm:w-1/2" src={assets.pic5} alt=""></img>
      </div>


    </div>
  )
}

export default Heros
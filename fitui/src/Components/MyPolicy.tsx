import React from 'react'
import { assets } from '../Assets/assets'

const MyPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img className='w-12 auto mb-5' alt='' src={assets.nba}/>
            <p className='font-semibold'> NeW AND GOOD</p>
            <p className='text-gray-400'> FAST DELIVERY</p>
        </div>
        <div>
            <img className='w-12 auto mb-5' alt='' src={assets.asv}/>
            <p className='font-semibold'> NeW AND GOOD</p>
            <p className='text-gray-400'> FAST DELIVERY</p>
        </div>
        <div>
            <img className='w-12 auto mb-5' alt='' src={assets.mk}/>
            <p className='font-semibold'> NeW AND GOOD</p>
            <p className='text-gray-400'> FAST DELIVERY</p>
        </div>

    </div>
  )
}

export default MyPolicy
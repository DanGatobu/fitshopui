import React from 'react'
import { assets } from '../Assets/assets'

const Footter = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-xs '>
        <div>
            <img src={assets.logo} alt="" className='w-32 mb-5' />
            <p className='w-full md:w-2/3 text-gray-600'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus libero maiores magnam cumque, laboriosam cupiditate eligendi explicabo quod sapiente amet obcaecati deserunt beatae aperiam et? Architecto cupiditate repudiandae quis quam?
            </p>

        </div>
        <div>
            <p className='text-xl font-medium mb-5'></p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Artists</li>
                <li>Privacy Policy</li>

            </ul>

        </div>
        <div>
            <p className='text-xl font-medium mb-5'></p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+254 07252672272</li>
                <li>danbuilder@gmail.com</li>

            </ul>

        </div>
        <div >
            <hr />
            <p className='py-5 text-sm text-center'> Copyright @2024 All rights Reserved</p>

        </div>
    </div>
  )
}

export default Footter
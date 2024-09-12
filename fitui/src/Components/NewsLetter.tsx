import React from 'react'

const NewsLetter = () => {
const onSubHandle=(event)=>{
    event.preventDefault();

}

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'> Subcribe now and get 20% free</p>
        <p className='mt-3 text-gray-400' >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam quod quis eum quos, numquam temporibus.
        </p>
        <form onSubmit={onSubHandle} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input type="email" className='w-full sm:flex-1 outline-none ' placeholder='Enter Your Email' />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>

            
        </form>
    </div>
  )
}

export default NewsLetter
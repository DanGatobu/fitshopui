import React from 'react'


const TitlePart = ({title1,title2}) => {
  return (
    <div className='inline-flex items-center gap-2 mb-3' >
        <div>
            <p className='text-gray-500'>
                {title1}  <span className='text-gray-700 font-medium'></span>{title2}</p>
            <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] text-gray-700'></p>
        </div>

    </div>
  )
}

export default TitlePart
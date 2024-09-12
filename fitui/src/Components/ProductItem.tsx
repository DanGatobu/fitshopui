import React from 'react'
import { Link } from 'react-router-dom'

const ProductItem = ({id,name,artist,price,currency,image}) => {

  return (
   <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
    <div className='overflow-hidden'>
        <img className='hover:scale-110 transition ease-in-out ' src={image[0]} alt=''></img>

    </div>
    <p className=' pt-3 pb-1 text-sm'>{name}</p>
    <p className=' pt-3 pb-1 text-sm'>{artist}</p>
    <p className='text-sm font-medium'>{price} {currency}</p>
   </Link>
  )
}

export default ProductItem
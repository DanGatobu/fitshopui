import React, { useContext } from 'react'
import { ShopContext } from '../context/FitShopcontext'
import TitlePart from './TitlePart';

const CartTotal = () => {
    const {getCartTotal,currency,deliverfee}=useContext(ShopContext);
    console.log("Nimeitwa")


  return (
    <div className='w-full'>
        
        <div className='text-2xl'>
            <TitlePart title1={"CART"} title2={"TOTAL"}/>

        </div>
        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>SUBTOTAL</p>
                <p>{currency}{getCartTotal()}.00</p>               

            </div>
            <div className='flex justify-between'>
                <p>Shipping Fee</p>
                <p>{currency}{deliverfee}.00</p> 

            </div>
            <hr />
            <div className='flex justify-between'>
                <b>Total</b>
                <b>{currency} {getCartTotal()===0?0:getCartTotal()+deliverfee}</b>

            </div>

        </div>
    </div>
    
  )
}

export default CartTotal
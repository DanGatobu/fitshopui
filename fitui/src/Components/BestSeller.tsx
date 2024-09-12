import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/FitShopcontext';
import TitlePart from './TitlePart';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const { products } =useContext(ShopContext);
    const [bestSeller , updateBestseller]=useState([]);

    useEffect(()=>{
        const bestProduct=products.filter((item)=>item.bestseller);
        updateBestseller(bestProduct.slice(0,10))
    },[])

  return (
    <div className="my-10">
        <div className="text-center py-8 text-3xl">
            <TitlePart title1={'BEST'} title2={'SELLERS'}></TitlePart>
            <p className="w-3/4 text-xs sm:text-sm md:text-base text-gray-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis tempora, ipsam ad, eos ea aut numquam nihil fugit officia repellat, laborum rem quis temporibus impedit optio provident vitae blanditiis odit.
            </p>
                    
        </div>
        <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {
                bestSeller.map((item,index)=>(
                    <ProductItem key={index} id={item._id} artist={item.artist} price={item.price} currency={item.currency} image={item.links} name={item.name}></ProductItem>
                ))
            }
         

        
        

            
        </div>
        
    </div>
  )
}

export default BestSeller
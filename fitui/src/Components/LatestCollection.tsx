// import React from 'react'

import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/FitShopcontext"
import TitlePart from "./TitlePart";
import ProductItem from "./ProductItem";


const LatestCollection = () => {
    const { products } =useContext(ShopContext);
    const [RecentP , updateRecentv]=useState([]);

    useEffect(()=>{
        updateRecentv(products.slice(0,9))
    },[])

  return (
    <div className="my-10">
        <div className="text-center py-8 text-3xl">
            <TitlePart title1={'LATEST'} title2={'COLLECTION'}></TitlePart>
            <p className="w-3/4 text-xs sm:text-sm md:text-base text-gray-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis tempora, ipsam ad, eos ea aut numquam nihil fugit officia repellat, laborum rem quis temporibus impedit optio provident vitae blanditiis odit.
            </p>
                    
        </div>
        <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {
                RecentP.map((item,index)=>(
                    <ProductItem key={index} id={item._id} artist={item.artist} price={item.price} name={item.name} currency={item.currency} image={item.links}></ProductItem>
                ))
            }
         

        
        

            
        </div>
        
    </div>
  )
}

export default LatestCollection
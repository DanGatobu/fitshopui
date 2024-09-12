import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/FitShopcontext'
import { assets } from '../Assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
    const {search,showSearch,setshowSearch,setsearch}=useContext(ShopContext);
    const [visible,setVisible]=useState(false);
    const location =useLocation();
    useEffect(()=>{
        if (location.pathname.includes('collection')&& showSearch){
            setVisible(true)
        }
        else{
            setVisible(false)
        }
    },[location])

  return showSearch && visible?(
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400  px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w1/2'>
            <input type="text" value={search} onChange={(e)=>setsearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' placeholder='Search' />
            <img src={assets.searchIcon} className='w-4' alt="" />

        </div>
        <img src="" onClick={()=>setshowSearch(false)} className='inline w-3 cursor-pointer' alt="I will add later" />

    </div>
  ):null
}

export default SearchBar
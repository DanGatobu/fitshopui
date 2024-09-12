import { Link,NavLink } from 'react-router-dom'
import {assets} from '../Assets/assets'
import { useContext, useState } from 'react'
import { ShopContext } from '../context/FitShopcontext'

const Navcomp = () => {

    const{showSearch,setshowSearch,getCartCount}=useContext(ShopContext)

    const [visible,setVisible]=useState(false)
  return (

    <div className='flex items-center justify-between py-5 font-medium'>
        <Link to={'/'}> <img src={assets.logo} className='w-40 '/></Link>
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p> Home</p>
                <hr className='w-2/4 border-none h-1.5 bg-gray-700 hidden'    />
            </NavLink>
            
            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                <p> Shop</p>
                <hr className='w-2/4 border-none h-1.5 bg-gray-700 hidden'     />
            </NavLink>
           
            <NavLink to='/artists' className='flex flex-col items-center gap-1'>
                <p> Artists</p>
                <hr className='w-2/4 border-none h-1.5 bg-gray-700 hidden'    />
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p> About us</p>
                <hr className='w-2/4 border-none h-1.5 bg-gray-700 hidden'    />
            </NavLink>
        </ul>
        <div className='flex items-center gap-6'>
            <img onClick={()=>setshowSearch(true)}  src={assets.searchIcon} className= 'w-5 cursor-pointer' />
            <div className='group relative'>
                <Link to={'/Login'}><img className='w-5 cursor-pointer' src={assets.accountIcon} alt="" /></Link>
                <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4.">
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        <p className='cursor-pointer Ohover: text-black'>My Profile</p>
                        <p className='cursor-pointer hover: text-black'>Orders</p>
                        <p className='cursor-pointer Ohover: text-black'>Logout</p>
                    </div>
                </div>
            </div>
            <Link to='/cart' className='relative'>
                <img src={assets.cartIcon} className='w-5 min-w-5' alt=""/>
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'> {getCartCount()} </p>

            </Link> 
            <img onClick={()=>setVisible(true)} src={assets.menuIcon} className='w-5 cursor-pointer sm:hidden' alt=""/>
            
        </div>

        {/* <div className= {'absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full':'w-0'} ' }>
            </div>  */}

        <div className={visible ? 'w-full absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ':'w-0 absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all' } >
            <div className='flex flex-col text-gray-600'>
                <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                    <img className='h4 ' alt=" ">
                    </img>
                    <p>BACK</p>

                </div>
                <NavLink onClick={()=> setVisible(false)}  className='py-2 pl-6 border' to='/'> Home</NavLink>
                <NavLink  onClick={()=> setVisible(false)} className='py-2 pl-6 border' to='/artists'> Artists</NavLink>
                <NavLink  onClick={()=> setVisible(false)} className='py-2 pl-6 border' to='/collection'> Collection</NavLink>
                <NavLink  onClick={()=> setVisible(false)} className='py-2 pl-6 border' to='/about'> About</NavLink>

            </div>
        </div>

        
    </div>

    



        
)
}

export default Navcomp
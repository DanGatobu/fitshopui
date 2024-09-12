import { useContext, useState } from "react"
import CartTotal from "../Components/CartTotal"
import TitlePart from "../Components/TitlePart"
import { ShopContext } from "../context/FitShopcontext"

const Placeorders = () => {

  const{ navigate }=useContext(ShopContext)

  const [method,setMethod]=useState('cod')
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <TitlePart title1={'DELIVERY'}title2={'INFORMATION'}/>
        </div>
        <div className="flex gap-3 ">
          <input type="text" className="boarder border--gray-300 rounded py-1.5 px-3.5 w-full" placeholder="First Name" />
          <input type="text" className="boarder border--gray-300 rounded py-1.5 px-3.5 w-full" placeholder="Second Name" />

        </div>
        <input type="email" className="boarder border--gray-300 rounded py-1.5 px-3.5 w-full" placeholder="Email" />
        <input type="text" className="boarder border--gray-300 rounded py-1.5 px-3.5 w-full" placeholder="Street" />
        <div className="flex gap-3 ">
          <input type="text" className="boarder border--gray-300 rounded py-1.5 px-3.5 w-full" placeholder="City" />
          <input type="text" className="boarder border--gray-300 rounded py-1.5 px-3.5 w-full" placeholder="State" />

        </div>
        <div className="flex gap-3 ">
          <input type="ZipCode" className="boarder border--gray-300 rounded py-1.5 px-3.5 w-full" placeholder="ZipCode" />
          <input type="text" className="boarder border--gray-300 rounded py-1.5 px-3.5 w-full" placeholder="Country" />

        </div>
        <input type="number" className="boarder border--gray-300 rounded py-1.5 px-3.5 w-full" placeholder="Phone Number" />
      </div>
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal/>
        </div>
        <div className="mt-12">
          <TitlePart title1={"PAYMENT"} title2={"METHOD"}/>
          <div className="flex gap-3 flex-col lg:flex-row">
          <div onClick={()=>setMethod('paypal')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
            <p className={method==='paypal' ?'min-w-3.5 h-3.5 rounded-full bg-green-500':'min-w-3.5 h-3.5 rounded-full'}></p>
            <img src=""className="h-5 mx-4" alt="paypalicon" />

          </div>
          <div onClick={()=>setMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
            <p className={method==='stripe' ?'min-w-3.5 h-3.5 rounded-full bg-green-500':'min-w-3.5 h-3.5 rounded-full'}></p>
            <img src=""className="h-5 mx-4" alt="stripe icon" />

          </div>
          <div onClick={()=>setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
            <p className={method==='cod' ?'min-w-3.5 h-3.5 rounded-full bg-green-500':'min-w-3.5 h-3.5 rounded-full'}></p>
            <p className="text-gray-500 text-sm font-medium mx-4"> CASH ON DELIVERY</p>
          </div>

        </div>
        <div className="w-full text-end mt-8" >
          <button onClick={()=>navigate('/orders')} className="bg-black text-white text-sm px-16 py-3"> PROCEED TO CHECKOUT</button>

        </div>
          


        </div>

      </div>

    </div>
  )
}

export default Placeorders
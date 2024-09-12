import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ShopContext } from "../context/FitShopcontext";
import RelatedProducts from "../Components/RelatedProducts";

const Products = () => {

  const {productId}=useParams();  
  const {products ,currency,addToCart}=useContext(ShopContext);
  const [image,setImage]=useState('');
  const [productData,setProductData]=useState(null);
  const [sizez,setSize]=useState('')

  const fetchProductData=async()=>{
    products.map((item)=>{
      // console.log(item)
      if (item._id===productId){
        
        setProductData(item)
        console.log(item.links[0])
        
        setImage(item.links[0])
        
        return null
        
      }
     


    })
  }

  useEffect(()=>{
    fetchProductData();

  },[productId])
  
  
  return productData? (
    <div className="border-t-2 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col reverse gap-3 sm:flex-row">
          <div className="flex  sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full ">
            
              {
              productData.links.map((item,index)=>(
                <img src={item} className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" alt="" />

              ))
              }       
        
          </div>
          <div className="w-full sm:w-[80%]">
              <img className="w-full h-auto" src={image} alt="" />

          </div>

        </div>
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
              <img src="" className="w-3 5" alt="star" />
              <img src="" className="w-3 5" alt="star" />
              <img src="" className="w-3 5" alt="star" />
              <img src="" className="w-3 5" alt="star" />
              <img src="" className="w-3 5" alt="star not really faded" />
              <p className="pl-2">(122)</p>
              
          </div>
          <p className="mt-5 text-3xl font-medium">{currency} {productData.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>SELECT SIZE</p>
            <div className="flex gap-2">
              {productData.sizes.map((item,index)=>(
                <button onClick={()=>setSize(item)} className={item===sizez?'border py-2 px-4 bg-gray-100 border-orange-500':'border py-2 px-4 bg-gray-100' } key={index}>{item}</button>
              ))}
            </div>

          </div>
          <button onClick={()=>addToCart(productData._id,sizez)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-600"> ADD TO CART</button>
          <hr className="mt-8 sm:w-4/5"/>
          <div className="text-sm text-gray-500 mt-5 glex flex-col gap-1">
            <p > 100% Original Product</p>
            <p>Cash on Deliverly possible</p>
            <p>Easy return policy</p>

          </div>

        </div>
      </div>
      <div className="mt-20 ">
        <div className="flex">
          <b className="border px-5 py-3 text-sm ">DESCRIPTION</b>
          <p className="border px-5 py-3 text-sm ">REVIEWS(122)</p>

        </div>
        <div className=" flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque dignissimos eveniet optio odit ipsam alias obcaecati temporibus sit, corrupti deleniti, sed atque fugit ut officiis blanditiis necessitatibus voluptatem eaque vitae in incidunt eum facere. Laboriosam aperiam vel sapiente cupiditate optio!</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos distinctio mollitia in neque illum? A labore maxime aliquid laudantium ratione animi inventore iure sequi? Rem repellat perferendis, soluta quia, tempore ad culpa dignissimos, ratione dolorem ex aliquam nobis blanditiis enim?</p>
        </div>



      </div>
      <RelatedProducts category={productData.category} subCategory={productData.subcategory}></RelatedProducts>

    </div>
  ):<div className="opacity-0"></div>
}

export default Products
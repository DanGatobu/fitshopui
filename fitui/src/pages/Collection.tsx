import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/FitShopcontext";
import TitlePart from "../Components/TitlePart";
import ProductItem from "../Components/ProductItem";


const Collection = () => {
  const { products,search,showSearch }=useContext(ShopContext);
  const [showFilter,updateShowFilter]=useState(false);
  const [filterProducts,updateFilterProducts]=useState([]);
  const [category,updateCategory]=useState([]);
  const [subCategory,updateSubcategory]=useState([])
  const [sortType,updateSortType]=useState('Relevant')

  const toggleCategory=(e)=>{
    
    if(category.includes(e.target.value)){
      updateCategory(prev=>prev.filter(item=>item !== e.target.value))
    }
    else{
      updateCategory(prev=>[...prev,e.target.value])
    }
  }

  const togglesubCategory=(e)=>{
    if(subCategory.includes(e.target.value)){
      updateSubcategory(prev=>prev.filter(item=>item !== e.target.value))
    }
    else{
      updateSubcategory(prev=>[...prev,e.target.value])
    }
  }

  const applyFilter=()=>{
    let productCopy=products.slice();
    if (search&&showSearch){
      productCopy=productCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }


    if (category.length>0){
      productCopy=productCopy.filter(item=>category.includes(item.category));

    
    }
    if (subCategory.length>0){
      productCopy=productCopy.filter(item=>subCategory.includes(item.subCategory));

    
    }
    updateFilterProducts(productCopy)
  }

const sortProduct=()=>{
  let stCopy=filterProducts.slice()

  switch(sortType){
    case 'low-high':
      updateFilterProducts(stCopy.sort((a,b)=>(a.price-b.price)));
      break
    case 'high-low':
      
      updateFilterProducts(stCopy.sort((a,b)=>(b.price-a.price)));
      break

    default:
      applyFilter();
      break;
  }
}


  useEffect(()=>{
    applyFilter()
  },[subCategory,category,search,showSearch])

  useEffect(()=>{
    sortProduct();
  },[sortType])
 

  useEffect(()=>{

    updateFilterProducts(products)
  },[]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 bordet-t">
      <div className="min-w-60">
        <p onClick={()=> updateShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTERS  </p>
        {/* add dropdown image */}
        <img src="" className={showFilter?'h-3 sm:hidden rotate-90':'h-3 sm:hidden '} alt="" />
        <div className={showFilter?'border border-gray-500 pl-5 py-3 mt-6 sm:block':'border border-gray-500 pl-5 py-3 mt-6 hidden sm:block'}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          
          <div className="flex flex-col  gap-2 text-sm font-light text-gray-700" >
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Men'}  onChange={toggleCategory}/>MEN
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Women'} onChange={toggleCategory} />WOMEN
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Kids'} onChange={toggleCategory} />KIDS
            </p>
            

          </div>
          

        </div>
        <div className={showFilter?'border border-gray-500 pl-5 py-3 mt-6 sm:block':'border border-gray-500 pl-5 py-3 mt-6 hidden sm:block'}>
          <p className="mb-3 text-sm font-medium">SUB CATEGORIES</p>
          
          <div className="flex flex-col  gap-2 text-sm font-light text-gray-700" >
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Freerom'} onChange={togglesubCategory} />FREE ROAM
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" onChange={togglesubCategory} value={'Adventure'} />ADVENTURE
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" onChange={togglesubCategory} value={'Action'} />ACTION
            </p>
            

          </div>
          

        </div>
               

      </div>
      <div className="flex-1">
      <div className="flex justify-between text-base sm:text-2xl mb-4">
          <TitlePart title1={"ALL"} title2={"COLLECTIONS"}></TitlePart>
          <select name="" onChange={(e)=>updateSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2" id="">
            <option value="Relevant"> Sort by::Relevant</option>
            <option value="Date">Sort by:Recent</option>
            <option value="low-high">Sort by:Low to High </option>
            <option value="high-low"> Sort by : High to Low</option>

          </select>

        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {
            filterProducts.map((item,index)=>(
              <ProductItem key={index} id={item._id} artist={item.artist} price={item.price} currency={item.currency} image={item.links} name={item.name}></ProductItem>
            ))
          }


        </div>
        


      </div>
      

    </div>
  )
}

export default Collection
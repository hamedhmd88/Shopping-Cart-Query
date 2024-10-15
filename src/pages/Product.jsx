import { useState } from "react";
import CategoryFilter from "../components/CategoryFilter"
import ProductList from "../components/ProductList"
import heroo from "../assets/logo/productList.jpg"
function Product() {
    const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <>
      <div className=" bg-gradient-to-r  from-stone-950 via-stone-800 to-slate-900 w-full">
      <div className="relative w-full mt-10 ">
          <img
            src={heroo}
            alt="Main Product Image"
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-6">
            <h1 className=" [text-shadow:_0_8px_8px_rgb(99_102_241_/_0.8)] text-white italic text-4xl md:text-5xl font-bold">
            Welcome to the Ultimate Shopping Experience
            </h1>
           
          </div>
        </div>
        <div className="p-8">
        <CategoryFilter
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                  />
                  <ProductList category={selectedCategory} />
        </div>
      
      </div>
    </>
  )
}

export default Product

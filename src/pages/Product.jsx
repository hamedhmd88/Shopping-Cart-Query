import { useState } from "react";
import CategoryFilter from "../components/CategoryFilter"
import ProductList from "../components/ProductList"

function Product() {
    const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <>
      <div className="p-6">
      <h1 className="text-3xl font-bold text-center m-12">Product Store</h1>
      <CategoryFilter
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                  />
                  <ProductList category={selectedCategory} />
      </div>
    </>
  )
}

export default Product

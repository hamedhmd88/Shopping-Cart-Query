import React from 'react'
import { fetchProducts } from '../api/api';
import Loader from '../loader/Loader';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Rating from './Rating ';

import popular1 from "../assets/logo/popular2.png";
import popular2 from "../assets/logo/popular3.png";
import popular3 from "../assets/logo/popular4.png";
import popular4 from "../assets/logo/popular5.png";
import popular5 from "../assets/logo/popular1.png";

function PopularProduct() {
    const { data: products, isLoading, isError, error } = useQuery("products", fetchProducts);

    const imagesPopular = [ popular1, popular2, popular3, popular4, popular5];

    const getFirstFiveWords = (text) => {
        const words = text.split(" ");
        return words.slice(0, 2).join(" ");
      };
      const getFirstNineWordsDes = (des) => {
        const words = des.split(" ");
        return words.slice(0, 7).join(" ");
      };

    if (isLoading) {
        return <Loader/>;
      }
    
      if (isError) {
        return <p className="text-center text-red-500">Error: {error.message}</p>;
      }

  return (
    <>
       <div className="min-h-screen  flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="w-full ">
        <div className="text-center border-b-4  py-2">
          <h1 className="text-3xl font-bold text-slate-400 drop-shadow-2xl mb-6"> Popular Products </h1>
        </div>
      </section>

      {/* Products Section */}
      <section className="w-full max-w-6xl  p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Show only first five products */}
        {products.slice(1, 5).map((product, index) => (
            <div
            key={product.id}
            className=" h-full w-full border-2 border-gray-700 rounded-xl shadow-inner shadow-gray-500 p-4 hover:shadow-inner hover:shadow-gray-300  drop-shadow-2xl transition-shadow"
          >
            <Link to={`/products/${product.id}`}>
              <img
                src={imagesPopular[index + 1]}
                alt={product.title}
                className="w-full  object-contain mix-blend-multiply mb-4 rounded-2xl"
              />
              <h3 className="text-lg font-bold mb-2 text-gray-400">
                {getFirstFiveWords(product.title)}
              </h3>
              <div className=" w-full flex justify-center flex-col items-center gap-3">
                <p className="text-gray-400">Price : ${product.price}</p>
                {/* Display the rating */}
                <Rating rating={product?.rating?.rate} />
              </div>
              <p className=" mt-3 text-sm text-gray-400">
                {getFirstNineWordsDes(product.description)} .....
              </p>
            </Link>
            
          </div>
        //   <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
        //     <img
        //       src={product.image}
        //       alt={product.title}
        //       className="h-48 w-full object-cover"
        //     />
        //     <div className="p-4">
        //       <h2 className="text-lg font-semibold text-gray-800 truncate">
        //         {product.title}
        //       </h2>
        //       <p className="text-gray-600 mt-2">${product.price}</p>
        //       <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
        //         افزودن به سبد خرید
        //       </button>
        //     </div>
        //   </div>
        ))}
      </section>
    </div>
    </>
  )
}

export default PopularProduct

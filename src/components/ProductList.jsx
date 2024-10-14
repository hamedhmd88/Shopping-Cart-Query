import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchProducts } from "../api/api";
import useSearch from "../hooks/useSearch";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import Rating from "./Rating ";
import Loader from "../loader/Loader";

const ProductList = ({ category }) => {
  const { data, isLoading, error } = useQuery("products", fetchProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("none");
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { search, setSearch, sortedItems } = useSearch(
    data || [],
    searchTerm,
    category,
    sortOption
  );

  console.log(sortedItems);

   const getFirstFiveWords = (text) => {
    const words = text.split(" ");
    return words.slice(0, 3).join(" ");
  };
  const getFirstNineWordsDes = (des) => {
    const words = des.split(" ");
    return words.slice(0, 7).join(" ");
  };

  if (isLoading) return <div><Loader/></div>;
  if (error) return <div>Error fetching products</div>;

  return (
    <div className="text-gray-300">
      <div className=" flex flex-col gap-2 justify-around mb-6 md:flex-row">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        className="w-full md:w-1/3 p-2 mb-4 bg-zinc-300 text-gray-800 border-2 border-gray-600 rounded-md focus:outline-none focus:border-blue-400 placeholder:text-gray-700"
      />

      <div className="mb-4">
        <label htmlFor="sort" className="font-semibold text-gray-800 mr-2">
          Sort by price:
        </label>
        <select
          id="sort"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="p-2 bg-zinc-300 text-gray-800 border-2 border-gray-600 rounded-md focus:outline-none focus:border-blue-400"
        >
          <option value="none">None</option>
          <option value="lowToHigh">Lowest to Highest</option>
          <option value="highToLow">Highest to Lowest</option>
        </select>
      </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sortedItems.map((product) => (
          <div
            key={product.id}
            className="bg-neutral-300 h-[400px] border-2 border-gray-700 rounded-xl shadow-lg p-4 hover:shadow-2xl drop-shadow-2xl transition-shadow"
          >
            <Link to={`/products/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-1/2 object-contain mix-blend-multiply mb-4 rounded-2xl"
              />
              <h3 className="text-lg font-bold mb-2 text-slate-800">
                {getFirstFiveWords(product.title)}
              </h3>
              <div className=" w-full flex justify-between">
                <p className="text-slate-800">Price : ${product.price}</p>
                {/* Display the rating */}
                <Rating rating={product?.rating?.rate} />
              </div>
              <p className=" mt-3 text-sm text-slate-800">
                {getFirstNineWordsDes(product.description)} .....
              </p>
            </Link>
            <div className="flex justify-center gap-4  items-center mt-4">
              <button
                onClick={() => dispatch(removeFromCart(product))}
                className="px-3 py-1 text-md bg-red-500 text-white rounded-md hover:bg-red-700 transition"
              >
                -
              </button>
              <span className=" text-slate-800">
                {cart.items.find((item) => item.id === product.id)?.quantity ||
                  0}
              </span>
              <button
                onClick={() => dispatch(addToCart(product))}
                className="px-3 py-1 text-md bg-blue-500 text-white rounded-md hover:bg-blue-700 transition"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

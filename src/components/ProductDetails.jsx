import React from 'react';
import { useQuery } from 'react-query';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProductById } from '../api/api';
import Rating from './Rating ';
import Loader from '../loader/Loader';
import { addToCart, removeFromCart } from '../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery(['product', id], () => fetchProductById(id));
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  if (isLoading) return <div><Loader/></div>;
  if (error) return <div>Error fetching product details</div>;

  return (
    <div className="max-w-3xl m-28 mx-auto p-6 bg-zinc-300 shadow-lg rounded-md text-gray-300">
      <div className="bg-white p-4 rounded-2xl"> 
        <img src={data.image} alt={data.title} className="w-full h-96 object-contain mb-6" />
      </div>
      <h1 className="text-2xl font-bold m-5 text-gray-800">{data.title}</h1>
      <p className="text-gray-800 text-lg font-normal m-5">{data.description}</p>
      <p className="text-lg font-semibold text-gray-800 mb-4">Price: ${data.price}</p>
      <Rating rating={data.rating.rate} />
      <div className=' flex justify-around items-center'>
      <button
        onClick={() => navigate('/')}
        className="my-6 font-semibold px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition"
      >
        Back to Products
      </button>
      <div className="flex justify-center gap-4  items-center">
              <button
                onClick={() => dispatch(removeFromCart(data))}
                className="px-3 py-1 text-md bg-red-500 text-white rounded-md hover:bg-red-700 transition"
              >
                -
              </button>
              <span className=" text-slate-800">
                {cart.items.find((item) => item.id === data.id)?.quantity ||
                  0}
              </span>
              <button
                onClick={() => dispatch(addToCart(data))}
                className="px-3 py-1 text-md bg-blue-500 text-white rounded-md hover:bg-blue-700 transition"
              >
                +
              </button>
            </div>
      </div>
    </div>
  );
};

export default ProductDetails;

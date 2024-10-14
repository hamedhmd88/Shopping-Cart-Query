import React from "react";
import ImageSlider from "../components/ImageSlider";
import hero from "../assets/logo/hero.jpg"
import SectionHomePage from "../components/SectionHomePage";
import PopularProduct from "../components/PopularProduct";


const HomePage = ({name}) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        {/* <div className=" mt-7 p-6 ">
            <h3 className=" text-gray-800 [text-shadow:_0_8px_8px_rgb(99_102_241_/_0.8)] text-3xl font-bold text-center my-12 mx-auto">
               {name} Welcome to the Our Website
            </h3>
        </div> */}
      {/* Hero Section - Large Image with Description */}
      <section className="w-full bg-white">
        <div className="relative">
          <img
            src={hero}
            alt="Main Product Image"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-6">
            <h1 className=" [text-shadow:_0_8px_8px_rgb(99_102_241_/_0.8)] text-white text-4xl md:text-5xl font-bold">
              {name} Welcome to the Ultimate Shopping Experience
            </h1>
            <p className="[text-shadow:_0_8px_8px_rgb(99_102_241_/_0.8)] text-gray-200 mt-6 max-w-2xl text-lg">
              Discover the best products at unbeatable prices. Explore our wide
              range of items and enjoy a seamless shopping experience.
            </p>
          </div>
        </div>
      </section>

      {/* Infinite Horizontal Scroll Section */}
      <ImageSlider/>


    <SectionHomePage/>

    <PopularProduct/>
      
    </div>
  );
};

export default HomePage;

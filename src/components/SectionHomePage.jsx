import { Link } from "react-router-dom";
import login from "../assets/logo/login.jpg";
import product from "../assets/logo/product.jpg";
import site from "../assets/logo/site.jpg";
function SectionHomePage() {
  return (
    <>
      {/* First Section */}
      <section className="w-full max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Image Left, Text Right */}
        <div>
          <img
            src={site}
            alt="Product Image 1"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className=" border-l-8 border-blue-500">
          <h2 className="text-3xl font-bold text-gray-800 mb-7 ml-5">
            Welcome to Our Website
          </h2>
          <p className="text-gray-600 mb-6 ml-5">
            Discover a world of amazing products. We offer a wide range of
            high-quality items that will satisfy your every need.
          </p>
          <button className="bg-blue-500 text-white ml-5 px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            Learn More
          </button>
        </div>
      </section>

      {/* Second Section */}
      <section className="w-full max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Text Left, Image Right */}
        <div className="order-2 md:order-1 border-l-8 border-green-500">
          <h2 className="text-3xl font-bold text-gray-800 mb-7 ml-5">
            Our Featured Products
          </h2>
          <p className="text-gray-600 mb-6 ml-5">
            Explore our featured collection with the latest and greatest in
            innovation. Don’t miss out on our top deals!
          </p>
          <Link
            to="/"
            className="bg-green-500 text-white ml-5 px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
          >
            {" "}
            Shop Now
          </Link>
        </div>
        <div className="order-1 md:order-2">
          <img
            src={product}
            alt="Product Image 2"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>
      <section className="w-full max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Image Left, Text Right */}
        <div>
          <img
            src={login}
            alt="Product Image 1"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className=" ml-2 border-l-8 border-orange-500">
          <h2 className="text-3xl font-bold text-gray-800 mb-7 ml-5">
            Login to Our Website
          </h2>
          <p className="text-gray-600 mb-6 ml-5">
            Discover a world of amazing products. We offer a wide range of
            high-quality items that will satisfy your every need.
          </p>

          <Link
            to="/login"
            className="bg-orange-500 text-white ml-5 px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Login in
          </Link>
        </div>
      </section>
    </>
  );
}

export default SectionHomePage;

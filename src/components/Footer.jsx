// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-700 to-slate-900 text-white shadow-gray-800 p-6 mt-8">
      <div className="container mx-auto text-center">
        <p className="mb-4 font-semibold">© 2024 Product Store. All rights reserved.</p>
        <p className=' font-semibold'>Contact us: <span className="text-slate-300">support@productstore.com</span> | Phone: <span className="text-slate-300">(123) 456-789</span></p>
        <h4 className="mt-4 text-2xl [text-shadow:_0_8px_8px_rgb(99_102_241_/_0.8)] font-bold">
          Developed  By Hamed Mahjoobi 
        </h4>
      </div>
    </footer>
  );
};

export default Footer;

// import React from 'react'

// const Header = () => {
//   return (
//     <div>
//         {/* Top Banner */}
//         <div className="bg-black text-white py-1 px-4 text-center text-sm">
//         Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
//         </div>

//         {/* Header */}
//         <header className="bg-white shadow-sm">
//         <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//             <div className="flex items-center">
//             <h1 className="text-xl font-bold">Exclusive</h1>
//             </div>

//             <nav className="hidden md:flex space-x-6 ml-10">
//             <a href="#" className="hover:text-red-500">Home</a>
//             <a href="#" className="hover:text-red-500">Contact</a>
//             <a href="#" className="hover:text-red-500">About</a>
//             <a href="#" className="hover:text-red-500">Sign Up</a>
//             </nav>

//             <div className="flex items-center space-x-4">
//             <div className="relative">
//                 <input type="text" placeholder="What are you looking for?" className="border rounded-md py-1 px-3 w-40 text-sm" />
//                 <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
//                 <i className="fas fa-search"></i>
//                 </button>
//             </div>
//             <a href="#" className="text-gray-600 hover:text-red-500">
//                 <i className="far fa-heart"></i>
//             </a>
//             <a href="#" className="text-gray-600 hover:text-red-500">
//                 <i className="fas fa-shopping-cart"></i>
//             </a>
//             </div>
//         </div>
//         </header>

//     </div>
//   )
// }

// export default Header

import { Heart, Search, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm w-full">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-black">Exclusive</h1>

        {/* Navigation Links */}
        <div className="">
          <Link href="/" className="text-gray-800 hover:text-red-500 mx-7">Home</Link>
          <Link href="/contact" className="text-gray-800 hover:text-red-500 mx-7">Contact</Link>
          <Link href="/about" className="text-gray-800 hover:text-red-500 mx-7">About</Link>
          <Link href="/login" className="text-gray-800 hover:text-red-500 mx-7">Sign Up</Link>
        </div>

        

        {/* Icons */}
        
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="flex items-center border rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="px-4 py-2 outline-none text-black w-[400px]"
            />
            <Search className="w-5 h-5 text-gray-800 mr-2" />
          </div>
          <Heart className="w-6 h-6 cursor-pointer text-gray-800" />
          <ShoppingCart className="w-6 h-6 cursor-pointer text-gray-800" />
          
        </div>
      </div>
    </header>
  );
}
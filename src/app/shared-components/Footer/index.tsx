import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div>
        {/* Footer */}
        <footer className="bg-gray-900 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
                <h3 className="text-lg font-semibold mb-4">Exclusive</h3>
                <p className="text-gray-400 text-sm mb-4">Subscribe</p>
                <p className="text-gray-400 text-sm mb-4">Get 10% off your first order</p>
                <div className="flex">
                <input type="email" placeholder="Enter email" className="bg-gray-800 text-white px-3 py-2 rounded-l-md text-sm w-full" />
                <button className="bg-gray-800 text-white px-3 py-2 rounded-r-md border-l border-gray-700">
                    <i className="fas fa-paper-plane"></i>
                </button>
                </div>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-4">Support</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                <li><i className="fas fa-map-marker-alt mr-2"></i>111 Biscayne Blvd, Miami, FL 33132</li>
                <li><i className="fas fa-envelope mr-2"></i>exclusive@gmail.com</li>
                <li><i className="fas fa-phone mr-2"></i>+1 (305) 888-9999</li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-4">Account</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#">My Account</a></li>
                <li><a href="#">Login / Register</a></li>
                <li><a href="#">Cart</a></li>
                <li><a href="#">Wishlist</a></li>
                <li><a href="#">Shop</a></li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact</a></li>
                </ul>
                <h3 className="text-lg font-semibold mb-4 mt-6">Download App</h3>
                <div className="flex space-x-2">
                <Image src="/banner.png" alt="Google Play store badge" className="h-8" width={25} height={25} />
                <Image src="/banner.png" alt="Apple App Store badge" className="h-8" width={25} height={25} />
                </div>
            </div>
            </div>
            <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © Copyright Exclusive 2023. All rights reserved.
            </div>
            <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
            </div>
            </div>
        </div>
        </footer>
    </div>
  )
}

export default Footer

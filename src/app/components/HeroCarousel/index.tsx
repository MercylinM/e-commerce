'use client';

import 'swiper/css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

export default function HeroCarousel() {
    return (
        <div className="container mx-auto mt-6 flex">
            {/* <div className="w-1/4 px-4 border-r-2 flex flex-col flex-wrap justify-center" >
                <Link href='' className='text-lg font-semibold mb-4'>Woman&apos;s Fashion</Link>
                <Link href='' className='text-lg font-semibold mb-4'>Men&apos;s Fashion </Link>
                <Link href='' className='text-lg font-semibold mb-4'>Electronics</Link>
                <Link href='' className='text-lg font-semibold mb-4'>Home & Lifestyle</Link>
                <Link href='' className='text-lg font-semibold mb-4'>Medicine</Link>
                <Link href='' className='text-lg font-semibold mb-4'>Sports & Outdoor</Link>
                <Link href='' className='text-lg font-semibold mb-4'>Baby’s & Toys</Link>
                <Link href='' className='text-lg font-semibold mb-4'>Groceries & Pets</Link>
                <Link href='' className='text-lg font-semibold mb-4'>Health & Beauty</Link>
            </div> */}

            {/* Sidebar */}
            <aside className="w-full md:w-64">
                <div className="mb-6">
                    <h2 className="font-semibold mb-3">Categories</h2>
                    <ul className="space-y-2">
                        <li><a href="#" className="block text-sm hover:text-red-500">Women&apos;s Fashion <i className="fas fa-chevron-right float-right text-xs"></i></a></li>
                        <li><a href="#" className="block text-sm hover:text-red-500">Men&apos;s Fashion <i className="fas fa-chevron-right float-right text-xs"></i></a></li>
                        <li><a href="#" className="block text-sm hover:text-red-500">Electronics</a></li>
                        <li><a href="#" className="block text-sm hover:text-red-500">Home & Lifestyle</a></li>
                        <li><a href="#" className="block text-sm hover:text-red-500">Sports & Outdoor</a></li>
                        <li><a href="#" className="block text-sm hover:text-red-500">Baby & Toys</a></li>
                        <li><a href="#" className="block text-sm hover:text-red-500">Groceries & Pets</a></li>
                        <li><a href="#" className="block text-sm hover:text-red-500">Health & Beauty</a></li>
                    </ul>
                </div>
            </aside>


            {/* Main Content Area */}
            <div className="flex-grow">
                {/* Hero Banner */}
                <div className="mb-8 relative overflow-hidden rounded-lg bg-black ">
                    <Image src="/images/phone.jpg" alt="iPhone 14 Series promotional banner showing up to 10% off voucher" className="w-full h-48 object-cover opacity-80" width={400} height={50} />
                    <div className="absolute inset-0 flex items-center p-8">
                        <div className="text-white">
                            <h2 className="text-3xl font-bold mb-2">Up to 10% off Voucher</h2>
                            <p className="mb-4">Shop Now →</p>
                        </div>
                        <div className="ml-auto">
                            <Image src="/images/phone4.webp" alt="iPhone 14 phone with purple back" className="w-32 h-24 object-contain" width={400} height={50} />
                        </div>
                    </div>
                    <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className={`inline-block w-2 h-2 rounded-full ${i === 0 ? 'bg-white' : 'bg-gray-400'}`}></span>
                        ))}
                    </div>
                </div>
            </div>
            {/* <Swiper spaceBetween={30} slidesPerView={1} loop autoplay className='w-3/4 mx-auto justify-center flex items-center'>
                <SwiperSlide>
                    <Image src="/banner.png" alt="Promo 1" className="rounded-lg object-cover" width={1200} height={200} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/banner.png" alt="Promo 2" className="rounded-lg" width={1200} height={200} />
                </SwiperSlide>
            </Swiper> */}
        </div>
    );
}

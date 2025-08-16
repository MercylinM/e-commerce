'use client';

import 'swiper/css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

export default function HeroCarousel() {
    return (
        <div className="container mx-auto mt-6 flex">
            <div className="w-1/4 px-4 border-r-2 flex flex-col flex-wrap justify-center" >
                <Link href='' className='text-lg font-semibold mb-4'>Woman&apos;s Fashion</Link>
                <Link href='' className='text-lg font-semibold mb-4'>Men&apos;s Fashion </Link>
                <Link href='' className='text-lg font-semibold mb-4'>Electronics</Link>
                <Link href='' className='text-lg font-semibold mb-4'>Home & Lifestyle</Link>
                <Link href='' className='text-lg font-semibold mb-4'>Medicine</Link>
                <Link href='' className='text-lg font-semibold mb-4'>Sports & Outdoor</Link>
                <Link href='' className='text-lg font-semibold mb-4'>Baby’s & Toys</Link>
                <Link href='' className='text-lg font-semibold mb-4'>Groceries & Pets</Link>
                <Link href='' className='text-lg font-semibold mb-4'>Health & Beauty</Link>
            </div>
            <Swiper spaceBetween={30} slidesPerView={1} loop autoplay className='w-3/4 mx-auto justify-center flex items-center'>
                <SwiperSlide>
                    <Image src="/banner.png" alt="Promo 1" className="rounded-lg object-cover" width={1200} height={200} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/banner.png" alt="Promo 2" className="rounded-lg" width={1200} height={200} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

'use client';


import Image from "next/image";
import Link from "next/link";


export default function NewArrivals() {
 return (
   <section className="mb-16">
     <div className="flex items-center gap-4 mb-6">
       <div className="w-5 h-10 bg-brand-red rounded"></div>
       <span className="text-brand-red font-semibold">Featured</span>
     </div>
     <h2 className="text-3xl font-bold mb-8">New Arrival</h2>
     <div className="grid lg:grid-cols-4 gap-4">
       <div className="lg:col-span-2 lg:row-span-2 bg-black text-white rounded-lg p-8 relative overflow-hidden">
         <Image
           src="/images/playstation.jpg"
           alt="PlayStation 5"
           layout="fill"
           objectFit="cover"
           className="z-0"
           priority
         />
         <div className="absolute bottom-8 left-8">
           <h3 className="text-2xl font-bold mb-2">PlayStation 5</h3>
           <p className="text-gray-300 mb-4">Black and White version of the PS5 coming out on sale.</p>
           <Link href="/products/playstation-5" className="text-white underline hover:no-underline">
             Shop Now
           </Link>
         </div>
       </div>
       <div className="lg:col-span-2 h-[300px] bg-black text-white rounded-lg p-8 relative overflow-hidden">
         <Image
           src="/images/girl.jpg"
           alt="Women's Collections"
           layout="fill"
           objectFit="cover"
           className="z-0"
           priority
         />
         <div className="absolute bottom-8 left-8">
           <h3 className="text-xl font-bold mb-2">Women&apos;s Collections</h3>
           <p className="text-gray-300 mb-2">Featured woman collections that give you another vibe.</p>
           <Link href="/collections/womens" className="text-white underline hover:no-underline">
             Shop Now
           </Link>
         </div>
       </div>
       <div className="bg-black h-[200px] text-white rounded-lg p-8 relative overflow-hidden">
         <Image
           src="/images/speaker3.png"
           alt="Speakers"
           layout="fill"
           objectFit="cover"
           className="z-0"
           priority
         />
         <div className="absolute bottom-8 left-8">
           <h3 className="text-lg font-bold mb-2">Speakers</h3>
           <p className="text-gray-300 mb-2">Amazon wireless speakers</p>
           <Link href="/products/speakers" className="text-white underline hover:no-underline">
             Shop Now
           </Link>
         </div>
       </div>
       <div className="bg-black text-white rounded-lg p-8 relative overflow-hidden">
         <Image
           src="/images/gucci.png"
           alt="Speakers"
           layout="fill"
           objectFit="cover"
           className="z-0"
           priority
         />
         <div className="absolute bottom-8 left-8">
           <h3 className="text-lg font-bold mb-2">Perfume</h3>
           <p className="text-gray-300 mb-2">GUCCI INTENSE OUD EDP</p>
           <Link href="/products/perfume" className="text-white underline hover:no-underline">
             Shop Now
           </Link>
         </div>
       </div>
     </div>
   </section>
 );
}




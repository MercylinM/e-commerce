"use client";

import { Button } from '@/app/shared-components/Button'
import { ProductCard } from '@/app/shared-components/ProductCard'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function FlashSale() {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-5 h-10 bg-brand-red rounded"></div>
        <span className="text-brand-red font-semibold">Today&apos;s</span>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
        <h2 className="text-2xl lg:text-3xl font-bold">Flash Sales</h2>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-8">
          <div className="flex gap-3 sm:gap-4 text-center">
            <div>
              <div className="text-xs text-gray-500">Days</div>
              <div className="text-xl lg:text-2xl font-bold">03</div>
            </div>
            <div className="text-brand-red text-xl lg:text-2xl">:</div>
            <div>
              <div className="text-xs text-gray-500">Hours</div>
              <div className="text-xl lg:text-2xl font-bold">23</div>
            </div>
            <div className="text-brand-red text-xl lg:text-2xl">:</div>
            <div>
              <div className="text-xs text-gray-500">Minutes</div>
              <div className="text-xl lg:text-2xl font-bold">19</div>
            </div>
            <div className="text-brand-red text-xl lg:text-2xl">:</div>
            <div>
              <div className="text-xs text-gray-500">Seconds</div>
              <div className="text-xl lg:text-2xl font-bold">56</div>
            </div>
          </div>
          <div className="hidden sm:flex gap-2">
            <Button size="icon" variant="outline" className="rounded-full" aria-label="Previous products">
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <Button size="icon" variant="outline" className="rounded-full" aria-label="Next products">
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          {
            name: "HAVIT HV-G92 Gamepad",
            price: "120",
            oldPrice: "160",
            discount: "-40%",
            rating: 5,
            reviews: 88,
            image: "/images/gamepad.jpg"
          },
          {
            name: "AK-900 Wired Keyboard",
            price: "960",
            oldPrice: "1160",
            discount: "-35%",
            rating: 4,
            reviews: 75,
            image: "/images/2.jpg"
          },
          {
            name: "IPS LCD Gaming Monitor",
            price: "370",
            oldPrice: "400",
            discount: "-30%",
            rating: 5,
            reviews: 99,
            image: "/images/3.jpg"
          },
          {
            name: "S-Series Comfort Chair",
            price: "375",
            oldPrice: "400",
            discount: "-25%",
            rating: 4,
            reviews: 99,
            image: "/images/4.jpg"
          }
        ].map((product, i) => (
          <ProductCard
            key={i}
            image={product.image}
            title={product.name}
            price={product.price}
            oldPrice={product.oldPrice}
            rating={product.rating}
            reviews={product.reviews}
            discount={product.discount}
            buttonText="Add To Cart"
          />
        ))}
      </div>
      <div className="text-center">
        <Button className="bg-brand-red hover:bg-brand-red-hover text-white px-8">
          View All Products
        </Button>
      </div>
    </section>
  )
}


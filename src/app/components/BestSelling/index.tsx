"use client";

import { Button } from "@/app/shared-components/Button";
import { ProductCard } from "@/app/shared-components/ProductCard";



export default function BestSelling() {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-5 h-10 bg-brand-red rounded"></div>
        <span className="text-brand-red font-semibold">This Month</span>
      </div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Best Selling Products</h2>
        <Button className="bg-brand-red hover:bg-brand-red-hover text-white">
          View All
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            name: "The north coat",
            price: "260",
            oldPrice: "360",
            rating: 5,
            reviews: 65,
            image: "/images/5.png"
          },
          {
            name: "Gucci duffle bag",
            price: "960",
            oldPrice: "1160",
            rating: 4,
            reviews: 65,
            image: "/images/6.png"
          },
          {
            name: "RGB liquid CPU Cooler",
            price: "160",
            oldPrice: "170",
            rating: 4,
            reviews: 65,
            image: "/images/7.png"
          },
          {
            name: "Small BookShelf",
            price: "360",
            rating: 5,
            reviews: 65,
            image: "/images/8.png"
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
          />
        ))}
      </div>
    </section>
  );
}

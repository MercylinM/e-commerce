import { Button } from "@/app/shared-components/Button";
import { ProductCard } from "@/app/shared-components/ProductCard";

export default function ExploreProducts() {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-5 h-10 bg-brand-red rounded"></div>
        <span className="text-brand-red font-semibold">Our Products</span>
      </div>
      <h2 className="text-3xl font-bold mb-8">Explore Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCard
            key={i}
            image={`/images/${i + 1}.jpg`}
            title="Product Name"
            price="120"
            oldPrice="160"
            rating={5}
            reviews={88}
          />
        ))}
      </div>
      <div className="text-center">
        <Button className="bg-brand-red hover:bg-brand-red-hover text-white px-8">
          View All Products
        </Button>
      </div>
    </section>
  );
}
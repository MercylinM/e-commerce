import HeroCarousel from "./components/HeroCarousel";
import ProductCard from "./shared-components/ProductCard";
import Navbar from "./shared-components/Navbar";
import Footer from "./shared-components/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroCarousel />

      {/* Flash Sales */}
      <section className="container mx-auto mt-10">
        <h2 className="text-xl font-bold mb-4">Flash Sales</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ProductCard image="/banner.png" title="Controller" price="120" oldPrice="150" />
          <ProductCard image="/banner.png" title="Keyboard" price="80" oldPrice="100" />
          <ProductCard image="/banner.png" title="Monitor" price="200" oldPrice="250" />
          <ProductCard image="/banner.png" title="Chair" price="90" oldPrice="110" />
        </div>
      </section>

      {}

      {/* New Arrivals */}
      <section className="container mx-auto mt-10">
        <h2 className="text-xl font-bold mb-4">New Arrivals</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ProductCard image="/banner.png" title="Laptop" price="800" oldPrice="900" />
          <ProductCard image="/banner.png" title="Smartphone" price="600" oldPrice="700" />
          <ProductCard image="/banner.png" title="Headphones" price="150" oldPrice="180" />
          <ProductCard image="/banner.png" title="Smartwatch" price="250" oldPrice="300" /> 
        </div>
      </section>

      {/* Best Sellers */}
      <section className="container mx-auto mt-10">
        <h2 className="text-xl font-bold mb-4">New Arrivals</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ProductCard image="/banner.png" title="Laptop" price="800" oldPrice="900" />
          <ProductCard image="/banner.png" title="Smartphone" price="600" oldPrice="700" />
          <ProductCard image="/banner.png" title="Headphones" price="150" oldPrice="180" />
          <ProductCard image="/banner.png" title="Smartwatch" price="250" oldPrice="300" />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

import HeroCarousel from "./components/HeroCarousel";
import ProductCard from "./shared-components/ProductCard";
import Navbar from "./shared-components/Navbar";
import Footer from "./shared-components/Footer";
import CategoryItem from "./shared-components/CategoryItem";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroCarousel />

      {/* Flash Sales */}
      <section className="container mx-auto mb-12">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="w-1 h-6 bg-red-500 mr-2"></div>
            <h2 className="text-lg font-semibold">Today&apos;s</h2>
          </div>
          <div className="text-sm text-gray-600">Flash Sales</div>
          <div className="flex items-center space-x-2">
            <div className="bg-gray-100 px-2 py-1 rounded text-sm">
              <span className="font-medium">03</span> : <span className="font-medium">23</span> : <span className="font-medium">19</span> : <span className="font-medium">56</span>
            </div>
            <button className="text-gray-600"><i className="fas fa-chevron-left"></i></button>
            <button className="text-gray-600"><i className="fas fa-chevron-right"></i></button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <ProductCard
            image="/images/gamepad.jpg"
            title="HAVIT HV-G92 Gamepad"
            price="$120"
            oldPrice="$160"
            rating={4.5}
            reviews={88}
            discount="-20%"
          />
          <ProductCard
            image="/images/7.png"
            title="AK-900 Wired Keyboard"
            price="$90"
            oldPrice="$110"
            rating={4}
            reviews={75}
            discount="-25%"
            buttonText="Add To Cart"
          />
          <ProductCard
            image="/images/7.png"
            title="IPS LCD Gaming Monitor"
            price="$370"
            oldPrice="$400"
            rating={4.5}
            reviews={99}
            discount="-30%"
          />
          <ProductCard
            image="/images/7.png"
            title="S-Series Comfort Chair"
            price="$375"
            oldPrice="$400"
            rating={4.5}
            reviews={99}
            discount="-25%"
          />
          <ProductCard
            image="/images/7.png"
            title="S-Series Comfort Chair"
            price="$375"
            oldPrice="$400"
            rating={4.5}
            reviews={99}
            discount="-25%"
          />
        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-red-500 text-white px-4 py-2 rounded-md text-sm hover:bg-red-600">View All Products</button>
        </div>
      </section>

      {/* Browse By Category */}
      <section className="container mx-auto mb-12">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="w-1 h-6 bg-red-500 mr-2"></div>
            <h2 className="text-lg font-semibold">Categories</h2>
          </div>
          <div className="flex items-center space-x-2">
            <button className="text-gray-600"><i className="fas fa-chevron-left"></i></button>
            <button className="text-gray-600"><i className="fas fa-chevron-right"></i></button>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4">Browse By Category</h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          <CategoryItem icon="mobile-alt" label="Phones" active={false} />
          <CategoryItem icon="desktop" label="Computers" active={false} />
          <CategoryItem icon="smartwatch" label="SmartWatch" active={false} />
          <CategoryItem icon="camera" label="Camera" active={true} />
          <CategoryItem icon="headphones" label="Headphones" active={false} />
          <CategoryItem icon="gamepad" label="Gaming" active={false} />
        </div>
      </section>

      {/* Best Selling Products */}
      <section className="container mx-auto mb-12">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="w-1 h-6 bg-red-500 mr-2"></div>
            <h2 className="text-lg font-semibold">This Month</h2>
          </div>
          <div className="flex items-center space-x-2">
            <button className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600">View All</button>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4">Best Selling Products</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <ProductCard
            image="/images/5.png"
            title="The north coat"
            price="$260"
            oldPrice="$360"
            rating={4.5}
            reviews={85}
            discount=""
          />
          <ProductCard
            image="/images/6.png"
            title="Gucci duffle bag"
            price="$960"
            oldPrice="$1160"
            rating={4.5}
            reviews={65}
            discount=""
          />
          <ProductCard
            image="/images/7.png"
            title="RGB Liquid CPU Cooler"
            price="$160"
            oldPrice="$170"
            rating={4.5}
            reviews={65}
            discount=""
          />
          <ProductCard
            image="/images/8.png"
            title="Small BookShelf"
            price="$380"
            oldPrice=""
            rating={4.5}
            reviews={65}
            discount=""
          />
        </div>
      </section>

      {/* Enhance Your Music Experience */}
      <section className="container mx-auto mb-12">
        <div className="bg-black text-white rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="p-8 md:w-1/2">
              <div className="text-green-400 mb-2">Categories</div>
              <h2 className="text-3xl font-bold mb-6">Enhance Your Music Experience</h2>
              <div className="flex space-x-4 mb-6">
                <div className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center font-bold">23</div>
                <div className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center font-bold">05</div>
                <div className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center font-bold">59</div>
                <div className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center font-bold">35</div>
              </div>
              <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">Buy Now</button>
            </div>
            <div className="md:w-1/2">
              <Image src="/images/speaker.png" alt="JBL portable speaker with black design and red logo" className="w-full h-full object-cover" width={1000} height={500} />
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Products */}
      <section className="container mx-auto container mx-auto mb-12">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="w-1 h-6 bg-red-500 mr-2"></div>
            <h2 className="text-lg font-semibold">Our Products</h2>
          </div>
          <div className="flex items-center space-x-2">
            <button className="text-gray-600"><i className="fas fa-chevron-left"></i></button>
            <button className="text-gray-600"><i className="fas fa-chevron-right"></i></button>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4">Explore Our Products</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <ProductCard
            image="/images/7.png"
            title="Breed Dry Dog Food"
            price="$100"
            oldPrice=""
            rating={4}
            reviews={35}
            discount=""
          />
          <ProductCard
            image="/images/7.png"
            title="CANON EOS DSLR Camera"
            price="$360"
            oldPrice=""
            rating={4.5}
            reviews={95}
            discount=""
            buttonText="Add To Cart"
          />
          <ProductCard
            image="/images/7.png"
            title="ASUS FHD Gaming Laptop"
            price="$700"
            oldPrice=""
            rating={4.5}
            reviews={125}
            discount=""
          />
          <ProductCard
            image="/images/7.png"
            title="Curology Product Set"
            price="$500"
            oldPrice=""
            rating={4.5}
            reviews={145}
            discount=""
          />
          <ProductCard
            image="/images/7.png"
            title="Kids Electric Car"
            price="$960"
            oldPrice=""
            rating={4.5}
            reviews={65}
            discount="Sale"
          />
          <ProductCard
            image="/images/7.png"
            title="Jr. Zoom Soccer Cleats"
            price="$160"
            oldPrice=""
            rating={4}
            reviews={35}
            discount="Sale"
          />
          <ProductCard
            image="/images/7.png"
            title="GPII Shooter USB Gamepad"
            price="$660"
            oldPrice=""
            rating={4.5}
            reviews={55}
            discount=""
          />
          <ProductCard
            image="/images/7.png"
            title="Quilted Satin Jacket"
            price="$660"
            oldPrice=""
            rating={4.5}
            reviews={55}
            discount=""
          />
        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-red-500 text-white px-4 py-2 rounded-md text-sm hover:bg-red-600">View All Products</button>
        </div>
      </section>

      {/* New Arrival */}
      <section className="container mx-auto mb-12">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="w-1 h-6 bg-red-500 mr-2"></div>
            <h2 className="text-lg font-semibold">Featured</h2>
          </div>
          <div className="flex items-center space-x-2">
            <button className="text-gray-600"><i className="fas fa-chevron-left"></i></button>
            <button className="text-gray-600"><i className="fas fa-chevron-right"></i></button>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4">New Arrival</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-black rounded-lg overflow-hidden">
            <Image src="/images/7.png" alt="PlayStation 5 console in white and black colors" className="w-full h-64 object-cover" width={500} height={500} />
            <div className="p-4 text-white">
              <h3 className="font-bold">PlayStation 5</h3>
              <p className="text-sm mb-2">Black and White version of the PS5 coming out on sale.</p>
              <button className="bg-red-500 text-white px-4 py-1 rounded-md text-sm hover:bg-red-600">Shop Now</button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-black rounded-lg overflow-hidden">
              <Image src="/images/7.png" alt="Woman wearing hat and fashion clothing" className="w-full h-32 object-cover" width={500} height={300} />
              <div className="p-3 text-white">
                <h3 className="font-bold">Women&apos;s Collections</h3>
                <p className="text-xs mb-2">Featured women collections that give you another vibe.</p>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md text-xs hover:bg-red-600">Shop Now</button>
              </div>
            </div>
            <div className="bg-black rounded-lg overflow-hidden col-span-1">
              <Image src="/images/7.png" alt="Wireless speakers with blue lights" className="w-full h-32 object-cover" width={300} height={300} />
              <div className="p-3 text-white">
                <h3 className="font-bold">Speakers</h3>
                <p className="text-xs mb-2">Amazing wireless speakers.</p>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md text-xs hover:bg-red-600">Shop Now</button>
              </div>
            </div>
            <div className="bg-black rounded-lg overflow-hidden col-span-1">
              <Image src="/images/7.png" alt="Luxury perfume bottle" className="w-full h-32 object-cover" width={300} height={300} />
              <div className="p-3 text-white">
                <h3 className="font-bold">Perfume</h3>
                <p className="text-xs mb-2">Gucci Intense Oud EDP.</p>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md text-xs hover:bg-red-600">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}

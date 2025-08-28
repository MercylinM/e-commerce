import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Footer } from "./shared-components/Footer";
import { Header } from "./shared-components/Header";
import Categories from "./components/Categories";
import BestSelling from "./components/BestSelling";
import ExploreProducts from "./components/ExploreProducts";
import NewArrivals from "./components/NewArrivals";
import ServicesList from "./components/ServicesList";
import MusicExperience from "./components/MusicExperience";
import FlashSale from "./components/FlashSale";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-8">
            {/* Sidebar - Hidden on mobile */}
            <aside className="hidden lg:block w-64 py-8 border-r">
              <nav className="space-y-4">
                <Link href="/category/womens-fashion" className="flex items-center justify-between text-gray-700 hover:text-black">
                  Woman&apos;s Fashion <ChevronRight className="w-4 h-4" />
                </Link>
                <Link href="/category/mens-fashion" className="flex items-center justify-between text-gray-700 hover:text-black">
                  Men&apos;s Fashion <ChevronRight className="w-4 h-4" />
                </Link>
                <Link href="/category/electronics" className="block text-gray-700 hover:text-black">
                  Electronics
                </Link>
                <Link href="/category/home-lifestyle" className="block text-gray-700 hover:text-black">
                  Home & Lifestyle
                </Link>
                <Link href="/category/medicine" className="block text-gray-700 hover:text-black">
                  Medicine
                </Link>
                <Link href="/category/sports-outdoor" className="block text-gray-700 hover:text-black">
                  Sports & Outdoor
                </Link>
                <Link href="/category/baby-toys" className="block text-gray-700 hover:text-black">
                  Baby&apos;s & Toys
                </Link>
                <Link href="/category/groceries-pets" className="block text-gray-700 hover:text-black">
                  Groceries & Pets
                </Link>
                <Link href="/category/health-beauty" className="block text-gray-700 hover:text-black">
                  Health & Beauty
                </Link>
              </nav>
            </aside>
            {/* Main Content */}
            <div className="flex-1 py-8">
              {/* Hero Banner */}
              <div className="bg-black text-white rounded-lg p-8 mb-16 relative overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                        <span className="text-black text-xs font-bold">📱</span>
                      </div>
                      <span className="text-gray-300">iPhone 14 Series</span>
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                      Up to 10%<br />
                      off Voucher
                    </h1>
                    <Link href="/shop" className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:opacity-80">
                      Shop Now <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="relative">
                    <div className="w-64 h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mx-auto" aria-label="iPhone 14 Series product image"></div>
                  </div>
                </div>
                {/* Carousel Indicators */}
                <div className="flex justify-center gap-2 mt-8" role="tablist">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <button
                      key={i}
                      role="tab"
                      aria-selected={i === 1}
                      aria-label={`Slide ${i}`}
                      className={`w-3 h-3 rounded-full ${i === 1 ? 'bg-brand-red' : 'bg-gray-500'}`}
                    />
                  ))}
                </div>
              </div>
              {/* Flash Sales */}
              <FlashSale />
              {/* Browse by Category */}
              <Categories />
              {/* Best Selling Products */}
              <BestSelling />
              {/* Music Experience Banner */}
              <MusicExperience />
              {/* Explore Products */}
              <ExploreProducts />
              {/* New Arrival */}
              <NewArrivals />
              {/* Services */}
              <ServicesList />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
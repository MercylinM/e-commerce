import { Camera, Gamepad, Headphones, Laptop, Smartphone, Watch } from "lucide-react";

export default function Categories() {
    return (
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-5 h-10 bg-brand-red rounded"></div>
          <span className="text-brand-red font-semibold">Categories</span>
        </div>
        <h2 className="text-3xl font-bold mb-8">Browse By Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: "Phones", icon: <Smartphone /> },
            { name: "Computers", icon: <Laptop /> },
            { name: "SmartWatch", icon: <Watch /> },
            { name: "Camera", icon: <Camera />, active: true },
            { name: "HeadPhones", icon: <Headphones /> },
            { name: "Gaming", icon: <Gamepad /> }
          ].map((category, i) => (
            <div key={i} className={`p-6 text-center cursor-pointer transition-colors ${category.active ? 'bg-brand-red text-white' : 'hover:bg-brand-red hover:text-white'} rounded-lg`}>
              <div className="text-4xl mb-4" aria-hidden="true">{category.icon}</div>
              <div className="font-medium">{category.name}</div>
            </div>
          ))}
        </div>
      </section>
  );
}


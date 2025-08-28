'use client';

import { Button } from "@/app/shared-components/Button";

export default function MusicExperience() {
  return (
    <section className="mb-16">
      <div className="bg-black text-white rounded-lg p-8 lg:p-16 relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-green-400 mb-4">Categories</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Enhance Your<br />
              Music Experience
            </h2>
            <div className="flex gap-4 mb-8">
              {["23", "05", "59", "35"].map((time, i) => (
                <div key={i} className="bg-white text-black rounded-full w-16 h-16 flex flex-col items-center justify-center">
                  <div className="font-bold text-sm">{time}</div>
                  <div className="text-xs">{["Hours", "Days", "Minutes", "Seconds"][i]}</div>
                </div>
              ))}
            </div>
            <Button className="bg-green-500 hover:bg-green-600 text-white px-8">
              Buy Now!
            </Button>
          </div>
          <div className="relative">
            <div className="w-64 h-64 bg-gradient-to-br from-green-500 to-green-700 rounded-full mx-auto" aria-label="Music experience product"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

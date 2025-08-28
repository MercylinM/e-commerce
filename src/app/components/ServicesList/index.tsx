import { Headphones, Shield, Truck } from "lucide-react";

export default function ServicesList() {
 return (
   <section className="mb-16">
     <div className="grid md:grid-cols-3 gap-8 text-center">
       <div>
         <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
           <Truck className="w-8 h-8" />
         </div>
         <h3 className="font-bold mb-2">FREE AND FAST DELIVERY</h3>
         <p className="text-gray-600">Free delivery for all orders over $140</p>
       </div>
       <div>
         <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
           <Headphones className="w-8 h-8" />
         </div>
         <h3 className="font-bold mb-2">24/7 CUSTOMER SERVICE</h3>
         <p className="text-gray-600">Friendly 24/7 customer support</p>
       </div>
       <div>
         <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
           <Shield className="w-8 h-8" />
         </div>
         <h3 className="font-bold mb-2">MONEY BACK GUARANTEE</h3>
         <p className="text-gray-600">We return money within 30 days</p>
       </div>
     </div>
   </section>
 );
}




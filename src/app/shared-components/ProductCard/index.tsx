import Image from "next/image";
import Button from "../Button";

interface ProductCardProps {
  image: string;
  title: string;
  price: number | string;
  oldPrice?: number | string;
  rating: number;
  reviews?: number;
  discount?: string;
  buttonText?: string;
}

export default function ProductCard({ image, title, price, oldPrice,rating, reviews, discount, buttonText }: ProductCardProps) {
  const renderStars = (rating: number ) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star text-yellow-400"></i>);
    }

    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt text-yellow-400"></i>);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star text-yellow-400"></i>);
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden relative group">
      {discount && (
        <div className={`absolute top-2 left-2 z-10 ${discount === "Sale" ? "bg-green-500" : "bg-red-500"} text-white text-xs px-2 py-1 rounded`}>
          {discount}
        </div>
      )}
      <div className="p-3">
        <div className="relative">
          <Image src={image} alt={title} className="w-full h-48 object-cover" width={200} height={250} />
          <div className="absolute top-2 right-2 flex space-x-1">
            <button className="bg-white rounded-full p-1.5 shadow-sm">
              <i className="far fa-heart text-gray-500"></i>
            </button>
            <button className="bg-white rounded-full p-1.5 shadow-sm">
              <i className="far fa-eye text-gray-500"></i>
            </button>
          </div>
        </div>
        <div className="mt-3">
          <h3 className="font-medium text-sm">{title}</h3>
          <div className="flex items-center mt-1">
            <div className="flex mr-2">
              {renderStars(rating)}
            </div>
            <span className="text-gray-500 text-xs">({reviews})</span>
          </div>
          <div className="flex items-center mt-2">
            <span className="font-bold">${price}</span>
            {oldPrice && (
              <span className="text-gray-400 line-through text-sm ml-2">${oldPrice}</span>
            )}
          </div>
          {buttonText && (
            <button className="w-full bg-black text-white text-xs py-1.5 rounded mt-2 hover:bg-gray-800">
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  //   <div className="border rounded-lg p-4 hover:shadow-lg transition">
  //     <Image src={image} alt={title} className="w-full h-48 object-cover" width={200} height={250} />
  //     <h3 className="mt-2 font-medium">{title}</h3>
  //     <div className="flex items-center space-x-2">
  //       <span className="text-red-500 font-bold">${price}</span>
  //       {oldPrice && (
  //         <span className="line-through text-gray-400">${oldPrice}</span>
  //       )}

  //       <Button />

  //     </div>
  //   </div>
  // 
);
}


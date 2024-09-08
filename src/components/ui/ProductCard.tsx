import Image from "next/image";
import Link from "next/link";
import { Product } from "../../../types/Product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      href={`/san-pham/${product.id}`}
      className="relative overflow-hidden w-full max-w-[260px] md:max-w-[280px] mx-auto"
    >
      <div className="relative">
        <Image
          src={product.imageUrl}
          width={500}
          height={300}
          alt="Product Image"
          className="w-full object-cover"
          priority={true}
        />
        {product.discount && (
          <span className="absolute top-2 right-2 bg-[#E97171] text-white text-xs font-semibold flex items-center justify-center w-10 h-10 rounded-full shadow-md">
            {product.discount}
          </span>
        )}
        {product.newLabel && !product.discount && (
          <span className="absolute top-2 right-2 bg-[#2EC1AC] text-white text-xs font-semibold flex items-center justify-center w-10 h-10 rounded-full shadow-md">
            {product.newLabel}
          </span>
        )}
      </div>
      <div className="p-4 bg-[#F4F5F7]">
        <h3 className="text-gray-900 font-bold text-lg">{product.name}</h3>
        <p className="text-gray-600 mt-1 text-sm">{product.description}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-md font-extrabold text-gray-900">
            {product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm line-through text-gray-500">
              {product.originalPrice}
            </span>
          )}
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-0 hover:bg-opacity-70 transition-opacity opacity-0 hover:opacity-100 p-4">
        <button className="mb-2 bg-white font-semibold py-2 px-4 shadow-md text-sm text-[#B88E2F]">
          Add to cart
        </button>
        <div className="flex w-full px-2 text-white text-sm space-x-4">
          <button className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-share-2"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
              <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
            </svg>
            <span>Share</span>
          </button>
          <button className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-move-horizontal"
            >
              <polyline points="18 8 22 12 18 16" />
              <polyline points="6 8 2 12 6 16" />
              <line x1="2" x2="22" y1="12" y2="12" />
            </svg>
            <span>Compare</span>
          </button>
          <button className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-heart"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <span>Like</span>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

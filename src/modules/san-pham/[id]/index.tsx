"use client";

import { Footer } from "@/layout/footer";
import { Header } from "@/layout/header";
import Image from "next/image";
import { useState } from "react";
import { FaFacebook, FaLinkedin, FaStar, FaTwitter } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Product } from "../../../../types/Product";
import ProductCard from "@/components/ui/ProductCard";
import { Color } from "../../../../types/Color";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";

const ProductDetailPage: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const [activeSize, setActiveSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const sizes = ["L", "XL", "XS"];

  const handleQuantityChange = (amount: number) => {
    if (quantity + amount > 0) {
      setQuantity(quantity + amount);
    }
  };

  const [mainImage, setMainImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJfnLgDiGKYaxVQApYVsxChexmtMbI42TYw&s"
  );

  const thumbnails = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJfnLgDiGKYaxVQApYVsxChexmtMbI42TYw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJfnLgDiGKYaxVQApYVsxChexmtMbI42TYw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJfnLgDiGKYaxVQApYVsxChexmtMbI42TYw&s",
  ];

  const handleThumbnailClick = (imageSrc: string) => {
    setMainImage(imageSrc);
  };

  const colors: Color[] = [
    { color: "purple-600", bg: "bg-purple-600" },
    { color: "black", bg: "bg-black" },
    { color: "yellow-500", bg: "bg-yellow-500" },
  ];

  const relatedProducts: Product[] = [
    {
      id: 1,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJfnLgDiGKYaxVQApYVsxChexmtMbI42TYw&s",
      discount: "-30%",
    },
    {
      id: 2,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJfnLgDiGKYaxVQApYVsxChexmtMbI42TYw&s",
    },
    {
      id: 3,
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJfnLgDiGKYaxVQApYVsxChexmtMbI42TYw&s",
      discount: "-50%",
    },
    {
      id: 4,
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJfnLgDiGKYaxVQApYVsxChexmtMbI42TYw&s",
      newLabel: "New",
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-white">
      <Header />
      <div className="w-full bg-[#F9F1E7] rounded-b-lg py-4 px-4 md:px-6 text-gray-800">
        <div className="flex flex-wrap items-center justify-center md:justify-start space-x-2 md:space-x-4 mx-4 md:mx-14">
          <p className="text-gray-500">Home</p>
          <svg
            className="h-5 w-5 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <p className="text-gray-500">Shop</p>
          <svg
            className="h-5 w-5 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <div className="border-l-2 h-6 mx-2 md:mx-4 border-gray-300"></div>
          <p className="font-semibold">Asgaard sofa</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full max-w-6xl p-4 mt-5 space-y-6 md:space-y-0">
        <div className="flex md:flex-row flex-col-reverse items-start md:space-x-4">
          <div className="flex md:flex-col flex-row md:space-y-4 mt-2 space-x-2 md:space-x-0 overflow-x-auto">
            {thumbnails.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Product Image ${index + 2}`}
                width={80}
                height={80}
                className="rounded-lg cursor-pointer flex-shrink-0"
                onClick={() => handleThumbnailClick(src)}
              />
            ))}
          </div>
          <div className="w-full flex justify-center mt-2">
            <Image
              src={mainImage}
              alt="Main Product Image"
              width={500}
              height={500}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 space-y-6 md:ml-20">
          <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left">
            Asgaard sofa
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-semibold text-center md:text-left">
            Rs. 250,000.00
          </p>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} className="text-yellow-500" />
            ))}
            <FaStar className="text-gray-300" />
            <div className="border-l-2 h-6 mx-2 md:mx-4 border-gray-300"></div>
            <p className="text-sm text-gray-600">5 Customer Review</p>
          </div>
          <p className="text-gray-600 text-center md:text-left">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
          <div>
            <h3 className="text-lg font-semibold text-center md:text-left">
              Size
            </h3>
            <div className="flex justify-center md:justify-start space-x-2 mt-2">
              {sizes.map((size) => (
                <Button
                  key={size}
                  variant="outline"
                  size="sm"
                  className={`px-4 ${activeSize === size
                      ? "bg-[#B88E2F] text-white"
                      : "bg-white text-black"
                    }`}
                  onClick={() => setActiveSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-center md:text-left">
              Color
            </h3>
            <div className="flex justify-center md:justify-start space-x-2 mt-2">
              {colors.map((colorObj) => (
                <Button
                  key={colorObj.color}
                  aria-label={`Select color ${colorObj.color}`}
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedColor(colorObj.color)}
                  className={`w-8 h-8 ${colorObj.bg} rounded-full ${selectedColor === colorObj.color
                      ? "border-2 border-[#B88E2F]"
                      : "border border-transparent"
                    } hover:${colorObj.bg} focus:${colorObj.bg}`}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-start space-y-4 md:space-y-0 md:space-x-4 mt-4">
            <div className="flex items-center justify-center md:justify-start border border-gray-300 rounded-full px-3 py-1">
              <Button
                variant="outline"
                size="sm"
                className="border-none text-lg"
                onClick={() => handleQuantityChange(-1)}
              >
                -
              </Button>
              <p className="px-3 text-lg">{quantity}</p>
              <Button
                variant="outline"
                size="sm"
                className="border-none text-lg"
                onClick={() => handleQuantityChange(1)}
              >
                +
              </Button>
            </div>
            <div className="flex justify-center md:justify-start space-x-4">
              <Button
                variant="outline"
                className="border-black border-2  px-6 py-2 w-full md:w-auto font-semibold"
              >
                Add To Cart
              </Button>
              <Button
                variant="outline"
                className="border-black border-2  px-6 py-2 w-full md:w-auto font-semibold"
              >
                + Compare
              </Button>
            </div>
          </div>
          <hr />
          <div className="text-sm text-gray-600 mt-4 space-y-2">
            <div className="flex items-center">
              <p className="w-24 font-semibold">SKU</p>
              <p>: SS001</p>
            </div>
            <div className="flex items-center">
              <p className="w-24 font-semibold">Category</p>
              <p>: Sofas</p>
            </div>
            <div className="flex items-center">
              <p className="w-24 font-semibold">Tags</p>
              <p>: Sofa, Chair, Home, Shop</p>
            </div>
            <div className="flex items-center">
              <p className="w-24 font-semibold">Share</p>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="p-1 border-none">
                  <FaFacebook className="text-lg" />
                </Button>
                <Button variant="outline" size="sm" className="p-1 border-none">
                  <FaLinkedin className="text-lg" />
                </Button>
                <Button variant="outline" size="sm" className="p-1 border-none">
                  <FaTwitter className="text-lg" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-300 my-10"></div>
      <div className="w-full max-w-6xl mt-10 p-4 md:p-8 mx-auto">
        <Tabs defaultValue="description">
          <TabsList className="flex justify-center pb-2 space-x-4 md:space-x-8 overflow-x-auto">
            <TabsTrigger
              value="description"
              className="text-lg font-semibold text-gray-500 data-[state=active]:text-black"
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              value="additional"
              className="text-lg font-semibold text-gray-500 data-[state=active]:text-black"
            >
              Additional Information
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="text-lg font-semibold text-gray-500 data-[state=active]:text-black"
            >
              Reviews [5]
            </TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-8 text-gray-600">
            <p className="mb-4">
              Embodying the raw, wayward spirit of rock ’n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <p>
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="flex justify-center">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJfnLgDiGKYaxVQApYVsxChexmtMbI42TYw&s"
                  alt="Product Image 1"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJfnLgDiGKYaxVQApYVsxChexmtMbI42TYw&s"
                  alt="Product Image 2"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="additional" className="mt-8 text-gray-600">
            <p>Additional Information content goes here...</p>
          </TabsContent>
          <TabsContent value="reviews" className="mt-8 text-gray-600">
            <div className="space-y-4">
              <div className="border-b pb-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">John Doe</h4>
                  <div className="flex items-center space-x-1">
                    {/* Star Rating */}
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.179c.969 0 1.372 1.24.588 1.81l-3.394 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.538 1.118L10 13.72a1 1 0 00-1.175 0l-3.395 2.46c-.783.57-1.838-.197-1.538-1.118l1.287-3.974a1 1 0 00-.364-1.118L1.82 8.402c-.783-.57-.38-1.81.588-1.81h4.179a1 1 0 00.95-.69l1.286-3.974z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="mt-2">
                  This speaker is amazing! The sound quality is superb and it
                  really captures the essence of rock ’n’ roll. Highly
                  recommend!
                </p>
              </div>
              <div className="border-b pb-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">Jane Smith</h4>
                  <div className="flex items-center space-x-1">
                    {[...Array(4)].map((_, index) => (
                      <svg
                        key={index}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.179c.969 0 1.372 1.24.588 1.81l-3.394 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.538 1.118L10 13.72a1 1 0 00-1.175 0l-3.395 2.46c-.783.57-1.838-.197-1.538-1.118l1.287-3.974a1 1 0 00-.364-1.118L1.82 8.402c-.783-.57-.38-1.81.588-1.81h4.179a1 1 0 00.95-.69l1.286-3.974z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="mt-2">
                  {
                    "Great sound, but the battery life could be better. Overall, it's a solid purchase."
                  }
                </p>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Add a Review</h4>
                <form>
                  <div className="flex flex-col space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Rating
                      </label>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, index) => (
                          <svg
                            key={index}
                            className="w-6 h-6 text-yellow-500 cursor-pointer"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.179c.969 0 1.372 1.24.588 1.81l-3.394 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.538 1.118L10 13.72a1 1 0 00-1.175 0l-3.395 2.46c-.783.57-1.838-.197-1.538-1.118l1.287-3.974a1 1 0 00-.364-1.118L1.82 8.402c-.783-.57-.38-1.81.588-1.81h4.179a1 1 0 00.95-.69l1.286-3.974z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Review
                      </label>
                      <textarea
                        rows={4}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        placeholder="Share your thoughts..."
                      />
                    </div>
                    <div>
                      <Button
                        type="submit"
                        className="px-4 py-2rounded-md shadow-sm"
                      >
                        Submit Review
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div className="w-full h-[1px] bg-gray-300 my-10"></div>
      <div className="w-full max-w-6xl mt-10 p-4 md:p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Related Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((product: Product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Button
            variant="outline"
            className="px-6 text-[#B88E2F] border border-[#B88E2F] hover:text-[#B88E2F]"
          >
            Show More
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;

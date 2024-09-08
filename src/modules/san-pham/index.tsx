import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Footer } from "@/layout/footer";
import { Header } from "@/layout/header";
import { Product } from "../../../types/Product";
import ProductCard from "@/components/ui/ProductCard";
export default function ProductPage() {
  const products: Product[] = [
    {
      id: 1,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "-30%",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJfnLgDiGKYaxVQApYVsxChexmtMbI42TYw&s",
    },
    {
      id: 2,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "-30%",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJfnLgDiGKYaxVQApYVsxChexmtMbI42TYw&s",
    },
    {
      id: 3,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "-30%",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJfnLgDiGKYaxVQApYVsxChexmtMbI42TYw&s",
    },
    {
      id: 4,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "-30%",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJfnLgDiGKYaxVQApYVsxChexmtMbI42TYw&s",
    },
    {
      id: 5,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "-30%",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJfnLgDiGKYaxVQApYVsxChexmtMbI42TYw&s",
    },
    {
      id: 6,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "-30%",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJfnLgDiGKYaxVQApYVsxChexmtMbI42TYw&s",
    },
    {
      id: 7,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "-30%",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJfnLgDiGKYaxVQApYVsxChexmtMbI42TYw&s",
    },
    {
      id: 8,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "-30%",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJfnLgDiGKYaxVQApYVsxChexmtMbI42TYw&s",
    },
  ];
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-50">
      <Header />
      <div className="w-full md:w-5/6 lg:w-2/3 bg-gray-100 rounded-lg py-20 flex justify-center items-center">
        Trang Mẫu
      </div>
      <div className="w-full bg-[#F9F1E7] rounded-b-lg flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-6 text-gray-800">
        <div className="flex items-center space-x-4 mx-4 md:mx-14">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-sliders-horizontal mr-2"
            >
              <line x1="21" x2="14" y1="4" y2="4" />
              <line x1="10" x2="3" y1="4" y2="4" />
              <line x1="21" x2="12" y1="12" y2="12" />
              <line x1="8" x2="3" y1="12" y2="12" />
              <line x1="21" x2="16" y1="20" y2="20" />
              <line x1="12" x2="3" y1="20" y2="20" />
              <line x1="14" x2="14" y1="2" y2="6" />
              <line x1="8" x2="8" y1="10" y2="14" />
              <line x1="16" x2="16" y1="18" y2="22" />
            </svg>
            <p className="text-lg font-medium">Filter</p>
          </div>
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-grip-horizontal"
            >
              <circle cx="12" cy="9" r="1" />
              <circle cx="19" cy="9" r="1" />
              <circle cx="5" cy="9" r="1" />
              <circle cx="12" cy="15" r="1" />
              <circle cx="19" cy="15" r="1" />
              <circle cx="5" cy="15" r="1" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-gallery-vertical"
            >
              <path d="M3 2h18" />
              <rect width="18" height="12" x="3" y="6" rx="2" />
              <path d="M3 22h18" />
            </svg>
            <div className="border-l-2 h-6 mx-4 border-gray-300"></div>

            <div className="text-sm font-semibold">
              <p>Showing 1-16 of 32 results</p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4 mx-4 md:mx-14 mt-4 md:mt-0">
          <div className="flex items-center space-x-2">
            <p className="text-lg font-medium">Show</p>
            <Input
              placeholder="16"
              className="w-12 p-1 text-center rounded border border-gray-300"
            />
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-lg font-medium">Sort by</p>
            <Input
              placeholder="Default"
              className="w-24 p-1 text-center rounded border border-gray-300"
            />
          </div>
        </div>
      </div>
      <div className="mb-5 w-full max-w-screen-xl mx-auto px-4">
        <div className="flex flex-wrap justify-center sm:justify-start items-start gap-4 mt-8 w-full">
          {products.map((product: Product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
        <div className="w-3/5 mx-auto mt-5">
          <div className="flex justify-center space-x-4">
            <Button className="bg-[#B88E2F] hover:bg-[#B88E2F]">1</Button>
            <Button className="bg-[#F9F1E7] hover:bg-[#F9F1E7] text-black">
              2
            </Button>
            <Button className="bg-[#F9F1E7] hover:bg-[#F9F1E7] text-black">
              3
            </Button>
            <Button className="bg-[#F9F1E7] hover:bg-[#F9F1E7] text-black">
              Next
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

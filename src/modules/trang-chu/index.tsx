'use client'

import { Button } from "@/components/ui/button"
import { Footer } from "@/layout/footer"
import { Header } from "@/layout/header"
import { IMAGES } from "@/utils/image"
import Image from "next/image"
import { Products } from "./products"
import { Slider } from "./slider"
import Link from "next/link"

interface Product {
    id: number
    name: string
    price: number
    image: string
    description: string
    status: string
    discount: number
    currentPrice: number
}

const products: Product[] = [
    {
        id: 1,
        name: "Elegant Dining Set",
        price: 1500000000000000000000,
        image: "/images/dining-set.jpg",
        description: "A beautifully crafted dining set for modern homes.",
        status: "New",
        discount: 10,
        currentPrice: 135000,
    },
    {
        id: 2,
        name: "Luxury Sofa",
        price: 250000,
        image: "/images/sofa.jpg",
        description: "A luxurious sofa made from high-quality materials.",
        status: "Available",
        discount: 15,
        currentPrice: 212500,
    },
    {
        id: 3,
        name: "Premium Coffee Table",
        price: 120000,
        image: "/images/coffee-table.jpg",
        description: "A premium wooden coffee table with a sleek design.",
        status: "Available",
        discount: 5,
        currentPrice: 114000,
    },
    {
        id: 4,
        name: "Stylish Armchair",
        price: 180000,
        image: "/images/armchair.jpg",
        description: "A stylish armchair perfect for relaxation.",
        status: "New",
        discount: 20,
        currentPrice: 144000,
    },
    {
        id: 5,
        name: "Modern Bed Frame",
        price: 300000,
        image: "/images/bed-frame.jpg",
        description: "A modern bed frame that adds elegance to your bedroom.",
        status: "Available",
        discount: 25,
        currentPrice: 225000,
    },
    {
        id: 6,
        name: "Classic Bookshelf",
        price: 130000,
        image: "/images/bookshelf.jpg",
        description: "A classic bookshelf with ample space for books and decor.",
        status: "Available",
        discount: 10,
        currentPrice: 117000,
    },
    {
        id: 7,
        name: "Outdoor Patio Set",
        price: 220000,
        image: "/images/patio-set.jpg",
        description: "A durable outdoor patio set for relaxing in your garden.",
        status: "Available",
        discount: 15,
        currentPrice: 187000,
    },
    {
        id: 8,
        name: "Office Desk",
        price: 140000,
        image: "/images/office-desk.jpg",
        description: "A sleek office desk with plenty of workspace and storage.",
        status: "Available",
        discount: 12,
        currentPrice: 123200,
    },
];


export function HomePage() {
    return (
        <div className="w-full min-h-screen flex flex-col justify-start items-center gap-10">
            <Header />
            <div className="w-5/6 md:w-2/3 lg:w-2/3 flex flex-col justify-center items-center">
                <div className="bg-cover bg-center h-[600px] w-full pr-10 pl-10 lg:pl-[500px] flex justify-center items-center"
                    style={{ backgroundImage: `url(${IMAGES.HOME_SLIDE})` }}>
                    <div className="p-8 bg-[#FFF3E3] rounded-lg w-full flex flex-col justify-center text-center lg:text-start">
                        <div className="text-black text-sm font-semibold tracking-widest mb-2">New Arrival</div>
                        <div className="text-[#B88E2F] text-4xl font-bold mb-3 text-clip overflow-hidden">Discover Our New Collection</div>
                        <div className="text-sm font-medium mb-8 text-clip overflow-hidden">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.</div>
                        <Link className="w-full" href="/san-pham">
                            <Button className="bg-[#B88E2F] p-7 w-full lg:w-3/5 hover:opacity-80 hover:bg-[#B88E2F] text-ellipsis overflow-hidden whitespace-nowrap">
                                BUY NOW
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="px-20 py-14 flex flex-col justify-start items-center">
                    <div className="text-2xl font-extrabold text-center">Browse The Range</div>
                    <div className="pb-10 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    <div className="flex flex-col lg:flex-row gap-5">
                        <div className="flex flex-col justify-center items-center gap-5 transform transition-transform hover:scale-110 hover:cursor-pointer">
                            <Image src={IMAGES.HOME_BDR_1} alt="BDR_1" width={350} height={50} priority={true} className="rounded-lg w-48 lg:w-full" />
                            <div className="font-bold text-lg">Dining</div>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-5 transform transition-transform hover:scale-110 hover:cursor-pointer">
                            <Image src={IMAGES.HOME_BDR_2} alt="BDR_2" width={350} height={50} priority={true} className="rounded-lg w-48 lg:w-full" />
                            <div className="font-bold text-lg">Living</div>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-5 transform transition-transform hover:scale-110 hover:cursor-pointer">
                            <Image src={IMAGES.HOME_BDR_3} alt="BDR_3" width={350} height={50} priority={true} className="rounded-lg w-48 lg:w-full" />
                            <div className="font-bold text-lg">Bedroom</div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col justify-start items-center mb-10">
                    <div className="text-2xl font-extrabold text-center mb-5">Our Products</div>
                    <div className="w-full mb-5">
                        <Products products={products} />
                    </div>
                    <Link className="w-full flex justify-center items-center" href="/san-pham">
                        <Button className="w-full md:w-1/5 lg:w-1/5 rounded-sm bg-white border border-[#B88E2F] text-[#B88E2F] font-bold hover:bg-[#B88E2F] hover:text-white truncate">
                            Show More
                        </Button>
                    </Link>
                </div>
                <div className="w-full py-10 bg-[#FCF8F3] px-10 lg:lx-0 md:px-0 mb-20">
                    <Slider />
                </div>
                <div className="bg-cover bg-center h-[300px] lg:h-[600px] md:h-[600px] w-full mb-10" style={{ backgroundImage: `url(${IMAGES.HOME_GRID_IMG})` }}>
                    <div className="flex flex-col items-center justify-center" style={{ marginTop: '-40px' }}>
                        <div className="text-sm text-gray-500 font-semibold">Share your setup with</div>
                        <div className="text-2xl text-gray-700 font-extrabold">#ViewInFurniture</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

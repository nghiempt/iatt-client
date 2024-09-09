'use client'

import { Button } from "@/components/ui/button"
import { Footer } from "@/layout/footer"
import { Header } from "@/layout/header"
import { IMAGES } from "@/utils/image"
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
        discount: 10, // 10% discount
        currentPrice: 135000, // 150000 - 10% = 135000
    },
    {
        id: 2,
        name: "Luxury Sofa",
        price: 250000,
        image: "/images/sofa.jpg",
        description: "A luxurious sofa made from high-quality materials.",
        status: "Available",
        discount: 15, // 15% discount
        currentPrice: 212500, // 250000 - 15% = 212500
    },
    {
        id: 3,
        name: "Premium Coffee Table",
        price: 120000,
        image: "/images/coffee-table.jpg",
        description: "A premium wooden coffee table with a sleek design.",
        status: "Available",
        discount: 5, // 5% discount
        currentPrice: 114000, // 120000 - 5% = 114000
    },
    {
        id: 4,
        name: "Stylish Armchair",
        price: 180000,
        image: "/images/armchair.jpg",
        description: "A stylish armchair perfect for relaxation.",
        status: "New",
        discount: 20, // 20% discount
        currentPrice: 144000, // 180000 - 20% = 144000
    },
    {
        id: 5,
        name: "Modern Bed Frame",
        price: 300000,
        image: "/images/bed-frame.jpg",
        description: "A modern bed frame that adds elegance to your bedroom.",
        status: "Available",
        discount: 25, // 25% discount
        currentPrice: 225000, // 300000 - 25% = 225000
    },
    {
        id: 6,
        name: "Classic Bookshelf",
        price: 130000,
        image: "/images/bookshelf.jpg",
        description: "A classic bookshelf with ample space for books and decor.",
        status: "Available",
        discount: 10, // 10% discount
        currentPrice: 117000, // 130000 - 10% = 117000
    },
    {
        id: 7,
        name: "Outdoor Patio Set",
        price: 220000,
        image: "/images/patio-set.jpg",
        description: "A durable outdoor patio set for relaxing in your garden.",
        status: "Available",
        discount: 15, // 15% discount
        currentPrice: 187000, // 220000 - 15% = 187000
    },
    {
        id: 8,
        name: "Office Desk",
        price: 140000,
        image: "/images/office-desk.jpg",
        description: "A sleek office desk with plenty of workspace and storage.",
        status: "Available",
        discount: 12, // 12% discount
        currentPrice: 123200, // 140000 - 12% = 123200
    },
];


export function BlogPage() {
    return (
        <div className="w-full min-h-screen flex flex-col justify-start items-center gap-10">
            <Header />
            <div className="w-5/6 md:w-2/3 lg:w-2/3 flex flex-col justify-center items-center">
                {/*Top Introduction*/}
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
            </div>
            <Footer />
        </div>
    )
}

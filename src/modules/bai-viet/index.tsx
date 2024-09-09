'use client'

import { Footer } from "@/layout/footer"
import { Header } from "@/layout/header"
import { ChevronRight, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Blogs } from "./blogs"
import { Input } from "@/components/ui/input"
import { IMAGES } from "@/utils/image"

interface Blog {
    id: number
    title: string
    date: Date
    image: string
    description: string
    category: string //Crafts, Design, Handmade, Interior, Wood
    categoryId: number
    role: string //User, Admin
}

interface Category {
    id: number
    name: string
    count: number
}

const blogs: Blog[] = [
    {
        id: 1,
        title: "How to Create Stunning Wood Crafts",
        date: new Date("2024-01-15"),
        image: "/images/wood-crafts.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
        category: "Crafts",
        categoryId: 1,
        role: "User"
    },
    {
        id: 2,
        title: "Top 10 Handmade Gifts for Any Occasion",
        date: new Date("2024-02-10"),
        image: "/images/handmade-gifts.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
        category: "Handmade",
        categoryId: 3,
        role: "Admin"
    },
    {
        id: 3,
        title: "The Ultimate Guide to Interior Design Trends",
        date: new Date("2024-03-05"),
        image: "/images/interior-design.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
        category: "Interior",
        categoryId: 4,
        role: "User"
    },
    {
        id: 4,
        title: "Designing Your Dream Workspace: Ideas & Tips",
        date: new Date("2024-03-15"),
        image: "/images/workspace-design.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
        category: "Design",
        categoryId: 2,
        role: "User"
    },
    {
        id: 5,
        title: "Creative Uses of Wood in Interior Design",
        date: new Date("2024-04-01"),
        image: "/images/wood-interior.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
        category: "Wood",
        categoryId: 5,
        role: "Admin"
    },
    {
        id: 6,
        title: "Handmade Home Decor Ideas to Try",
        date: new Date("2024-04-15"),
        image: "/images/handmade-home-decor.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
        category: "Handmade",
        categoryId: 3,
        role: "User"
    },
    {
        id: 7,
        title: "How to Design a Minimalist Living Room",
        date: new Date("2024-05-01"),
        image: "/images/minimalist-living-room.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
        category: "Interior",
        categoryId: 4,
        role: "Admin"
    },
    {
        id: 8,
        title: "Sustainable Design Trends for 2024",
        date: new Date("2024-05-20"),
        image: "/images/sustainable-design.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
        category: "Design",
        categoryId: 2,
        role: "User"
    },
    {
        id: 9,
        title: "DIY Wood Projects for Beginners",
        date: new Date("2024-06-05"),
        image: "/images/diy-wood-projects.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
        category: "Wood",
        categoryId: 5,
        role: "User"
    },
    {
        id: 10,
        title: "Modern Crafts for a Chic Home",
        date: new Date("2024-06-25"),
        image: "/images/modern-crafts.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
        category: "Crafts",
        categoryId: 1,
        role: "Admin"
    }
];

const categories: Category[] = [
    { id: 1, name: "Crafts", count: 2 },
    { id: 2, name: "Design", count: 2 },
    { id: 3, name: "Handmade", count: 2 },
    { id: 4, name: "Interior", count: 2 },
    { id: 5, name: "Wood", count: 2 }
];

export function BlogPage() {
    return (
        <div className="w-full min-h-screen flex flex-col justify-start items-center gap-10">
            <Header />
            <div className="w-5/6 md:w-2/3 lg:w-2/3 flex flex-col justify-center items-center">
                {/*Top Introduction*/}
                <div className="bg-cover bg-center h-[250px] w-full flex justify-center items-center"
                    style={{ backgroundImage: `url('/breadcrumb.png')` }}>
                    <div className="w-full flex flex-col justify-center items-center">
                        <Image
                            src='/Meubel_House_Logos.png'
                            alt='Meubel House'
                            width={50}
                            height={50}
                            className="text-center"
                        />
                        <div className="text-4xl font-semibold mb-2">
                            Blog
                        </div>
                        <div className="flex gap-2 items-center">
                            <Link href="/" className="font-semibold text-sm">
                                Home
                            </Link>
                            <ChevronRight size={20} />
                            <span className="text-sm">Blog</span>
                        </div>
                    </div>
                </div>

                {/* Blogs */}
                <div className="w-full p-10 grid grid-cols-3 gap-10">
                    {/* Blog List */}
                    <div className="col-span-2">
                        <Blogs blogs={blogs.slice(0, 3)} />
                    </div>

                    {/* Side bar */}
                    <div className="col-span-1">
                        <div>
                            <form>
                                <div className="relative">
                                    <Input
                                        type="text"
                                        id="name"
                                        className="w-full border border-gray-400 p-2 rounded-lg"
                                    />
                                    <Search size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2" />
                                </div>
                            </form>
                        </div>

                        {/* Category */}
                        <div className="p-6">
                            <div className="text-lg font-semibold mb-5">
                                Categories
                            </div>
                            <div className="flex flex-col gap-8 w-full">
                                {categories.map((category) => (
                                    <div key={category.id} className="w-full flex relative hover:cursor-pointer">
                                        <div className="text-left text-xs font-semibold text-gray-400">
                                            {category.name}
                                        </div>
                                        <div className="absolute right-0 text-right text-xs font-semibold text-gray-400">
                                            {category.count}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recent Posts */}
                        <div className="p-6">
                            <div className="text-lg font-semibold mb-5">
                                Recent Posts
                            </div>
                            <div className="w-full flex flex-col gap-8">
                                {blogs.slice(0, 5).map((blog) => (
                                    <div key={blog.id} className="w-full grid grid-cols-3 items-center transform transition-transform hover:scale-110 hover:cursor-pointer">
                                        <div className="relative col-span-1 p-8 w-full flex items-center">
                                            <Image
                                                src={IMAGES.BLOG_IMAGE_1}
                                                alt={blog.title + ' image'}
                                                layout="fill"
                                                objectFit="cover"
                                                className='rounded-md w-full'
                                            />
                                        </div>
                                        <div className="col-span-2 pl-3">
                                            <div className="text-xs font-medium max-h-[34px] text-clip overflow-hidden mb-1">
                                                {blog.title}
                                            </div>
                                            <div className="text-[11px] font-medium text-gray-400 truncate">
                                                {blog.date.toDateString()}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

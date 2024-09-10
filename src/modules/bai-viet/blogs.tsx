'use client';

import React from 'react';
import Image from 'next/image';
import { Card } from "@/components/ui/card";
import { IMAGES } from '@/utils/image';
import { Calendar, Tag, User } from 'lucide-react';
import Link from 'next/link';

interface Blog {
    id: number
    title: string
    date: Date
    image: string
    description: string
    category: string
    categoryId: number
    role: string
}

interface BlogProps {
    blogs: Blog[]
}

export const Blogs: React.FC<BlogProps> = ({ blogs }) => {
    return (
        <div className="w-full rounded-lg flex flex-col gap-10">
            {blogs.map((blog) => (
                <div key={blog.id} className='relative group'>
                    <Card className="rounded-sm flex flex-col h-[400px] lg:h-[550px] md:h-[550px] border-none">
                        <div className='relative w-full h-[200px] lg:h-[350px] md:h-[350px] mb-4'>
                            <Image
                                src={IMAGES.BLOG_IMAGE_1}
                                alt={blog.title + ' image'}
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className='rounded-lg'
                            />
                        </div>
                        <div className='flex flex-col justify-center text-start'>
                            <div className='flex flex-wrap gap-5 items-center mb-3'>
                                <div className='flex gap-1 items-center'>
                                    <User size={16} color='#9F9F9F' fill='#9F9F9F' />
                                    <p className="text-xs font-medium text-left truncate text-gray-400">
                                        {blog.role}
                                    </p>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <Calendar size={16} color='#9F9F9F' />
                                    <p className="text-xs font-medium text-left truncate text-gray-400">
                                        {blog.date.toDateString()}
                                    </p>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <Tag size={16} color='#9F9F9F' />
                                    <p className="text-xs font-medium text-left truncate text-gray-400">
                                        {blog.category}
                                    </p>
                                </div>
                            </div>
                            <div className="text-xl font-semibold mb-1 max-h-[28px] truncate">
                                {blog.title}
                            </div>
                            <div className="text-xs font-normal text-gray-400 text-left mb-2 max-h-[80px] text-clip overflow-hidden mb-5">
                                {blog.description}
                            </div>
                            <Link href={`/blog-detail/${blog.id}`} className='text-xs font-semibold underline underline-offset-[10px] hover:cursor-pointer'>
                                Read more
                            </Link>
                        </div>
                    </Card>
                </div>
            ))
            }
        </div >
    );
};

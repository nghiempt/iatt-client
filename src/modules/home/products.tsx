
'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { formatPrice } from "@/utils/helper";
import { IMAGES } from '@/utils/image';
import { ArrowRightLeft, Heart, Share2 } from 'lucide-react';

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

interface ProductProps {
    products: Product[]
}

export const Products: React.FC<ProductProps> = ({ products }) => {
    return (
        <div className="w-full rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
                <div className='relative group'>
                    <Card className="rounded-sm bg-gray-100 flex flex-col h-[380px] border-none">
                        <div className='relative w-full h-[280px]'>
                            <Image
                                src={IMAGES.HOME_BDR_1}
                                alt={product.name + ' image'}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className='flex flex-col justify-center p-3 text-start'>
                            <div className="text-lg font-bold mb-1 max-h-[28px] truncate">
                                {product.name}
                            </div>
                            <div className="text-xs font-semibold text-gray-400 text-left mb-2 max-h-[32px] text-clip overflow-hidden ...">
                                {product.description}
                            </div>
                            <div className='w-full grid grid-cols-5 mb-2 items-center'>
                                <p className="col-span-3 max-h-[24px] text-md font-semibold text-left truncate">
                                    Rp {formatPrice(product.price)}
                                </p>
                                <p className="col-span-2 max-h-[24px] text-sm font-medium text-right text-gray-400 line-through truncate">
                                    {formatPrice(product.currentPrice)}</p>
                            </div>
                        </div>
                    </Card>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className='absolute inset-0 w-full flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <Button className='w-2/3 mb-5 items-center font-bold rounded-sm bg-white opacity-100 text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white truncate'>
                            Add to cart
                        </Button>
                        <div className='w-full p-3 flex flex-wrap justify-center items-center gap-2'>
                            <div className='flex justify-center items-center text-white text-sm font-semibold gap-1 hover:cursor-pointer'>
                                <Share2 size={14} />
                                Share
                            </div>
                            <div className='flex justify-center items-center text-white text-sm font-semibold gap-1 hover:cursor-pointer'>
                                <ArrowRightLeft size={14} />
                                Compare
                            </div>
                            <div className='flex justify-center items-center text-white text-sm font-semibold gap-1 hover:cursor-pointer'>
                                <Heart size={14} />
                                Like
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
        </div >
    );
};

import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { IMAGES } from '@/utils/image';
import Image from 'next/image';
import Link from 'next/link';

export function Slider() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [paginationIndex, setPaginationIndex] = useState(0)
    const [slidesData, setSlidesData] = useState([
        { id: "01", image: IMAGES.HOME_BDR_1, title: 'Inner Peace', roomType: 'Bed Room' },
        { id: "02", image: IMAGES.HOME_BDR_2, title: 'Elegant Living', roomType: 'Living Room' },
        { id: "03", image: IMAGES.HOME_BDR_3, title: 'Modern Simplicity', roomType: 'Kitchen' },
        { id: "04", image: IMAGES.HOME_BDR_2, title: 'Calm Retreat', roomType: 'Home Office' }
    ]);

    const totalSlides = slidesData.length;

    const handleNext = () => {
        if (containerRef.current) {
            const updatedSlides = [...slidesData];
            const firstSlide = updatedSlides.shift();
            if (firstSlide) {
                updatedSlides.push(firstSlide);
            }
            setSlidesData(updatedSlides);
            setCurrentIndex(0);

            setPaginationIndex((prevIndex) => (prevIndex + 1) % totalSlides);

            containerRef.current.scrollTo({
                left: 0,
                behavior: 'smooth',
            });
        }
    };

    const handlePrev = () => {
        if (containerRef.current) {
            const updatedSlides = [...slidesData];
            const lastSlide = updatedSlides.pop();
            if (lastSlide) {
                updatedSlides.unshift(lastSlide);
            }
            setSlidesData(updatedSlides);
            setCurrentIndex(0);

            setPaginationIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);

            containerRef.current.scrollTo({
                left: 0,
                behavior: 'smooth',
            });
        }
    };

    // Mobile touch logic
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
    }, [currentIndex]);

    return (
        <div className="flex flex-col md:grid md:grid-cols-5 lg:grid lg:grid-cols-5">
            <div className="col-span-2 p-10 flex flex-col justify-center">
                <div className="text-black text-3xl font-bold mb-2 text-clip overflow-hidden text-center md:text-start lg:text-start">50+ Beautiful rooms inspiration</div>
                <div className="text-sm font-medium text-gray-600 mb-5 text-clip overflow-hidden text-center md:text-start lg:text-start">Our designer already made a lot of beautiful prototipe of rooms that inspire you</div>
                <Link className="w-full flex justify-center items-center md:justify-start lg:justify-start" href="/san-pham">
                    <Button className="bg-[#B88E2F] rounded-sm lg:w-1/2 hover:opacity-80 hover:bg-[#B88E2F] text-ellipsis overflow-hidden whitespace-nowrap">
                        Explore More
                    </Button>
                </Link>
            </div>
            <div className="col-span-3 w-full relative flex flex-col items-center justify-center h-[550px]">
                <div className="relative w-full h-full overflow-hidden">
                    <div
                        className="w-full h-full carousel flex snap-x snap-mandatory gap-4 scroll-smooth flex items-center"
                        ref={containerRef}
                    >
                        {slidesData.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`relative shrink-0 snap-start rounded-xl transition-all duration-300 ease-in-out transform ${currentIndex === index ? 'scale-110' : 'scale-100'}`}
                                style={{
                                    width: currentIndex === index ? '270px' : '225px',
                                    height: currentIndex === index ? '360px' : '300px',
                                    marginRight: currentIndex === index ? '20px' : '10px',
                                }}
                            >
                                <div className='absolute inset-0 flex items-center justify-center'>
                                    <Image
                                        src={slide.image}
                                        alt={slide.roomType + ' image'}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className='rounded-sm'
                                    />
                                    <div className="absolute inset-0 flex items-end justify-start px-7 py-5 rounded-b-lg z-10">
                                        <div className='bg-white bg-opacity-80 p-5'>
                                            <div className='text-xs font-semibold text-gray-400 mb-1'>{slide.id} --- {slide.roomType}</div>
                                            <div className={`font-bold text-black opacity-100 ${currentIndex === index ? 'text-lg' : 'text-sm'}`}>{slide.title}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right arrow button */}
                <div className="absolute top-1/2 right-10">
                    <button
                        className="bg-white p-2 rounded-full shadow-md"
                        onClick={handleNext}
                    >
                        <ChevronRight color='#B88E2F' />
                    </button>
                </div>

                {/* Pagination */}
                <div className="absolute md:left-1/2 lg:left-1/2 bottom-5 flex gap-2 items-center">
                    {slidesData.map((_, index) => (
                        <span
                            key={index}
                            className={`relative h-3 w-3 flex items-center justify-center 
                        ${paginationIndex === index ? 'h-8 w-8 rounded-full border-2 border-[#B88E2F]' : ''}`}
                        >
                            {/* Inner circle */}
                            <span
                                className={`h-3 w-3 rounded-full transition-all duration-300 
                            ${paginationIndex === index ? 'bg-[#B88E2F]' : 'bg-gray-300'}`}
                            />
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

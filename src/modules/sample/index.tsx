'use client'

import { Footer } from "@/layout/footer"
import { Header } from "@/layout/header"

export function SamplePage() {
    return (
        <div className="w-full min-h-screen flex flex-col justify-start items-center gap-10">
            <Header />
            <div className="w-5/6 md:w-2/3 lg:w-2/3 bg-gray-100 rounded-lg py-20 flex justify-center items-center">Trang Mẫu</div>
            <Footer />
        </div>
    )
}
